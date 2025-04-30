import { z } from "zod";
import { GlossRowSchema } from "./GlossRow.js";
import { LanguageIsoSchema } from "./LanguageIso.js";
// Define NTPartOfSpeech schema
export const NTPartOfSpeechSchema = z.enum([
    "particle",
    "verb",
    "relative-pronoun",
    "personal-pronoun",
    "interrogative-indefinite-pronoun",
    "demonstrative-pronoun",
    "definite-article",
    "preposition",
    "noun",
    "interjection",
    "adverb",
    "conjunction",
    "adjective",
]);
// Define NTPerson schema
export const NTPersonSchema = z.enum(["NA", "1st", "2nd", "3rd"]);
// Define NTTense schema
export const NTTenseSchema = z.enum([
    "NA",
    "present",
    "imperfect",
    "future",
    "aorist",
    "perfect",
    "pluperfect",
]);
// Define NTVoice schema
export const NTVoiceSchema = z.enum(["NA", "active", "middle", "passive"]);
// Define NTMood schema
export const NTMoodSchema = z.enum([
    "NA",
    "indicative",
    "imperative",
    "subjunctive",
    "optative",
    "infinitive",
    "participle",
]);
// Define NTCase schema
export const NTCaseSchema = z.enum([
    "NA",
    "nominative",
    "genitive",
    "dative",
    "accusative",
]);
// Define NTNumber schema
export const NTNumberSchema = z.enum(["NA", "singular", "plural"]);
// Define NTGender schema
export const NTGenderSchema = z.enum(["NA", "masculine", "feminine", "neuter"]);
// Define NTDegree schema
export const NTDegreeSchema = z.enum(["NA", "comparative", "superlative"]);
// GreekWordRow schema
export const GreekWordRowSchema = z.object({
    _id: z.number(),
    freq_lex: z.number(),
    lex_id: z.number(),
    punctuated_text: z.string(),
    unpunctuated_text: z.string(),
    lemma: z.string(),
    part_of_speech: NTPartOfSpeechSchema,
    person: NTPersonSchema,
    tense: NTTenseSchema,
    voice: NTVoiceSchema,
    mood: NTMoodSchema,
    grammatical_case: NTCaseSchema,
    grammatical_number: NTNumberSchema,
    gender: NTGenderSchema,
    degree: NTDegreeSchema,
    languageISO: LanguageIsoSchema,
    votes: z.array(GlossRowSchema),
    englishGloss: z.string(),
});
