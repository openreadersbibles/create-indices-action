import { PublicationHebrewWordElement } from "../publication/PublicationHebrewWordElement.js";
import { OTConciseParsingFormatStrings } from "./OTConciseParsingFormatStrings.js";
import { ParsingFormat } from "./ParsingFormat.js";
import { ParsingFormatBase } from "./ParsingFormatBase.js";
import { NumeralConverter } from "../NumeralConverter.js";
import { ParsingFormatObject } from "@models/ParsingFormatObject.js";
export declare class OTConciseParsingFormat extends ParsingFormatBase implements ParsingFormat {
    private strings;
    private numeralConverter;
    constructor(id: string, template: string, numeralConverter: NumeralConverter, strings?: OTConciseParsingFormatStrings);
    toObject(): ParsingFormatObject;
    getString(key: string): string | undefined;
    nounParsingString(element: PublicationHebrewWordElement): string;
    verbParsingString(element: PublicationHebrewWordElement): string;
    private secondNumberForInflectedVerbs;
    private secondNumberForNouns;
}
