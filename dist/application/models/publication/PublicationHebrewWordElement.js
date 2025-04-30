import { PublicationFootnoteType } from "./PublicationFootnote.js";
import { BaseWordElement } from "./BaseWordElement.js";
export class PublicationHebrewWordElement extends BaseWordElement {
    static substantives = ["subs", "nmpr", "adjv", "prps", "prde"];
    static fromWordRow(obj, word, request) {
        return new PublicationHebrewWordElement(obj, word, request);
    }
    get plaintext() { return this.g_word_utf8; }
    get trailer() { return this.trailer_utf8; }
    get gloss() { return this.row.gloss; }
    get _id() { return this.row._id; }
    get g_word_utf8() { return this.row.g_word_utf8; }
    get trailer_utf8() { return this.row.trailer_utf8; }
    get voc_lex_utf8() { return this.row.voc_lex_utf8; }
    get gn() { return this.row.gn; }
    get nu() { return this.row.nu; }
    get st() { return this.row.st; }
    get vt() { return this.row.vt; }
    get vs() { return this.row.vs; }
    get ps() { return this.row.ps; }
    get pdp() { return this.row.pdp; }
    get freq_lex() { return this.row.freq_lex; }
    get qere_utf8() { return this.row.qere_utf8; }
    get kq_hybrid_utf8() { return this.row.kq_hybrid_utf8; }
    get prs_gn() { return this.row.prs_gn; }
    get prs_nu() { return this.row.prs_nu; }
    get prs_ps() { return this.row.prs_ps; }
    get lexicalform() {
        return this.row.voc_lex_utf8;
    }
    requiredFootnoteType(ref) {
        /// this is a special case, but I'm not proud of this code.
        /// It's the word יָהּ, which occurs in Hallelujah. Technically
        /// it's a rare word (49 occurrences), but it sort of a short
        /// form for יהוה, so it should not be glossed. 
        if (this.row.lex_id === 1439638) {
            return PublicationFootnoteType.None;
        }
        if (this.isVerb) {
            if (this.getBelowFrequencyThreshold(ref)) {
                return PublicationFootnoteType.ParsingGloss;
            }
            else {
                return PublicationFootnoteType.Parsing;
            }
        }
        if (this.isSubstantive) {
            if (this.getBelowFrequencyThreshold(ref)) {
                return PublicationFootnoteType.ParsingGloss;
            }
            else {
                return PublicationFootnoteType.None;
            }
        }
        else {
            if (this.getBelowFrequencyThreshold(ref) && !this.isInteroggative) {
                return PublicationFootnoteType.Gloss;
            }
            else {
                return PublicationFootnoteType.None;
            }
        }
    }
    get reference() {
        return this.row.reference;
    }
    get hasPronominalSuffix() {
        return this.prs_gn != "NA";
    }
    get hasKetivQere() {
        return this.qere_utf8.length > 0;
    }
    getBelowFrequencyThreshold(ref) {
        return this.row.freq_lex < this.request.project.getFrequencyThreshold(ref.canon);
    }
    get terminatesWord() {
        return this.trailer_utf8.length > 0;
    }
    get canBeParsed() {
        return this.isVerb || this.isSubstantive;
    }
    get isVerb() {
        return this.pdp === "verb";
    }
    get isSubstantive() {
        return PublicationHebrewWordElement.substantives.indexOf(this.pdp) != -1;
    }
    get isInteroggative() {
        /// TODO is this the only/best way to do this?
        /// these are the Hebrew and Aramaic lexical ids for the interrogative proclitic
        return this.row.lex_id === 1437821 || this.row.lex_id === 1445345;
    }
    get hasPrecedingInterrogative() {
        const thisIndex = this.word.elements.indexOf(this);
        for (let i = thisIndex - 1; i >= 0; i--) {
            /// if there is a preceding substantive or verb, then the
            /// interrogative will be attached to that word
            if (this.word.elements[i].isSubstantive || this.word.elements[i].isVerb) {
                return false;
            }
            else if (this.word.elements[i].isInteroggative) {
                return true;
            }
        }
        return false;
    }
    getParsingString(ref) {
        const parsingFormat = this.request.configuration.getParsingFormat(ref.canon);
        if (parsingFormat === undefined) {
            console.error(`Parsing format not found for ${ref.canon}`);
            throw new Error(`Parsing format not found for ${ref.canon}`);
        }
        if (this.isVerb) {
            return parsingFormat.verbParsingString(this);
        }
        else if (this.isSubstantive) {
            return parsingFormat.nounParsingString(this);
        }
        else {
            console.error("A parsing is required but no parsing is available:", this);
            return "";
        }
    }
    get ketiv() {
        return this.kq_hybrid_utf8;
    }
    get qere() {
        return this.qere_utf8;
    }
    get phrasalGlosses() {
        return this.row.phrasalGlosses;
    }
    get id() {
        return this.row._id;
    }
}
