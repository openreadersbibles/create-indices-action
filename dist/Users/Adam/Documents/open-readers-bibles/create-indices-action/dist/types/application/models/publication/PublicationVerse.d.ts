import { PublicationWord } from "./PublicationWord";
import { VerseReference } from "../../models/VerseReference";
import { PublicationRequest } from "../../models/PublicationRequest";
import { PublicationWordElement } from "./PublicationWordElement";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
export type WordElementCreator = (obj: any, word: PublicationWord, request: PublicationRequest) => PublicationWordElement;
export declare class PublicationVerse {
    reference: VerseReference;
    request: PublicationRequest;
    protected _elements: PublicationWordElement[];
    words: PublicationWord[];
    constructor(reference: VerseReference, request: PublicationRequest);
    text(): string;
    private verseText;
    private footnoteText;
    verseXml(parent: XMLBuilder): void;
    get elements(): PublicationWordElement[];
    static fromWordElements(rows: any[], reference: VerseReference, request: PublicationRequest, objectCreator: WordElementCreator): PublicationVerse;
}
