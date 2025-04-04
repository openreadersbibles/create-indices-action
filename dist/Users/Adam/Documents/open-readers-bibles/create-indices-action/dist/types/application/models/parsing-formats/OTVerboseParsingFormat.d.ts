import { PublicationHebrewWordElement } from "../publication/PublicationHebrewWordElement";
import { ParsingFormat, ParsingFormatObject } from "./ParsingFormat";
import { ParsingFormatBase } from "./ParsingFormatBase";
import { NumeralConverter } from "../NumeralConverter";
import { OTVerboseParsingFormatStrings } from "./OTVerboseParsingFormatStrings";
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
