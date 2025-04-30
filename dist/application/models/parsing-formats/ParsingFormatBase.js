export class ParsingFormatBase {
    _id;
    _template;
    _canon;
    constructor(id, template, canon) {
        this._id = id;
        this._template = template;
        this._canon = canon;
    }
    get id() {
        return this._id;
    }
    get template() {
        return this._template;
    }
    get canon() {
        return this._canon;
    }
}
