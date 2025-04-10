import { Canon, UbsBook } from "./VerseReference.js";
export interface BookIdentifierJson {
    book: UbsBook;
    canon: Canon;
}
export declare class BookIdentifier {
    book: UbsBook;
    canon: Canon;
    constructor(book: UbsBook, canon: Canon);
    toString(): string;
    static fromString(input: string): BookIdentifier | undefined;
    static fromObject(obj: BookIdentifierJson): BookIdentifier;
    toObject(): BookIdentifierJson;
}
