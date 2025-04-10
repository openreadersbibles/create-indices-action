import { CanonData } from "./Canons.js";
export type UbsBook = 'GEN' | 'EXO' | 'LEV' | 'NUM' | 'DEU' | 'JOS' | 'JDG' | 'RUT' | '1SA' | '2SA' | '1KI' | '2KI' | '1CH' | '2CH' | 'EZR' | 'NEH' | 'EST' | 'JOB' | 'PSA' | 'PRO' | 'ECC' | 'SNG' | 'ISA' | 'JER' | 'LAM' | 'EZK' | 'DAN' | 'HOS' | 'JOL' | 'AMO' | 'OBA' | 'JON' | 'MIC' | 'NAM' | 'HAB' | 'ZEP' | 'HAG' | 'ZEC' | 'MAL' | 'MAT' | 'MRK' | 'LUK' | 'JHN' | 'ACT' | 'ROM' | '1CO' | '2CO' | 'GAL' | 'EPH' | 'PHP' | 'COL' | '1TH' | '2TH' | '1TI' | '2TI' | 'TIT' | 'PHM' | 'HEB' | 'JAS' | '1PE' | '2PE' | '1JN' | '2JN' | '3JN' | 'JUD' | 'REV';
export type OTBook = 'GEN' | 'EXO' | 'LEV' | 'NUM' | 'DEU' | 'JOS' | 'JDG' | 'RUT' | '1SA' | '2SA' | '1KI' | '2KI' | '1CH' | '2CH' | 'EZR' | 'NEH' | 'EST' | 'JOB' | 'PSA' | 'PRO' | 'ECC' | 'SNG' | 'ISA' | 'JER' | 'LAM' | 'EZK' | 'DAN' | 'HOS' | 'JOL' | 'AMO' | 'OBA' | 'JON' | 'MIC' | 'NAM' | 'HAB' | 'ZEP' | 'HAG' | 'ZEC' | 'MAL';
export type NTBook = 'MAT' | 'MRK' | 'LUK' | 'JHN' | 'ACT' | 'ROM' | '1CO' | '2CO' | 'GAL' | 'EPH' | 'PHP' | 'COL' | '1TH' | '2TH' | '1TI' | '2TI' | 'TIT' | 'PHM' | 'HEB' | 'JAS' | '1PE' | '2PE' | '1JN' | '2JN' | '3JN' | 'JUD' | 'REV';
export type LatinBook = 'Genesis' | 'Exodus' | 'Leviticus' | 'Numeri' | 'Deuteronomium' | 'Josua' | 'Judices' | 'Ruth' | 'Samuel_I' | 'Samuel_II' | 'Reges_I' | 'Reges_II' | 'Chronica_I' | 'Chronica_II' | 'Esra' | 'Nehemia' | 'Esther' | 'Iob' | 'Psalmi' | 'Proverbia' | 'Ecclesiastes' | 'Canticum' | 'Jesaia' | 'Jeremia' | 'Threni' | 'Ezechiel' | 'Daniel' | 'Hosea' | 'Joel' | 'Amos' | 'Obadia' | 'Jona' | 'Micha' | 'Nahum' | 'Habakuk' | 'Zephania' | 'Haggai' | 'Sacharia' | 'Maleachi' | 'secundum Matthæum' | 'secundum Marcum' | 'secundum Lucam' | 'secundum Ioannem' | 'Actus' | 'ad Romanos' | '1 ad Corinthios' | '2 ad Corinthios' | 'ad Galatas' | 'ad Ephesios' | 'ad Philippenses' | 'ad Colossenses' | '1 ad Thessalonicenses' | '2 ad Thessalonicenses' | '1 ad Timotheum' | '2 ad Timotheum' | 'ad Titum' | 'ad Philemonem' | 'ad Hebræos' | 'Iacobi' | '1 Petri' | '2 Petri' | '1 Ioannis' | '2 Ioannis' | '3 Ioannis' | 'Iudæ' | 'Apocalypsis';
export type Canon = 'OT' | 'NT' | 'LXX';
export declare class VerseReference {
    ubs_book: UbsBook;
    chapter: number;
    verse: number;
    canon: Canon;
    constructor(ubs_book: UbsBook, chapter: number, verse: number, canon: Canon);
    equals(other: VerseReference): boolean;
    static canonFromBook(book: UbsBook): CanonData | undefined;
    get canonData(): CanonData;
    nextVerse(): VerseReference;
    previousVerse(): VerseReference;
    get latinBookName(): LatinBook;
    get xmlId(): string;
    toString(): string;
    static fromString(str: string): VerseReference | undefined;
    static ubsBookToLatin(ubsBook: UbsBook): LatinBook;
}
