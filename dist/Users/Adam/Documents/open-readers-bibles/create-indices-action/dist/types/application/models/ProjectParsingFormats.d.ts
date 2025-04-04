import { ParsingFormat, ParsingFormatId } from "./parsing-formats/ParsingFormat";
import { ProjectConfiguration } from "./ProjectConfiguration";
import { Canon } from "./VerseReference";
type CanonParsingFormats = Map<ParsingFormatId, ParsingFormat>;
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
    toObject(): any;
    static fromObject(obj: any, project: ProjectConfiguration): ProjectParsingFormats;
}
export {};
