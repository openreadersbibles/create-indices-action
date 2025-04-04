import { Canon } from "../VerseReference";
export declare class ParsingFormatBase {
    private _id;
    private _template;
    private _canon;
    constructor(id: string, template: string, canon: Canon);
    get id(): string;
    get template(): string;
    get canon(): Canon;
}
