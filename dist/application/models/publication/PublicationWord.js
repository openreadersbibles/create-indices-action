import { PublicationFootnoteType } from "./PublicationFootnote.js";
export class PublicationWord {
    elements = new Array();
    ref;
    constructor(ref) {
        this.ref = ref;
    }
    addElement(e) {
        this.elements.push(e);
    }
    getText() {
        return this.elements.map(e => e.plaintext).join('');
    }
    getSeparator() {
        return this.elements[this.elements.length - 1].trailer;
    }
    glossableElements() {
        return this.elements.filter((value) => { return value.requiredFootnoteType(this.ref) != PublicationFootnoteType.None; });
    }
    getNumberOfGlosses() {
        return this.glossableElements().length;
    }
    getPhrasalGlosses() {
        let glosses = new Array();
        this.glossableElements().forEach((element) => {
            glosses = glosses.concat(element.phrasalGlosses);
        });
        return glosses;
    }
    hasWordId(id) {
        return this.elements.some((element) => element.id == id);
    }
    get hasKetivQere() {
        return this.elements.some((element) => element.ketiv.length > 0);
    }
    get ketiv() {
        return this.elements.map((element) => element.ketiv).join('');
    }
    get qere() {
        return this.elements.map((element) => element.qere).join('');
    }
}
