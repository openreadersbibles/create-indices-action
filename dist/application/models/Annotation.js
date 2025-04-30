import { z } from "zod";
import { MiniMarkdown } from './MiniMarkdown.js';
import { AnnotationJsonObjectSchema, AnnotationTypeSchema } from "./AnnotationJsonObject.js";
export const converter = new MiniMarkdown();
// Define the Annotation schema
export const AnnotationSchema = z.object({
    /// NB: this could be the _id from the gloss table or the _id from the phrase_gloss table
    gloss_id: z.number(),
    type: AnnotationTypeSchema,
    html: z.string(),
    tex: z.string(),
    toAnnotationObject: z.function().returns(AnnotationJsonObjectSchema),
});
export function annotationFromJson(json) {
    const obj = JSON.parse(json);
    return annotationFromObject(obj);
}
export function annotationFromObject(obj) {
    switch (obj.type) {
        case "word":
            return WordAnnotation.fromObject(obj);
        case "markdown":
            return MarkdownAnnotation.fromObject(obj);
        case "wordplusmarkdown":
            return WordPlusMarkdownAnnotation.fromObject(obj);
        case "null":
            return NullAnnotation.fromObject(obj);
        default:
            return undefined;
    }
}
class AnnotationBase {
    type;
    /// NB: this could be the _id from the gloss table or the _id from the phrase_gloss table
    gloss_id;
    constructor(type, gloss_id) {
        this.type = type;
        this.gloss_id = gloss_id;
    }
}
export class WordAnnotation extends AnnotationBase {
    _gloss;
    constructor(gloss, gloss_id) {
        super("word", gloss_id);
        this._gloss = gloss;
    }
    get html() {
        return this._gloss;
    }
    get tex() {
        return this._gloss;
    }
    get gloss() {
        return this._gloss;
    }
    toAnnotationObject() {
        return {
            type: "word",
            gloss_id: this.gloss_id,
            content: {
                gloss: this._gloss
            }
        };
    }
    static fromObject(obj) {
        if (obj.type !== "word") {
            throw new Error("Invalid type for WordAnnotation");
        }
        return new WordAnnotation(obj.content.gloss, obj.gloss_id);
    }
}
export class MarkdownAnnotation extends AnnotationBase {
    _markdown;
    constructor(markdown, gloss_id) {
        super("markdown", gloss_id);
        this._markdown = markdown;
    }
    get html() {
        return converter.makeHtml(this._markdown);
    }
    get tex() {
        return converter.makeTex(this._markdown);
    }
    toAnnotationObject() {
        return {
            type: "markdown",
            gloss_id: this.gloss_id,
            content: {
                markdown: this._markdown
            }
        };
    }
    static fromObject(obj) {
        if (obj.type !== "markdown") {
            throw new Error("Invalid type for MarkdownAnnotation");
        }
        return new MarkdownAnnotation(obj.content.markdown, obj.gloss_id);
    }
}
export class WordPlusMarkdownAnnotation extends AnnotationBase {
    _gloss;
    _markdown;
    constructor(gloss, markdown, gloss_id) {
        super("wordplusmarkdown", gloss_id);
        this._gloss = gloss;
        this._markdown = markdown;
    }
    get html() {
        return this._gloss + " " + converter.makeHtml(this._markdown);
    }
    get tex() {
        return this._gloss + " " + converter.makeTex(this._markdown);
    }
    toAnnotationObject() {
        return {
            type: "wordplusmarkdown",
            gloss_id: this.gloss_id,
            content: {
                gloss: this._gloss,
                markdown: this._markdown
            }
        };
    }
    static fromObject(obj) {
        if (obj.type !== "wordplusmarkdown") {
            throw new Error("Invalid type for WordPlusMarkdownAnnotation");
        }
        return new WordPlusMarkdownAnnotation(obj.content.gloss, obj.content.markdown, obj.gloss_id);
    }
}
export class NullAnnotation extends AnnotationBase {
    constructor(gloss_id) {
        super("null", gloss_id);
    }
    get html() {
        return "";
    }
    get tex() {
        return "";
    }
    toAnnotationObject() {
        return {
            type: "null",
            gloss_id: this.gloss_id,
            content: ""
        };
    }
    static fromObject(obj) {
        return new NullAnnotation(obj.gloss_id);
    }
}
