/* eslint-disable prettier/prettier */
import { CANONS, LXX, NT, OT } from '../../application/models/Canons.js';
import { FilenameData } from './FilenameData.js';
export class FileIndex {
    filedata = [];
    htmlIndex = new Map();
    pdfIndex = new Map();
    project;
    constructor(filenames, project) {
        this.filedata = filenames.map((filename) => new FilenameData(filename));
        /// Create the canon-level index for HTML and PDF files
        CANONS.forEach((canon) => {
            this.htmlIndex.set(canon.name, new Map());
            this.pdfIndex.set(canon.name, new Map());
        });
        this.filedata.forEach((file) => {
            if (file.extension === 'pdf') {
                this.pdfIndex.get(file.canon)?.set(file.UbsBook, file);
            }
            else if (file.extension === 'html') {
                this.htmlIndex.get(file.canon)?.set(file.UbsBook, file);
            }
        });
        this.project = project;
    }
    hasHtml(canon, book) {
        return this.htmlIndex.get(canon)?.get(book) !== undefined;
    }
    hasPdf(canon, book) {
        return this.pdfIndex.get(canon)?.get(book) !== undefined;
    }
    hasEither(canon, book) {
        return this.hasHtml(canon, book) || this.hasPdf(canon, book);
    }
    hasAnyFiles(cd) {
        return cd.books.some((book) => this.hasEither(cd.name, book));
    }
    toHtml() {
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
        `;
    }
    produceCanonTable(cd) {
        if (this.hasAnyFiles(cd)) {
            let result = `<h2 class="toc">${cd.name}</h2><table class="toc"><tbody>`;
            cd.books.forEach((book) => {
                if (this.hasEither(cd.name, book)) {
                    result += `<tr>`;
                    result += `<th>${this.project.getBookName(book)}</th>`;
                    if (this.hasPdf(cd.name, book)) {
                        result += `<td><a href="${this.pdfIndex.get(cd.name)?.get(book)?.filename}">PDF</a></td>`;
                    }
                    else {
                        result += `<td></td>`;
                    }
                    if (this.hasHtml(cd.name, book)) {
                        const chapterFilename = this.htmlIndex.get(cd.name)?.get(book)?.filename?.replace('.html', '-chapters.html');
                        result += `<td><a href="${this.htmlIndex.get(cd.name)?.get(book)?.filename}">HTML</a></td>`;
                        result += `<td><a href="${chapterFilename}">HTML (by chapter)</a></td>`;
                    }
                    else {
                        result += `<td></td><td></td>`;
                    }
                    result += `</tr>`;
                }
            });
            result += '</tbody></table>';
            return result;
        }
        else {
            return '';
        }
    }
}
