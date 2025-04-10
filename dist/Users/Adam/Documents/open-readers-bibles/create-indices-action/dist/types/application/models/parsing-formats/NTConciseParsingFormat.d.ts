import { PublicationGreekWordElement } from "../publication/PublicationGreekWordElement.js";
import { NumeralConverter } from "../NumeralConverter.js";
import { NTConciseParsingFormatStrings } from "./NTConciseParsingFormatStrings.js";
import { ParsingFormat, ParsingFormatObject } from "./ParsingFormat.js";
import { ParsingFormatBase } from "./ParsingFormatBase.js";
export declare class NTConciseParsingFormat extends ParsingFormatBase implements ParsingFormat {
    private strings;
    constructor(id: string, template: string, numeralConverter: NumeralConverter, strings?: NTConciseParsingFormatStrings);
    toObject(): ParsingFormatObject;
    getString(key: string): string | undefined;
    nounParsingString(element: PublicationGreekWordElement): string;
    verbParsingString(element: PublicationGreekWordElement): string;
}
