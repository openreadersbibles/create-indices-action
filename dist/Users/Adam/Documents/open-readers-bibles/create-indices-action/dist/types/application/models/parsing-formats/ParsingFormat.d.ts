import { NumeralConverter } from "../NumeralConverter.js";
import { Canon } from "../VerseReference.js";
import { PublicationGreekWordElement } from "../publication/PublicationGreekWordElement.js";
import { PublicationHebrewWordElement } from "../publication/PublicationHebrewWordElement.js";
export type ParsingFormatId = string;
export interface ParsingFormat {
    id: ParsingFormatId;
    template: string;
    canon: Canon;
    nounParsingString(element: PublicationGreekWordElement | PublicationHebrewWordElement): string;
    verbParsingString(element: PublicationGreekWordElement | PublicationHebrewWordElement): string;
    toObject(): ParsingFormatObject;
    getString(key: string): string | undefined;
}
export interface ParsingFormatObject {
    id: string;
    template: string;
    translations: StringLookup;
}
export interface ParsingFormatTemplate {
    id: ParsingFormatId;
    name: string;
    canon: Canon;
    description: string;
    strings: StringLookup;
    placeholders?: StringLookup;
}
export interface StringLookup {
    [key: string]: string;
}
export declare function parsingFormatFromId(id: ParsingFormatId): ParsingFormatTemplate | undefined;
export declare const PARSING_FORMAT_TEMPLATES: ParsingFormatTemplate[];
export declare class ParsingFormatFactory {
    static createParsingFormat(id: string, numeralConverter: NumeralConverter, templateId: string, translations: StringLookup): ParsingFormat;
}
