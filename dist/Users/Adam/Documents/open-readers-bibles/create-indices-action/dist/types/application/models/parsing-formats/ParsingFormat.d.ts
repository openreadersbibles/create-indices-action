import { NumeralConverter } from "../NumeralConverter";
import { Canon } from "../VerseReference";
export type ParsingFormatId = string;
export interface ParsingFormat {
    id: ParsingFormatId;
    template: string;
    canon: Canon;
    nounParsingString(element: any): string;
    verbParsingString(element: any): string;
    toObject(): ParsingFormatObject;
    getString(key: string): string | undefined;
}
export interface ParsingFormatObject {
    id: string;
    template: string;
    translations: any;
}
export interface ParsingFormatTemplate {
    id: ParsingFormatId;
    name: string;
    canon: Canon;
    description: string;
    strings: any;
    placeholders?: any;
}
export interface StringLookup {
    [key: string]: string;
}
export declare function parsingFormatFromId(id: ParsingFormatId): ParsingFormatTemplate | undefined;
export declare const PARSING_FORMAT_TEMPLATES: ParsingFormatTemplate[];
export declare class ParsingFormatFactory {
    static createParsingFormat(id: string, numeralConverter: NumeralConverter, templateId: string, translations: any): ParsingFormat;
}
