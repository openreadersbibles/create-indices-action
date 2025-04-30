export var PublicationFootnoteType;
(function (PublicationFootnoteType) {
    PublicationFootnoteType[PublicationFootnoteType["None"] = 0] = "None";
    PublicationFootnoteType[PublicationFootnoteType["Parsing"] = 1] = "Parsing";
    PublicationFootnoteType[PublicationFootnoteType["Gloss"] = 2] = "Gloss";
    PublicationFootnoteType[PublicationFootnoteType["ParsingGloss"] = 3] = "ParsingGloss";
})(PublicationFootnoteType || (PublicationFootnoteType = {}));
export class PublicationFootnote {
    static xml(verse, word, parent) {
        /// the glossable element, of which there should be only one
        if (word.hasKetivQere) {
            parent.ele('gloss', { type: 'ketiv-qere' })
                .ele('orb:ketiv').txt(word.ketiv)
                .up()
                .ele('orb:qere').txt(word.qere);
        }
        const element = word.glossableElements()[0];
        /// this condition is met if a word has a ketiv-qere, but no glossable element
        if (element == null) {
            return;
        }
        switch (element.requiredFootnoteType(verse.reference)) {
            case PublicationFootnoteType.Parsing:
                parent.ele('gloss', { type: 'parsing' }).txt(element.getParsingString(verse.reference));
                break;
            case PublicationFootnoteType.ParsingGloss:
                if (element.gloss == null) {
                    console.error(`Gloss expected, but 'gloss' is null. (Word Element: ${element.id}}, ${verse.reference.toString()})`);
                    // console.error(element);
                }
                else if (element.gloss.tex == null) {
                    console.error("Gloss expected, but 'gloss.tex' is null.");
                    // console.error(element);
                }
                else {
                    parent
                        .ele('gloss', { type: 'parsing' })
                        .txt(element.getParsingString(verse.reference))
                        .up()
                        .ele('gloss', { type: 'lexical-form' })
                        .txt(element.lexicalform)
                        .up()
                        .ele('gloss', { type: 'gloss' })
                        .txt(element.gloss.tex);
                }
                break;
            case PublicationFootnoteType.Gloss:
                if (element.gloss === null) {
                    console.error(`Gloss expected, but 'gloss' is null. (Word Element: ${element.id}}, ${verse.reference.toString()})`);
                    // console.error(element);
                }
                else if (element.gloss.tex === null || element.gloss.tex === undefined) {
                    console.error("Gloss expected, but 'gloss.tex' is null.");
                    // console.error(element);
                }
                else {
                    parent
                        .ele('gloss', { type: 'lexical-form' })
                        .txt(element.lexicalform)
                        .up()
                        .ele('gloss', { type: 'gloss' })
                        .txt(element.gloss.tex);
                }
                break;
            case PublicationFootnoteType.None:
            default:
                break;
        }
    }
}
