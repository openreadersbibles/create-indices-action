import { Canon } from "./Canon.js";
import { UbsBook } from "./UbsBook.js";
import { z } from "zod";
export declare const BookIdentifierJsonSchema: z.ZodObject<{
    book: z.ZodEnum<["GEN", "EXO", "LEV", "NUM", "DEU", "JOS", "JDG", "RUT", "1SA", "2SA", "1KI", "2KI", "1CH", "2CH", "EZR", "NEH", "EST", "JOB", "PSA", "PRO", "ECC", "SNG", "ISA", "JER", "LAM", "EZK", "DAN", "HOS", "JOL", "AMO", "OBA", "JON", "MIC", "NAM", "HAB", "ZEP", "HAG", "ZEC", "MAL", "MAT", "MRK", "LUK", "JHN", "ACT", "ROM", "1CO", "2CO", "GAL", "EPH", "PHP", "COL", "1TH", "2TH", "1TI", "2TI", "TIT", "PHM", "HEB", "JAS", "1PE", "2PE", "1JN", "2JN", "3JN", "JUD", "REV"]>;
    canon: z.ZodEnum<["OT", "NT", "LXX"]>;
}, "strip", z.ZodTypeAny, {
    book: "GEN" | "EXO" | "LEV" | "NUM" | "DEU" | "JOS" | "JDG" | "RUT" | "1SA" | "2SA" | "1KI" | "2KI" | "1CH" | "2CH" | "EZR" | "NEH" | "EST" | "JOB" | "PSA" | "PRO" | "ECC" | "SNG" | "ISA" | "JER" | "LAM" | "EZK" | "DAN" | "HOS" | "JOL" | "AMO" | "OBA" | "JON" | "MIC" | "NAM" | "HAB" | "ZEP" | "HAG" | "ZEC" | "MAL" | "MAT" | "MRK" | "LUK" | "JHN" | "ACT" | "ROM" | "1CO" | "2CO" | "GAL" | "EPH" | "PHP" | "COL" | "1TH" | "2TH" | "1TI" | "2TI" | "TIT" | "PHM" | "HEB" | "JAS" | "1PE" | "2PE" | "1JN" | "2JN" | "3JN" | "JUD" | "REV";
    canon: "OT" | "NT" | "LXX";
}, {
    book: "GEN" | "EXO" | "LEV" | "NUM" | "DEU" | "JOS" | "JDG" | "RUT" | "1SA" | "2SA" | "1KI" | "2KI" | "1CH" | "2CH" | "EZR" | "NEH" | "EST" | "JOB" | "PSA" | "PRO" | "ECC" | "SNG" | "ISA" | "JER" | "LAM" | "EZK" | "DAN" | "HOS" | "JOL" | "AMO" | "OBA" | "JON" | "MIC" | "NAM" | "HAB" | "ZEP" | "HAG" | "ZEC" | "MAL" | "MAT" | "MRK" | "LUK" | "JHN" | "ACT" | "ROM" | "1CO" | "2CO" | "GAL" | "EPH" | "PHP" | "COL" | "1TH" | "2TH" | "1TI" | "2TI" | "TIT" | "PHM" | "HEB" | "JAS" | "1PE" | "2PE" | "1JN" | "2JN" | "3JN" | "JUD" | "REV";
    canon: "OT" | "NT" | "LXX";
}>;
export type BookIdentifierJson = z.infer<typeof BookIdentifierJsonSchema>;
export declare class BookIdentifier {
    book: UbsBook;
    canon: Canon;
    constructor(book: UbsBook, canon: Canon);
    toString(): string;
    static fromString(input: string): BookIdentifier | undefined;
    static fromObject(obj: BookIdentifierJson): BookIdentifier;
    toObject(): BookIdentifierJson;
}
