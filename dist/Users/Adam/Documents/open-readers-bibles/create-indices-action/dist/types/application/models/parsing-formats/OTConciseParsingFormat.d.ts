import { PublicationHebrewWordElement } from "../publication/PublicationHebrewWordElement";
import { OTConciseParsingFormatStrings } from "./OTConciseParsingFormatStrings";
import { ParsingFormat, ParsingFormatObject } from "./ParsingFormat";
import { ParsingFormatBase } from "./ParsingFormatBase";
import { NumeralConverter } from "../NumeralConverter";
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
