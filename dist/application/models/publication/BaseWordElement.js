export class BaseWordElement {
    row;
    request;
    word;
    constructor(obj, word, request) {
        this.row = obj;
        this.word = word;
        this.request = request;
    }
}
