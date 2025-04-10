import { PublicationVerse } from "./PublicationVerse.js";
import { PublicationFootnoteElement } from "./PublicationFootnoteElement.js";
import { PublicationWordElement } from "./PublicationWordElement.js";
import { PublicationPhrasalGloss } from "./PublicationPhrasalGloss.js";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces.js";
import { PublicationRequest } from "../PublicationRequest.js";
export declare enum PublicationFootnoteType {
    None = 0,
    Parsing = 1,
    Gloss = 2,
    ParsingGloss = 3
}
export declare class PublicationFootnote {
    verse: PublicationVerse;
    entries: Map<string, PublicationFootnoteElement>;
    request: PublicationRequest;
    constructor(verse: PublicationVerse, request: PublicationRequest);
    addGloss(element: PublicationWordElement, index: number): void;
    addPhrasalGloss(pg: PublicationPhrasalGloss, index: number): void;
    text(): string;
    private footnoteContent;
    static xml(verse: PublicationVerse, element: PublicationWordElement, parent: XMLBuilder): void;
}
