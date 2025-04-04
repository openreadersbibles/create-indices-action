import { GlossRow, PhraseGlossRow } from "./database-input-output";
export type OTGender = "NA" | "f" | "m" | "unknown";
export type OTGrammaticalNumber = "NA" | "sg" | "pl" | "unknown" | "du";
export type OTPerson = "NA" | "p1" | "p2" | "p3" | "unknown";
export type OTState = "NA" | "a" | "c" | "e";
export type OTTense = "NA" | "perf" | "ptca" | "wayq" | "impf" | "infc" | "impv" | "infa" | "ptcp";
export type OTVerbStem = "NA" | "qal" | "piel" | "hif" | "nif" | "pual" | "hit" | "hof" | "hsht" | "pasq" | "hotp" | "nit" | "poal" | "poel" | "htpo" | "peal" | "tif" | "etpa" | "pael" | "haf" | "htpe" | "htpa" | "peil" | "etpe" | "afel" | "shaf";
export type OTPartOfSpeech = "prep" | "subs" | "verb" | "art" | "conj" | "advb" | "adjv" | "intj" | "prde" | "nmpr" | "nega" | "prps" | "prin" | "inrg";
export interface GetHebrewVerseResponse {
    words: HebrewWordRow[];
    suggestions: SuggestionRow[];
    phrase_glosses: PhraseGlossRow[];
}
export interface SuggestionRow {
    lex_id: number;
    suggestions: any[];
}
export interface HebrewWordRow {
    _id: number;
    freq_lex: number;
    g_word_utf8: string;
    trailer_utf8: string;
    lex_id: number;
    gloss: string;
    votes: GlossRow[];
    myVote: number | null;
    gn: OTGender;
    nu: OTGrammaticalNumber;
    st: OTState;
    vt: OTTense;
    vs: OTVerbStem;
    ps: OTPerson;
    pdp: OTPartOfSpeech;
    englishGloss: string;
    prs_gn: OTGender;
    prs_nu: OTGrammaticalNumber;
    prs_ps: OTPerson;
    voc_lex_utf8: string;
    languageISO: 'hbo' | 'arc' | 'grc';
}
export declare function OTGenderToEnglish(gender: OTGender): "NA" | "masculine" | "feminine" | "unknown";
export declare function OTGrammaticalNumberToEnglish(number: OTGrammaticalNumber): "NA" | "singular" | "plural" | "unknown" | "dual";
export declare function OTStateToEnglish(state: OTState): "NA" | "construct" | "emphatic" | "absolute";
export declare function OTTenseToEnglish(tense: OTTense): "NA" | "imperative" | "participle" | "imperfect" | "perfect" | "wayyiqtol" | "infinitive construct" | "infinitive absolute";
export declare function OTVerbStemToEnglish(stem: OTVerbStem): "NA" | "qal" | "piel" | "pual" | "poal" | "poel" | "peal" | "pael" | "peil" | "afel" | "niphal" | "hithpael" | "hithpeel" | "shafel" | "hifil" | "nifal" | "hitpael" | "hofal" | "pausal" | "hophal" | "hithpoel" | "tiferet" | "etpaal" | "hafel" | "hithpaal" | "etpeel";
export declare function OTPersonToEnglish(person: OTPerson): "NA" | "unknown" | "first person" | "second person" | "third person";
export declare function OTPartOfSpeechToEnglish(partOfSpeech: OTPartOfSpeech): "noun" | "verb" | "adjective" | "preposition" | "interjection" | "adverb" | "conjunction" | "article" | "demonstrative pronoun" | "proper noun" | "negative particle" | " \tpersonal pronoun" | "interrogative pronoun" | "interrogative particle";
