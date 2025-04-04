import { Canon, UbsBook } from '../../application/models/VerseReference.js';
export declare class FilenameData {
    filename: string;
    canon: Canon;
    UbsBook: UbsBook;
    extension: 'pdf' | 'html';
    constructor(filename: string);
}
