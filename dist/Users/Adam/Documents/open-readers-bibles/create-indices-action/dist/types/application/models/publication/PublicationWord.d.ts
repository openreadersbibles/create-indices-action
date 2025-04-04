import { VerseReference } from "../../models/VerseReference";
import { PublicationPhrasalGloss } from "./PublicationPhrasalGloss";
import { PublicationWordElement } from "./PublicationWordElement";
export declare class PublicationWord {
    elements: PublicationWordElement[];
    private ref;
    constructor(ref: VerseReference);
    addElement(e: PublicationWordElement): void;
    getText(): string;
    getSeparator(): string;
    glossableElements(): PublicationWordElement[];
    getNumberOfGlosses(): number;
    getPhrasalGlosses(): PublicationPhrasalGloss[];
    hasWordId(id: number): boolean;
}
