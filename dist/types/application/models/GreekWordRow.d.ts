import { z } from "zod";
import { WordRow } from "./WordRow.js";
export declare const NTPartOfSpeechSchema: z.ZodEnum<["particle", "verb", "relative-pronoun", "personal-pronoun", "interrogative-indefinite-pronoun", "demonstrative-pronoun", "definite-article", "preposition", "noun", "interjection", "adverb", "conjunction", "adjective"]>;
export type NTPartOfSpeech = z.infer<typeof NTPartOfSpeechSchema>;
export declare const NTPersonSchema: z.ZodEnum<["NA", "1st", "2nd", "3rd"]>;
export type NTPerson = z.infer<typeof NTPersonSchema>;
export declare const NTTenseSchema: z.ZodEnum<["NA", "present", "imperfect", "future", "aorist", "perfect", "pluperfect"]>;
export type NTTense = z.infer<typeof NTTenseSchema>;
export declare const NTVoiceSchema: z.ZodEnum<["NA", "active", "middle", "passive"]>;
export type NTVoice = z.infer<typeof NTVoiceSchema>;
export declare const NTMoodSchema: z.ZodEnum<["NA", "indicative", "imperative", "subjunctive", "optative", "infinitive", "participle"]>;
export type NTMood = z.infer<typeof NTMoodSchema>;
export declare const NTCaseSchema: z.ZodEnum<["NA", "nominative", "genitive", "dative", "accusative"]>;
export type NTCase = z.infer<typeof NTCaseSchema>;
export declare const NTNumberSchema: z.ZodEnum<["NA", "singular", "plural"]>;
export type NTNumber = z.infer<typeof NTNumberSchema>;
export declare const NTGenderSchema: z.ZodEnum<["NA", "masculine", "feminine", "neuter"]>;
export type NTGender = z.infer<typeof NTGenderSchema>;
export declare const NTDegreeSchema: z.ZodEnum<["NA", "comparative", "superlative"]>;
export type NTDegree = z.infer<typeof NTDegreeSchema>;
export declare const GreekWordRowSchema: z.ZodObject<{
    _id: z.ZodNumber;
    freq_lex: z.ZodNumber;
    lex_id: z.ZodNumber;
    punctuated_text: z.ZodString;
    unpunctuated_text: z.ZodString;
    lemma: z.ZodString;
    part_of_speech: z.ZodEnum<["particle", "verb", "relative-pronoun", "personal-pronoun", "interrogative-indefinite-pronoun", "demonstrative-pronoun", "definite-article", "preposition", "noun", "interjection", "adverb", "conjunction", "adjective"]>;
    person: z.ZodEnum<["NA", "1st", "2nd", "3rd"]>;
    tense: z.ZodEnum<["NA", "present", "imperfect", "future", "aorist", "perfect", "pluperfect"]>;
    voice: z.ZodEnum<["NA", "active", "middle", "passive"]>;
    mood: z.ZodEnum<["NA", "indicative", "imperative", "subjunctive", "optative", "infinitive", "participle"]>;
    grammatical_case: z.ZodEnum<["NA", "nominative", "genitive", "dative", "accusative"]>;
    grammatical_number: z.ZodEnum<["NA", "singular", "plural"]>;
    gender: z.ZodEnum<["NA", "masculine", "feminine", "neuter"]>;
    degree: z.ZodEnum<["NA", "comparative", "superlative"]>;
    languageISO: z.ZodEnum<["hbo", "arc", "grc"]>;
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
        votes: string[];
    }, {
        gloss_id: number;
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
        votes: string[];
    }>, "many">;
    englishGloss: z.ZodString;
}, "strip", z.ZodTypeAny, {
    votes: {
        gloss_id: number;
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
        votes: string[];
    }[];
    _id: number;
    freq_lex: number;
    lex_id: number;
    punctuated_text: string;
    unpunctuated_text: string;
    lemma: string;
    part_of_speech: "conjunction" | "particle" | "verb" | "relative-pronoun" | "personal-pronoun" | "interrogative-indefinite-pronoun" | "demonstrative-pronoun" | "definite-article" | "preposition" | "noun" | "interjection" | "adverb" | "adjective";
    person: "NA" | "1st" | "2nd" | "3rd";
    tense: "NA" | "present" | "imperfect" | "future" | "aorist" | "perfect" | "pluperfect";
    voice: "passive" | "active" | "middle" | "NA";
    mood: "NA" | "indicative" | "imperative" | "subjunctive" | "optative" | "infinitive" | "participle";
    grammatical_case: "NA" | "nominative" | "genitive" | "dative" | "accusative";
    grammatical_number: "NA" | "singular" | "plural";
    gender: "NA" | "masculine" | "feminine" | "neuter";
    degree: "NA" | "comparative" | "superlative";
    languageISO: "hbo" | "arc" | "grc";
    englishGloss: string;
}, {
    votes: {
        gloss_id: number;
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
        votes: string[];
    }[];
    _id: number;
    freq_lex: number;
    lex_id: number;
    punctuated_text: string;
    unpunctuated_text: string;
    lemma: string;
    part_of_speech: "conjunction" | "particle" | "verb" | "relative-pronoun" | "personal-pronoun" | "interrogative-indefinite-pronoun" | "demonstrative-pronoun" | "definite-article" | "preposition" | "noun" | "interjection" | "adverb" | "adjective";
    person: "NA" | "1st" | "2nd" | "3rd";
    tense: "NA" | "present" | "imperfect" | "future" | "aorist" | "perfect" | "pluperfect";
    voice: "passive" | "active" | "middle" | "NA";
    mood: "NA" | "indicative" | "imperative" | "subjunctive" | "optative" | "infinitive" | "participle";
    grammatical_case: "NA" | "nominative" | "genitive" | "dative" | "accusative";
    grammatical_number: "NA" | "singular" | "plural";
    gender: "NA" | "masculine" | "feminine" | "neuter";
    degree: "NA" | "comparative" | "superlative";
    languageISO: "hbo" | "arc" | "grc";
    englishGloss: string;
}>;
export type GreekWordRow = z.infer<typeof GreekWordRowSchema> & WordRow;
