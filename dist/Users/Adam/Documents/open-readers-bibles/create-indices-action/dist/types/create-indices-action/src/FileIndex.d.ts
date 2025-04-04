import { CanonData } from '../../application/models/Canons.js';
import { ProjectConfiguration } from '../../application/models/ProjectConfiguration.js';
import { Canon, UbsBook } from '../../application/models/VerseReference.js';
import { FilenameData } from './FilenameData.js';
type IndexByBook = Map<UbsBook, FilenameData | undefined>;
export declare class FileIndex {
    filedata: FilenameData[];
    htmlIndex: Map<Canon, IndexByBook>;
    pdfIndex: Map<Canon, IndexByBook>;
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
