import { PublicationGreekWordElement } from "../publication/PublicationGreekWordElement";
import { NumeralConverter } from "../NumeralConverter";
import { NTTemplaticParsingFormatStrings } from "./NTTemplaticParsingFormatStrings";
import { ParsingFormat, ParsingFormatObject } from "./ParsingFormat";
import { ParsingFormatBase } from "./ParsingFormatBase";
export declare class NTTemplaticParsingFormat extends ParsingFormatBase implements ParsingFormat {
    private strings;
    constructor(id: string, template: string, numeralConverter: NumeralConverter, strings?: NTTemplaticParsingFormatStrings);
    toObject(): ParsingFormatObject;
    getString(key: string): string | undefined;
    nounParsingString(element: PublicationGreekWordElement): string;
    verbParsingString(element: PublicationGreekWordElement): string;
}
