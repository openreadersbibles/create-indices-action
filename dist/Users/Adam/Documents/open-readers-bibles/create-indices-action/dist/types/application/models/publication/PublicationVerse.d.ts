import { PublicationWord } from "./PublicationWord.js";
import { VerseReference } from "../../models/VerseReference.js";
import { PublicationRequest } from "../../models/PublicationRequest.js";
import { PublicationWordElement } from "./PublicationWordElement.js";
import { PublicationHebrewWordElementRow } from "./PublicationHebrewWordElementRow.js";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces.js";
import { PublicationGreekWordElementRow } from "./PublicationGreekWordElementRow.js";
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
    static fromWordElements<T extends PublicationGreekWordElementRow | PublicationHebrewWordElementRow>(rows: T[], reference: VerseReference, request: PublicationRequest, objectCreator: (obj: T, word: PublicationWord, request: PublicationRequest) => PublicationWordElement): PublicationVerse;
}
