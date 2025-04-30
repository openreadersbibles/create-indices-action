import { PublicationGreekWordElement } from "../publication/PublicationGreekWordElement.js";
import { NumeralConverter } from "../NumeralConverter.js";
import { NTVerboseParsingFormatStrings } from "./NTVerboseParsingFormatStrings.js";
import { ParsingFormat } from "./ParsingFormat.js";
import { ParsingFormatBase } from "./ParsingFormatBase.js";
import { ParsingFormatObject } from "@models/ParsingFormatObject.js";
export declare class NTVerboseParsingFormat extends ParsingFormatBase implements ParsingFormat {
    private strings;
    constructor(id: string, template: string, numeralConverter: NumeralConverter, strings?: NTVerboseParsingFormatStrings);
    toObject(): ParsingFormatObject;
    getString(key: string): string | undefined;
    nounParsingString(element: PublicationGreekWordElement): string;
    verbParsingString(element: PublicationGreekWordElement): string;
}
