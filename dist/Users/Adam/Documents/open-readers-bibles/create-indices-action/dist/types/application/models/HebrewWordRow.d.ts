import { z } from "zod";
import { WordRow } from "./WordRow";
export declare const OTGenderSchema: z.ZodEnum<["NA", "f", "m", "unknown"]>;
export type OTGender = z.infer<typeof OTGenderSchema>;
export declare const OTGrammaticalNumberSchema: z.ZodEnum<["NA", "sg", "pl", "unknown", "du"]>;
export type OTGrammaticalNumber = z.infer<typeof OTGrammaticalNumberSchema>;
export declare const OTPersonSchema: z.ZodEnum<["NA", "p1", "p2", "p3", "unknown"]>;
export type OTPerson = z.infer<typeof OTPersonSchema>;
export declare const OTStateSchema: z.ZodEnum<["NA", "a", "c", "e"]>;
export type OTState = z.infer<typeof OTStateSchema>;
export declare const OTTenseSchema: z.ZodEnum<["NA", "perf", "ptca", "wayq", "impf", "infc", "impv", "infa", "ptcp"]>;
export type OTTense = z.infer<typeof OTTenseSchema>;
export declare const OTVerbStemSchema: z.ZodEnum<["NA", "qal", "piel", "hif", "nif", "pual", "hit", "hof", "hsht", "pasq", "hotp", "nit", "poal", "poel", "htpo", "peal", "tif", "etpa", "pael", "haf", "htpe", "htpa", "peil", "etpe", "afel", "shaf"]>;
export type OTVerbStem = z.infer<typeof OTVerbStemSchema>;
export declare const OTPartOfSpeechSchema: z.ZodEnum<["prep", "subs", "verb", "art", "conj", "advb", "adjv", "intj", "prde", "nmpr", "nega", "prps", "prin", "inrg"]>;
export type OTPartOfSpeech = z.infer<typeof OTPartOfSpeechSchema>;
export declare const HebrewWordRowSchema: z.ZodObject<{
    _id: z.ZodNumber;
    freq_lex: z.ZodNumber;
    g_word_utf8: z.ZodString;
    trailer_utf8: z.ZodString;
    lex_id: z.ZodNumber;
    votes: z.ZodArray<z.ZodObject<{
        annotationObject: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            gloss_id: z.ZodNumber;
            type: z.ZodLiteral<"word">;
            content: z.ZodObject<{
                gloss: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                gloss: string;
            }, {
                gloss: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "word";
            content: {
                gloss: string;
            };
            gloss_id: number;
        }, {
            type: "word";
            content: {
                gloss: string;
            };
            gloss_id: number;
        }>, z.ZodObject<{
            gloss_id: z.ZodNumber;
            type: z.ZodLiteral<"markdown">;
            content: z.ZodObject<{
                markdown: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                markdown: string;
            }, {
                markdown: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "markdown";
            content: {
                markdown: string;
            };
            gloss_id: number;
        }, {
            type: "markdown";
            content: {
                markdown: string;
            };
            gloss_id: number;
        }>, z.ZodObject<{
            gloss_id: z.ZodNumber;
            type: z.ZodLiteral<"wordplusmarkdown">;
            content: z.ZodObject<{
                gloss: z.ZodString;
                markdown: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                markdown: string;
                gloss: string;
            }, {
                markdown: string;
                gloss: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "wordplusmarkdown";
            content: {
                markdown: string;
                gloss: string;
            };
            gloss_id: number;
        }, {
            type: "wordplusmarkdown";
            content: {
                markdown: string;
                gloss: string;
            };
            gloss_id: number;
        }>, z.ZodObject<{
            gloss_id: z.ZodNumber;
            type: z.ZodLiteral<"null">;
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            content: string;
            gloss_id: number;
        }, {
            type: "null";
            content: string;
            gloss_id: number;
        }>]>;
        gloss_id: z.ZodNumber;
        votes: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        gloss_id: number;
        votes: string[];
        annotationObject: {
            type: "word";
            content: {
                gloss: string;
            };
            gloss_id: number;
        } | {
            type: "markdown";
            content: {
                markdown: string;
            };
            gloss_id: number;
        } | {
            type: "wordplusmarkdown";
            content: {
                markdown: string;
                gloss: string;
            };
            gloss_id: number;
        } | {
            type: "null";
            content: string;
            gloss_id: number;
        };
    }, {
        gloss_id: number;
        votes: string[];
        annotationObject: {
            type: "word";
            content: {
                gloss: string;
            };
            gloss_id: number;
        } | {
            type: "markdown";
            content: {
                markdown: string;
            };
            gloss_id: number;
        } | {
            type: "wordplusmarkdown";
            content: {
                markdown: string;
                gloss: string;
            };
            gloss_id: number;
        } | {
            type: "null";
            content: string;
            gloss_id: number;
        };
    }>, "many">;
    gn: z.ZodEnum<["NA", "f", "m", "unknown"]>;
    nu: z.ZodEnum<["NA", "sg", "pl", "unknown", "du"]>;
    st: z.ZodEnum<["NA", "a", "c", "e"]>;
    vt: z.ZodEnum<["NA", "perf", "ptca", "wayq", "impf", "infc", "impv", "infa", "ptcp"]>;
    vs: z.ZodEnum<["NA", "qal", "piel", "hif", "nif", "pual", "hit", "hof", "hsht", "pasq", "hotp", "nit", "poal", "poel", "htpo", "peal", "tif", "etpa", "pael", "haf", "htpe", "htpa", "peil", "etpe", "afel", "shaf"]>;
    ps: z.ZodEnum<["NA", "p1", "p2", "p3", "unknown"]>;
    pdp: z.ZodEnum<["prep", "subs", "verb", "art", "conj", "advb", "adjv", "intj", "prde", "nmpr", "nega", "prps", "prin", "inrg"]>;
    englishGloss: z.ZodString;
    prs_gn: z.ZodEnum<["NA", "f", "m", "unknown"]>;
    prs_nu: z.ZodEnum<["NA", "sg", "pl", "unknown", "du"]>;
    prs_ps: z.ZodEnum<["NA", "p1", "p2", "p3", "unknown"]>;
    voc_lex_utf8: z.ZodString;
    languageISO: z.ZodEnum<["hbo", "arc", "grc"]>;
}, "strip", z.ZodTypeAny, {
    _id: number;
    freq_lex: number;
    lex_id: number;
    languageISO: "hbo" | "arc" | "grc";
    votes: {
        gloss_id: number;
        votes: string[];
        annotationObject: {
            type: "word";
            content: {
                gloss: string;
            };
            gloss_id: number;
        } | {
            type: "markdown";
            content: {
                markdown: string;
            };
            gloss_id: number;
        } | {
            type: "wordplusmarkdown";
            content: {
                markdown: string;
                gloss: string;
            };
            gloss_id: number;
        } | {
            type: "null";
            content: string;
            gloss_id: number;
        };
    }[];
    englishGloss: string;
    g_word_utf8: string;
    trailer_utf8: string;
    gn: "f" | "m" | "unknown" | "NA";
    nu: "unknown" | "NA" | "sg" | "pl" | "du";
    st: "a" | "c" | "e" | "NA";
    vt: "NA" | "perf" | "ptca" | "wayq" | "impf" | "infc" | "impv" | "infa" | "ptcp";
    vs: "qal" | "piel" | "NA" | "hif" | "nif" | "pual" | "hit" | "hof" | "hsht" | "pasq" | "hotp" | "nit" | "poal" | "poel" | "htpo" | "peal" | "tif" | "etpa" | "pael" | "haf" | "htpe" | "htpa" | "peil" | "etpe" | "afel" | "shaf";
    ps: "unknown" | "NA" | "p1" | "p2" | "p3";
    pdp: "verb" | "prep" | "subs" | "art" | "conj" | "advb" | "adjv" | "intj" | "prde" | "nmpr" | "nega" | "prps" | "prin" | "inrg";
    prs_gn: "f" | "m" | "unknown" | "NA";
    prs_nu: "unknown" | "NA" | "sg" | "pl" | "du";
    prs_ps: "unknown" | "NA" | "p1" | "p2" | "p3";
    voc_lex_utf8: string;
}, {
    _id: number;
    freq_lex: number;
    lex_id: number;
    languageISO: "hbo" | "arc" | "grc";
    votes: {
        gloss_id: number;
        votes: string[];
        annotationObject: {
            type: "word";
            content: {
                gloss: string;
            };
            gloss_id: number;
        } | {
            type: "markdown";
            content: {
                markdown: string;
            };
            gloss_id: number;
        } | {
            type: "wordplusmarkdown";
            content: {
                markdown: string;
                gloss: string;
            };
            gloss_id: number;
        } | {
            type: "null";
            content: string;
            gloss_id: number;
        };
    }[];
    englishGloss: string;
    g_word_utf8: string;
    trailer_utf8: string;
    gn: "f" | "m" | "unknown" | "NA";
    nu: "unknown" | "NA" | "sg" | "pl" | "du";
    st: "a" | "c" | "e" | "NA";
    vt: "NA" | "perf" | "ptca" | "wayq" | "impf" | "infc" | "impv" | "infa" | "ptcp";
    vs: "qal" | "piel" | "NA" | "hif" | "nif" | "pual" | "hit" | "hof" | "hsht" | "pasq" | "hotp" | "nit" | "poal" | "poel" | "htpo" | "peal" | "tif" | "etpa" | "pael" | "haf" | "htpe" | "htpa" | "peil" | "etpe" | "afel" | "shaf";
    ps: "unknown" | "NA" | "p1" | "p2" | "p3";
    pdp: "verb" | "prep" | "subs" | "art" | "conj" | "advb" | "adjv" | "intj" | "prde" | "nmpr" | "nega" | "prps" | "prin" | "inrg";
    prs_gn: "f" | "m" | "unknown" | "NA";
    prs_nu: "unknown" | "NA" | "sg" | "pl" | "du";
    prs_ps: "unknown" | "NA" | "p1" | "p2" | "p3";
    voc_lex_utf8: string;
}>;
export type HebrewWordRow = z.infer<typeof HebrewWordRowSchema> & WordRow;
export declare function OTGenderToEnglish(gender: OTGender): "NA" | "masculine" | "feminine" | "unknown";
export declare function OTGrammaticalNumberToEnglish(number: OTGrammaticalNumber): "NA" | "singular" | "plural" | "unknown" | "dual";
export declare function OTStateToEnglish(state: OTState): "NA" | "construct" | "emphatic" | "absolute";
export declare function OTTenseToEnglish(tense: OTTense): "NA" | "imperative" | "participle" | "imperfect" | "perfect" | "wayyiqtol" | "infinitive construct" | "infinitive absolute";
export declare function OTVerbStemToEnglish(stem: OTVerbStem): "NA" | "qal" | "piel" | "pual" | "poal" | "poel" | "peal" | "pael" | "peil" | "afel" | "niphal" | "hithpael" | "hithpeel" | "shafel" | "hifil" | "nifal" | "hitpael" | "hofal" | "pausal" | "hophal" | "hithpoel" | "tiferet" | "etpaal" | "hafel" | "hithpaal" | "etpeel";
export declare function OTPersonToEnglish(person: OTPerson): "NA" | "unknown" | "first person" | "second person" | "third person";
export declare function OTPartOfSpeechToEnglish(partOfSpeech: OTPartOfSpeech): "noun" | "verb" | "adjective" | "preposition" | "interjection" | "adverb" | "conjunction" | "article" | "demonstrative pronoun" | "proper noun" | "negative particle" | " \tpersonal pronoun" | "interrogative pronoun" | "interrogative particle";
