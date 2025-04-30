import { ProjectConfiguration } from "./ProjectConfiguration.js";
import { BookIdentifier } from "./BookIdentifier.js";
import { PublicationConfiguration } from "./PublicationConfiguration.js";
import { z } from "zod";
export interface PublicationRequest {
    books: BookIdentifier[];
    project: ProjectConfiguration;
    configuration: PublicationConfiguration;
    nopdf: boolean;
}
export declare const HollowPublicationRequestSchema: z.ZodObject<{
    books: z.ZodArray<z.ZodObject<{
        book: z.ZodEnum<["GEN", "EXO", "LEV", "NUM", "DEU", "JOS", "JDG", "RUT", "1SA", "2SA", "1KI", "2KI", "1CH", "2CH", "EZR", "NEH", "EST", "JOB", "PSA", "PRO", "ECC", "SNG", "ISA", "JER", "LAM", "EZK", "DAN", "HOS", "JOL", "AMO", "OBA", "JON", "MIC", "NAM", "HAB", "ZEP", "HAG", "ZEC", "MAL", "MAT", "MRK", "LUK", "JHN", "ACT", "ROM", "1CO", "2CO", "GAL", "EPH", "PHP", "COL", "1TH", "2TH", "1TI", "2TI", "TIT", "PHM", "HEB", "JAS", "1PE", "2PE", "1JN", "2JN", "3JN", "JUD", "REV"]>;
        canon: z.ZodEnum<["OT", "NT", "LXX"]>;
    }, "strip", z.ZodTypeAny, {
        canon: "OT" | "NT" | "LXX";
        book: "GEN" | "EXO" | "LEV" | "NUM" | "DEU" | "JOS" | "JDG" | "RUT" | "1SA" | "2SA" | "1KI" | "2KI" | "1CH" | "2CH" | "EZR" | "NEH" | "EST" | "JOB" | "PSA" | "PRO" | "ECC" | "SNG" | "ISA" | "JER" | "LAM" | "EZK" | "DAN" | "HOS" | "JOL" | "AMO" | "OBA" | "JON" | "MIC" | "NAM" | "HAB" | "ZEP" | "HAG" | "ZEC" | "MAL" | "MAT" | "MRK" | "LUK" | "JHN" | "ACT" | "ROM" | "1CO" | "2CO" | "GAL" | "EPH" | "PHP" | "COL" | "1TH" | "2TH" | "1TI" | "2TI" | "TIT" | "PHM" | "HEB" | "JAS" | "1PE" | "2PE" | "1JN" | "2JN" | "3JN" | "JUD" | "REV";
    }, {
        canon: "OT" | "NT" | "LXX";
        book: "GEN" | "EXO" | "LEV" | "NUM" | "DEU" | "JOS" | "JDG" | "RUT" | "1SA" | "2SA" | "1KI" | "2KI" | "1CH" | "2CH" | "EZR" | "NEH" | "EST" | "JOB" | "PSA" | "PRO" | "ECC" | "SNG" | "ISA" | "JER" | "LAM" | "EZK" | "DAN" | "HOS" | "JOL" | "AMO" | "OBA" | "JON" | "MIC" | "NAM" | "HAB" | "ZEP" | "HAG" | "ZEC" | "MAL" | "MAT" | "MRK" | "LUK" | "JHN" | "ACT" | "ROM" | "1CO" | "2CO" | "GAL" | "EPH" | "PHP" | "COL" | "1TH" | "2TH" | "1TI" | "2TI" | "TIT" | "PHM" | "HEB" | "JAS" | "1PE" | "2PE" | "1JN" | "2JN" | "3JN" | "JUD" | "REV";
    }>, "many">;
    project_id: z.ZodString;
    publication_configuration_id: z.ZodString;
    nopdf: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    project_id: string;
    books: {
        canon: "OT" | "NT" | "LXX";
        book: "GEN" | "EXO" | "LEV" | "NUM" | "DEU" | "JOS" | "JDG" | "RUT" | "1SA" | "2SA" | "1KI" | "2KI" | "1CH" | "2CH" | "EZR" | "NEH" | "EST" | "JOB" | "PSA" | "PRO" | "ECC" | "SNG" | "ISA" | "JER" | "LAM" | "EZK" | "DAN" | "HOS" | "JOL" | "AMO" | "OBA" | "JON" | "MIC" | "NAM" | "HAB" | "ZEP" | "HAG" | "ZEC" | "MAL" | "MAT" | "MRK" | "LUK" | "JHN" | "ACT" | "ROM" | "1CO" | "2CO" | "GAL" | "EPH" | "PHP" | "COL" | "1TH" | "2TH" | "1TI" | "2TI" | "TIT" | "PHM" | "HEB" | "JAS" | "1PE" | "2PE" | "1JN" | "2JN" | "3JN" | "JUD" | "REV";
    }[];
    publication_configuration_id: string;
    nopdf: boolean;
}, {
    project_id: string;
    books: {
        canon: "OT" | "NT" | "LXX";
        book: "GEN" | "EXO" | "LEV" | "NUM" | "DEU" | "JOS" | "JDG" | "RUT" | "1SA" | "2SA" | "1KI" | "2KI" | "1CH" | "2CH" | "EZR" | "NEH" | "EST" | "JOB" | "PSA" | "PRO" | "ECC" | "SNG" | "ISA" | "JER" | "LAM" | "EZK" | "DAN" | "HOS" | "JOL" | "AMO" | "OBA" | "JON" | "MIC" | "NAM" | "HAB" | "ZEP" | "HAG" | "ZEC" | "MAL" | "MAT" | "MRK" | "LUK" | "JHN" | "ACT" | "ROM" | "1CO" | "2CO" | "GAL" | "EPH" | "PHP" | "COL" | "1TH" | "2TH" | "1TI" | "2TI" | "TIT" | "PHM" | "HEB" | "JAS" | "1PE" | "2PE" | "1JN" | "2JN" | "3JN" | "JUD" | "REV";
    }[];
    publication_configuration_id: string;
    nopdf: boolean;
}>;
export type HollowPublicationRequest = z.infer<typeof HollowPublicationRequestSchema>;
