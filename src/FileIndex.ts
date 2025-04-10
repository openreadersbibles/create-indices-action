/* eslint-disable prettier/prettier */
import {
  CanonData,
  CANONS,
  LXX,
  NT,
  OT
} from '../../application/models/Canons.js'
import { ProjectConfiguration } from '../../application/models/ProjectConfiguration.js'
import { Canon, UbsBook } from '../../application/models/VerseReference.js'
import { FilenameData } from './FilenameData.js'

type IndexByBook = Map<UbsBook, FilenameData | undefined>

export class FileIndex {
  filedata: FilenameData[] = []
  htmlIndex = new Map<Canon, IndexByBook>()
  pdfIndex = new Map<Canon, IndexByBook>()
  project: ProjectConfiguration

  constructor(filenames: string[], project: ProjectConfiguration) {
    this.filedata = filenames.map((filename) => new FilenameData(filename))

    /// Create the canon-level index for HTML and PDF files
    CANONS.forEach((canon) => {
      this.htmlIndex.set(
        canon.name,
        new Map<UbsBook, FilenameData | undefined>()
      )
      this.pdfIndex.set(
        canon.name,
        new Map<UbsBook, FilenameData | undefined>()
      )
    })

    this.filedata.forEach((file) => {
      if (file.extension === 'pdf') {
        this.pdfIndex.get(file.canon)?.set(file.UbsBook, file)
      } else if (file.extension === 'html') {
        this.htmlIndex.get(file.canon)?.set(file.UbsBook, file)
      }
    })

    this.project = project
  }

  hasHtml(canon: Canon, book: UbsBook): boolean {
    return this.htmlIndex.get(canon)?.get(book) !== undefined
  }
  hasPdf(canon: Canon, book: UbsBook): boolean {
    return this.pdfIndex.get(canon)?.get(book) !== undefined
  }

  hasEither(canon: Canon, book: UbsBook): boolean {
    return this.hasHtml(canon, book) || this.hasPdf(canon, book)
  }

  hasAnyFiles(cd: CanonData): boolean {
    return cd.books.some((book) => this.hasEither(cd.name, book))
  }

  toHtml(): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${this.project.title}</title>
<link rel="stylesheet" href="style.css"/>
</head>
<body>
<h1>${this.project.title}</h1>
<p class="project-description">${this.project.description}</p>
${this.produceCanonTable(OT)}
${this.produceCanonTable(LXX)}
${this.produceCanonTable(NT)}
</body>
</html>
        `
  }

  produceCanonTable(cd: CanonData): string {
    if (this.hasAnyFiles(cd)) {
      let result = `<h2 class="toc">${cd.name}</h2><table class="toc"><tbody>`
      cd.books.forEach((book) => {
        if (this.hasEither(cd.name, book)) {
          result += `<tr>`
          result += `<th>${this.project.getBookName(book)}</th>`
          if (this.hasPdf(cd.name, book)) {
            result += `<td><a href="${this.pdfIndex.get(cd.name)?.get(book)?.filename}">PDF</a></td>`
          } else {
            result += `<td></td>`
          }
          if (this.hasHtml(cd.name, book)) {
            const chapterFilename = this.htmlIndex.get(cd.name)?.get(book)?.filename?.replace('.html', '-chapters.html')
            result += `<td><a href="${this.htmlIndex.get(cd.name)?.get(book)?.filename}">HTML</a></td>`
            result += `<td><a href="${chapterFilename}">HTML (by chapter)</a></td>`
          } else {
            result += `<td></td><td></td>`
          }
          result += `</tr>`
        }
      })
      result += '</tbody></table>'
      return result
    } else {
      return ''
    }
  }
}
