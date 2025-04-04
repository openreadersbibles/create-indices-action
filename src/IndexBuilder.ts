/* eslint-disable prettier/prettier */
import * as core from '@actions/core'
import * as github from '@actions/github'
import { Octokit } from '@octokit/core'
import {
  ProjectConfiguration,
  ProjectConfigurationRow
} from '../../application/models/ProjectConfiguration.js'
import { FileIndex } from './FileIndex.js'

interface GitHubFile {
  path: string
  content: string
}

export class IndexBuilder {
  token: string
  owner: string
  repo: string
  octokit: Octokit
  project: ProjectConfiguration | undefined

  constructor() {
    this.token = core.getInput('github-token') // Pass a GitHub token as input
    this.owner = github.context.repo.owner
    this.repo = github.context.repo.repo
    this.octokit = new Octokit({
      auth: this.token
    })
  }

  async run() {
    const projectJson = await this.getRepoFile(`${this.repo}.json`)
    this.project = ProjectConfiguration.fromRow(
      JSON.parse(projectJson) as ProjectConfigurationRow
    )
    core.debug(`Project Configuration: ${this.project.id}`)

    const folders = await this.getDirectories()

    const files = await Promise.all(
      folders.map((dir) => this.createIndexForFolder(dir))
    )
    await this.addFilesToRepository(this.repo, files, 'gh-pages')
  }

  async getRelevantFiles(directory: string) {
    const response = await this.octokit.request(
      'GET /repos/{owner}/{repo}/contents/{path}',
      {
        owner: this.owner,
        repo: this.repo,
        path: directory,
        ref: 'gh-pages',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    )

    if (Array.isArray(response.data)) {
      return response.data
        .filter(
          (item) =>
            item.type === 'file' &&
            (item.name.endsWith('.pdf') || item.name.endsWith('.html')) &&
            item.name !== 'index.html' /// don't include the index file itself
        )
        .map((item) => item.name)
    } else {
      throw new Error('The specified path is not a directory.')
    }
  }

  async getDirectories() {
    const response = await this.octokit.request(
      'GET /repos/{owner}/{repo}/contents/{path}',
      {
        owner: this.owner,
        repo: this.repo,
        path: '',
        ref: 'gh-pages',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    )

    if (Array.isArray(response.data)) {
      return response.data
        .filter((item) => item.type === 'dir' && !item.name.startsWith('.'))
        .map((item) => item.name) // List of file and directory names
    } else {
      throw new Error('The specified path is not a directory.')
    }
  }

  async createIndexForFolder(folder: string): Promise<GitHubFile> {
    if (!this.project) {
      throw new Error('Project configuration is not loaded.')
    }
    core.debug(`Processing ${folder}:`)
    const files = await this.getRelevantFiles(folder)
    const index = new FileIndex(files, this.project)
    return { path: `${folder}/index.html`, content: index.toHtml() }
  }

  async getRepoFile(path: string): Promise<string> {
    const response = await this.octokit.request(
      `GET /repos/openreadersbibles/${this.repo}/contents/${path}`,
      {
        owner: this.owner,
        repo: this.repo,
        path: path,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    )
    const base64Content = response.data.content // Base64-encoded content
    const buffer = Buffer.from(base64Content, 'base64').toString('utf-8')
    return buffer
  }

  public async addFilesToRepository(
    repo: string,
    files: GitHubFile[],
    branch: string = 'main'
  ) {
    try {
      // Step 1: Get the reference for the branch
      const refResponse = await this.octokit.request(
        'GET /repos/{owner}/{repo}/git/ref/heads/{branch}',
        {
          owner: this.owner,
          repo: repo,
          branch: branch
        }
      )
      const baseTreeSha = refResponse.data.object.sha

      // Step 2: Create blobs for each file
      const blobs = await Promise.all(
        files.map(async (file) => {
          const blobResponse = await this.octokit.request(
            'POST /repos/{owner}/{repo}/git/blobs',
            {
              owner: this.owner,
              repo: repo,
              content: file.content,
              encoding: 'utf-8'
            }
          )
          return { path: file.path, sha: blobResponse.data.sha }
        })
      )

      // Step 3: Create a new tree with the blobs
      const treeResponse = await this.octokit.request(
        'POST /repos/{owner}/{repo}/git/trees',
        {
          owner: this.owner,
          repo: repo,
          base_tree: baseTreeSha,
          tree: blobs.map((blob) => ({
            path: blob.path,
            mode: '100644',
            type: 'blob',
            sha: blob.sha
          }))
        }
      )

      // Step 4: Create a new commit
      const commitResponse = await this.octokit.request(
        'POST /repos/{owner}/{repo}/git/commits',
        {
          owner: this.owner,
          repo: repo,
          message: 'Add multiple files',
          tree: treeResponse.data.sha,
          parents: [baseTreeSha]
        }
      )

      // Step 5: Update the branch reference to point to the new commit
      await this.octokit.request(
        'PATCH /repos/{owner}/{repo}/git/refs/heads/{branch}',
        {
          owner: this.owner,
          repo: repo,
          branch: branch,
          sha: commitResponse.data.sha,
          force: true
        }
      )

      core.info(
        `Files successfully added to repository ${repo} on branch ${branch}.`
      )
    } catch (error) {
      core.error(`Error adding files to repository: ${error}`)
      throw error
    }
  }
}
