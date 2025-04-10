import { UserId } from "./UserProfile.js";
import { Canon, UbsBook, VerseReference } from "./VerseReference.js";
import { ParsingFormat } from "./parsing-formats/ParsingFormat.js";
import { PublicationConfiguration, PublicationConfigurationRow } from "./PublicationConfiguration.js";
import { ProjectParsingFormats, ProjectParsingFormatsObject } from "./ProjectParsingFormats.js";
interface ThresholdObject {
    [key: string]: number;
}
interface BooknamesObject {
    [key: string]: string;
}
export type ProjectRole = 'admin' | 'member' | 'disabled';
export declare const PROJECT_ROLES: ProjectRole[];
export interface ProjectRoleRow {
    user_id: string;
    user_role: ProjectRole;
    power_user: 1 | 0;
}
export interface ProjectDescription {
    project_id: ProjectId;
    project_title: string;
    project_description: string;
    allow_joins: boolean;
}
export type ProjectId = string;
export type LayoutDirection = "ltr" | "rtl";
export interface ProjectConfigurationRow {
    project_id: ProjectId;
    project_title: string;
    project_description: string;
    layout_direction: LayoutDirection;
    frequency_thresholds: ThresholdObject;
    bookNames: BooknamesObject;
    canons: Canon[];
    roles: ProjectRoleRow[];
    allow_joins: boolean;
    font_families: string;
    font_size: number | undefined;
    parsing_formats: ProjectParsingFormatsObject;
    publication_configurations?: {
        [key: string]: PublicationConfigurationRow;
    };
    numerals: string[];
}
export declare class ProjectConfiguration {
    static Default: string;
    private _project_id;
    private _project_title;
    private _project_description;
    private _layout_direction;
    private _frequency_thresholds;
    private _bookNames;
    private _canons;
    private _roles;
    private _allow_joins;
    private _font_families;
    private _font_size;
    private _parsingFormats;
    private _numerals;
    private _publication_configurations;
    constructor(project_id: string);
    initializeBookNamesToLatin(): void;
    get layout_direction(): LayoutDirection;
    get title(): string;
    get description(): string;
    get allow_joins(): boolean;
    get id(): ProjectId;
    get canons(): Canon[];
    get parsingFormats(): ProjectParsingFormats;
    get font_families(): string;
    get font_size(): number | undefined;
    get numerals(): string[];
    set project_id(value: ProjectId);
    set title(value: string);
    set description(value: string);
    set allow_joins(value: boolean);
    set layout_direction(value: LayoutDirection);
    set frequency_thresholds(value: Map<Canon, number>);
    set bookNames(value: Map<UbsBook, string>);
    get bookNames(): Map<UbsBook, string>;
    set canons(value: Canon[]);
    get members(): UserId[];
    set font_families(ff: string);
    set font_size(size: number | undefined);
    set numerals(numerals: string[]);
    replaceNumerals(str: string): string;
    member(user_id: UserId): ProjectRoleRow | undefined;
    setMember(member: ProjectRoleRow): void;
    userRole(user_id: UserId): ProjectRole | undefined;
    hasCanon(canon: Canon): boolean;
    fallbackCanon(): Canon;
    getFrequencyThreshold(canon: Canon): number;
    formatVerseReference(ref: VerseReference): string;
    getBookName(book: UbsBook): string;
    static performNumeralReplacement(str: string, numerals: string[]): string;
    setParsingFormat(value: ParsingFormat): void;
    get repositoryName(): string;
    get publicationUrl(): string;
    deepCopy(): ProjectConfiguration;
    static getRepositoryName(project_id: string): string;
    get publicationConfigurations(): Map<string, PublicationConfiguration>;
    toObject(): ProjectConfigurationRow;
    static fromRow(row: ProjectConfigurationRow): ProjectConfiguration;
}
export {};
