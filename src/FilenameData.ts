/* eslint-disable prettier/prettier */
import { Canon, UbsBook } from '../../application/models/VerseReference.js'

export class FilenameData {
  filename: string
  canon: Canon
  UbsBook: UbsBook
  extension: 'pdf' | 'html'

  constructor(filename: string) {
    const regex = /^(.+)_(.+)_(.+)\.(.+)$/
    const match = filename.match(regex)

    if (!match) {
      throw new Error('Filename format is invalid')
    }

    const [, , canon, book, extension] = match

    this.filename = filename
    this.canon = canon as Canon
    this.UbsBook = book as UbsBook
    this.extension = extension as 'pdf' | 'html'
  }
}
