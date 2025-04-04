import { Annotation } from "../../models/Annotation";
import { VerseReference } from "../../models/VerseReference";
import { PublicationFootnoteType } from "./PublicationFootnote";
import { PublicationPhrasalGloss } from "./PublicationPhrasalGloss";
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
    get ketivQereString(): string;
    get terminatesWord(): boolean;
    phrasalGlosses: PublicationPhrasalGloss[];
    get id(): number;
}
