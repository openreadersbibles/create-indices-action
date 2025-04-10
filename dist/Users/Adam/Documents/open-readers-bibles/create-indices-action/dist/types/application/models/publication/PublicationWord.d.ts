import { VerseReference } from "../../models/VerseReference.js";
import { PublicationPhrasalGloss } from "./PublicationPhrasalGloss.js";
import { PublicationWordElement } from "./PublicationWordElement.js";
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
