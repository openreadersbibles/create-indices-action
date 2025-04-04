import { Canon, UbsBook } from "./VerseReference";
export declare class BookIdentifier {
    book: UbsBook;
    canon: Canon;
    constructor(book: UbsBook, canon: Canon);
    toString(): string;
    static fromString(input: string): BookIdentifier | undefined;
    static fromObject(obj: {
        book: UbsBook;
        canon: Canon;
    }): BookIdentifier;
}
