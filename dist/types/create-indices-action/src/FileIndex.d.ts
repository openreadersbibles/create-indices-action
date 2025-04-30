import { CanonData } from '../../application/models/Canons.js';
import { ProjectConfiguration } from '../../application/models/ProjectConfiguration.js';
import { Canon } from "../../application/models/Canon.js";
import { UbsBook } from "../../application/models/UbsBook.js";
import { FilenameData } from './FilenameData.js';
type IndexByBook = Map<UbsBook, FilenameData | undefined>;
export declare class FileIndex {
    filedata: FilenameData[];
    htmlIndex: Map<"OT" | "NT" | "LXX", IndexByBook>;
    pdfIndex: Map<"OT" | "NT" | "LXX", IndexByBook>;
    project: ProjectConfiguration;
    constructor(filenames: string[], project: ProjectConfiguration);
    hasHtml(canon: Canon, book: UbsBook): boolean;
    hasPdf(canon: Canon, book: UbsBook): boolean;
    hasEither(canon: Canon, book: UbsBook): boolean;
    hasAnyFiles(cd: CanonData): boolean;
    toHtml(): string;
    produceCanonTable(cd: CanonData): string;
}
export {};
