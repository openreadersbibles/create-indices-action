import { Octokit } from '@octokit/core';
import { ProjectConfiguration } from '../../application/models/ProjectConfiguration.js';
interface GitHubFile {
    path: string;
    content: string;
}
export declare class IndexBuilder {
    token: string;
    owner: string;
    repo: string;
    octokit: Octokit;
    project: ProjectConfiguration | undefined;
    constructor();
    run(): Promise<void>;
    getRelevantFiles(directory: string): Promise<string[]>;
    getDirectories(): Promise<string[]>;
    createIndexForFolder(folder: string): Promise<GitHubFile>;
    createRootIndex(folders: string[]): Promise<GitHubFile>;
    getProjectDescription(): Promise<string>;
    getRepoFile(path: string): Promise<string>;
    addFilesToRepository(repo: string, files: GitHubFile[], branch?: string): Promise<void>;
}
export {};
