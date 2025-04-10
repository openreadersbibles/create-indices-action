import { PublicationRequest } from "../../models/PublicationRequest.js";
import { PublicationWord } from "./PublicationWord.js";
export declare class BaseWordElement<T> {
    row: T;
    request: PublicationRequest;
    word: PublicationWord;
    constructor(obj: T, word: PublicationWord, request: PublicationRequest);
}
