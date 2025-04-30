import { Canon } from "../../application/models/Canon.js";
import { UbsBook } from "../../application/models/UbsBook.js";
export declare class FilenameData {
    filename: string;
    canon: Canon;
    UbsBook: UbsBook;
    extension: 'pdf' | 'html';
    constructor(filename: string);
}
