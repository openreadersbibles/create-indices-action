import { PublicationVerse } from "./PublicationVerse.js";
import { PublicationWord } from "./PublicationWord.js";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces.js";
export declare enum PublicationFootnoteType {
    None = 0,
    Parsing = 1,
    Gloss = 2,
    ParsingGloss = 3
}
export declare class PublicationFootnote {
    static xml(verse: PublicationVerse, word: PublicationWord, parent: XMLBuilder): void;
}
