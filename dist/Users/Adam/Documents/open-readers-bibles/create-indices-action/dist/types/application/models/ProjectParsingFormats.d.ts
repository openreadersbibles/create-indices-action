import { ParsingFormat, ParsingFormatId, ParsingFormatObject } from "./parsing-formats/ParsingFormat.js";
import { ProjectConfiguration } from "./ProjectConfiguration.js";
import { Canon } from "./VerseReference.js";
type CanonParsingFormats = Map<ParsingFormatId, ParsingFormat>;
export type ProjectParsingFormatsObject = Partial<Record<Canon, Record<ParsingFormatId, ParsingFormatObject>>>;
export declare class ProjectParsingFormats {
    private _settings;
    addCanonSettings(canon: Canon, settings: CanonParsingFormats): void;
    getSettingsForCanon(canon: Canon): CanonParsingFormats | undefined;
    isEmpty(): boolean;
    hasFormatForCanon(canon: Canon): boolean;
    getNumberOfConfigurations(canon: Canon): number;
    getParsingFormat(canon: Canon, key: ParsingFormatId): ParsingFormat | undefined;
    getParsingFormatFromId(key: ParsingFormatId): ParsingFormat | undefined;
    setParsingFormat(canon: Canon, key: ParsingFormatId, format: ParsingFormat): void;
    removeParsingFormat(c: Canon, key: string): void;
    toObject(): ProjectParsingFormatsObject;
    static fromObject(obj: ProjectParsingFormatsObject, project: ProjectConfiguration): ProjectParsingFormats;
}
export {};
