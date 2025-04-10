export interface GlossLocation {
    toObject(): WordGlossLocationObject | PhraseGlossLocationObject;
    asString(): string;
}
export interface WordGlossLocationObject {
    word_id: number;
    lex_id: number;
}
export declare class WordGlossLocation implements GlossLocation {
    private _word_id;
    private _lex_id;
    constructor(word_id: number, lex_id: number);
    get word_id(): number;
    get lex_id(): number;
    asString(): string;
    toObject(): WordGlossLocationObject;
}
export declare class PhraseGlossLocation implements GlossLocation {
    private _from_word_id;
    private _to_word_id;
    constructor(from_word_id: number, to_word_id: number);
    toObject(): PhraseGlossLocationObject;
    get from(): number;
    get to(): number;
    asString(): string;
    static fromString(str: string): PhraseGlossLocation;
    static compareStrings(a: string, b: string): number;
    static compare(a: PhraseGlossLocation, b: PhraseGlossLocation): number;
    static firstFromString(str: string): number;
}
export interface PhraseGlossLocationObject {
    from_word_id: number;
    to_word_id: number;
}
