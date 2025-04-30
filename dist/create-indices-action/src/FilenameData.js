export class FilenameData {
    filename;
    canon;
    UbsBook;
    extension;
    constructor(filename) {
        const regex = /^(.+)_(.+)_(.+)\.(.+)$/;
        const match = filename.match(regex);
        if (!match) {
            throw new Error('Filename format is invalid');
        }
        const [, , canon, book, extension] = match;
        this.filename = filename;
        this.canon = canon;
        this.UbsBook = book;
        this.extension = extension;
    }
}
