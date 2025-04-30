import { PublicationHebrewWordElement } from "../publication/PublicationHebrewWordElement.js";
import { ParsingFormat } from "./ParsingFormat.js";
import { ParsingFormatBase } from "./ParsingFormatBase.js";
import { NumeralConverter } from "../NumeralConverter.js";
import { OTTemplaticParsingFormatStrings } from "./OTTemplaticParsingFormatStrings.js";
import { ParsingFormatObject } from "@models/ParsingFormatObject.js";
export declare class OTTemplaticParsingFormat extends ParsingFormatBase implements ParsingFormat {
    private strings;
    private numeralConverter;
    constructor(id: string, template: string, numeralConverter: NumeralConverter, strings?: OTTemplaticParsingFormatStrings);
    toObject(): ParsingFormatObject;
    getString(key: string): string | undefined;
    nounParsingString(element: PublicationHebrewWordElement): string;
    verbParsingString(element: PublicationHebrewWordElement): string;
    private pronominalSuffixString;
    private interrogativeString;
}
