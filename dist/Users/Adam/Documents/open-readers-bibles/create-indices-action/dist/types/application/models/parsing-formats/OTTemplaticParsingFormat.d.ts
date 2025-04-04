import { PublicationHebrewWordElement } from "../publication/PublicationHebrewWordElement";
import { ParsingFormat, ParsingFormatObject } from "./ParsingFormat";
import { ParsingFormatBase } from "./ParsingFormatBase";
import { NumeralConverter } from "../NumeralConverter";
import { OTTemplaticParsingFormatStrings } from "./OTTemplaticParsingFormatStrings";
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
