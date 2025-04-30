import { PublicationHebrewWordElement } from "../publication/PublicationHebrewWordElement.js";
import { ParsingFormat } from "./ParsingFormat.js";
import { ParsingFormatBase } from "./ParsingFormatBase.js";
import { NumeralConverter } from "../NumeralConverter.js";
import { OTVerboseParsingFormatStrings } from "./OTVerboseParsingFormatStrings.js";
import { ParsingFormatObject } from "@models/ParsingFormatObject.js";
export declare class OTVerboseParsingFormat extends ParsingFormatBase implements ParsingFormat {
    private strings;
    private numeralConverter;
    constructor(id: string, template: string, numeralConverter: NumeralConverter, strings?: OTVerboseParsingFormatStrings);
    toObject(): ParsingFormatObject;
    getString(key: string): string | undefined;
    nounParsingString(element: PublicationHebrewWordElement): string;
    verbParsingString(element: PublicationHebrewWordElement): string;
    private pronominalSuffixString;
}
