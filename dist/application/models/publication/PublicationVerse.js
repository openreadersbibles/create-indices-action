import { PublicationFootnote } from "./PublicationFootnote.js";
import { PublicationWord } from "./PublicationWord.js";
export class PublicationVerse {
    reference;
    request;
    _elements = new Array();
    words = new Array();
    constructor(reference, request) {
        this.reference = reference;
        this.request = request;
    }
    verseXml(parent) {
        let glossCounter = 0;
        this.words.forEach((word) => {
            const pgs = word.getPhrasalGlosses();
            let localParent = parent;
            /// add any phrasal glosses in at the beginning of the span
            pgs.filter((pg) => word.hasWordId(pg.from_word_id)).forEach((pg) => {
                const marker = this.request.configuration.getFootnoteMarker(glossCounter);
                glossCounter++;
                parent.ele('span', {
                    from: `#id${pg.from_word_id}`,
                    to: `#id${pg.to_word_id}`,
                    n: marker
                }).txt(pg.markdown);
            });
            /// we want to add the <w> element if it's either a from- or a to- word
            // const needsTag = phrasalGlosses.some((pg) => word.hasWordId(pg.from_word_id) || word.hasWordId(pg.to_word_id));
            /// I'm going to see about putting every word within a word tag
            const needsTag = true;
            if (needsTag) {
                localParent = parent.ele('w').att('xml:id', `id${String(word.elements[0].id)}`);
            }
            /// add the text of the word
            localParent.txt(word.getText());
            /// if there is only one gloss, add a footnote marker
            const gc = word.getNumberOfGlosses();
            if (gc == 1 || word.hasKetivQere) {
                // text += `<note type="gloss" n="${this.request.project.getFootnoteMarker(glossCounter)}">dummy</note>`;
                const note_node = parent.ele('note', { type: 'gloss', n: this.request.configuration.getFootnoteMarker(glossCounter) });
                PublicationFootnote.xml(this, word, note_node);
                glossCounter++;
            }
            else if (gc > 1) {
                console.error(`More than one gloss for a word in ${this.reference.toString()}`);
                word.glossableElements().forEach((element) => {
                    console.error(`${element.id} ${element.gloss?.html} ${element.requiredFootnoteType(this.reference)}`);
                });
                throw new Error(`More than one gloss for a word in ${this.reference.toString()}`);
            }
            parent.txt(word.getSeparator());
        });
    }
    get elements() {
        return this._elements;
    }
    static fromWordElements(rows, reference, request, objectCreator) {
        const v = new PublicationVerse(reference, request);
        v.words.push(new PublicationWord(reference));
        for (let i = 0; i < rows.length; i++) {
            const currentWord = v.words[v.words.length - 1];
            const e = objectCreator(rows[i], currentWord, request);
            v.elements.push(e);
            v.words[v.words.length - 1].addElement(e);
            if (e.terminatesWord && i != rows.length - 1) {
                v.words.push(new PublicationWord(reference));
            }
        }
        return v;
    }
}
