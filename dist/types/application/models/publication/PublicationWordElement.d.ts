import { Annotation } from "../../models/Annotation.js";
import { VerseReference } from "../../models/VerseReference.js";
import { PublicationFootnoteType } from "./PublicationFootnote.js";
import { PublicationPhrasalGloss } from "./PublicationPhrasalGloss.js";
export interface PublicationWordElement {
    plaintext: string;
    lexicalform: string;
    trailer: string;
    requiredFootnoteType(ref: VerseReference): PublicationFootnoteType;
    get isVerb(): boolean;
    get isSubstantive(): boolean;
    get isInteroggative(): boolean;
    gloss: Annotation | null;
    getParsingString(ref: VerseReference): string;
    get ketiv(): string;
    get qere(): string;
    get terminatesWord(): boolean;
    phrasalGlosses: PublicationPhrasalGloss[];
    get id(): number;
}
