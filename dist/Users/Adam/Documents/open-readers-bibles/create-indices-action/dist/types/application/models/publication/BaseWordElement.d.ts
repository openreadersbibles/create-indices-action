import { PublicationRequest } from "../../models/PublicationRequest";
import { PublicationWord } from "./PublicationWord";
export declare class BaseWordElement {
    request: PublicationRequest;
    word: PublicationWord;
    constructor(word: PublicationWord, request: PublicationRequest);
}
