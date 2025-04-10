import { Canon, UbsBook, VerseReference } from "./VerseReference.js";
type CanonNumberLookup = Partial<Record<UbsBook, number>>;
type CanonNumberArrayLookup = Partial<Record<UbsBook, number[]>>;
export declare class CanonData {
    private _name;
    private _books;
    private _max_chapter;
    private _max_verse;
    constructor(name: Canon, books: UbsBook[], max_chapter: CanonNumberLookup, max_verse: CanonNumberArrayLookup);
    get name(): Canon;
    get books(): UbsBook[];
    hasBook(book: UbsBook): boolean;
    fallbackVerseReference(): VerseReference;
    nextBook(book: UbsBook): UbsBook;
    previousBook(book: UbsBook): UbsBook;
    lastChapter(book: UbsBook): number | undefined;
    lastVerse(book: UbsBook, chapter: number): number | undefined;
    nextVerse(reference: VerseReference): VerseReference;
    previousVerse(reference: VerseReference): VerseReference;
}
export declare const NT: CanonData;
export declare const OT: CanonData;
export declare const LXX: CanonData;
export declare function getCanon(canon: Canon): CanonData;
export declare const CANON_NAMES: Canon[];
export declare const CANONS: CanonData[];
export declare const ALL_BOOK_CODES: UbsBook[];
export declare function canonicalOrderSort(a: UbsBook, b: UbsBook): number;
export {};
