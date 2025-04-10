import { MiniMarkdown } from './MiniMarkdown.js';
export declare const converter: MiniMarkdown;
export type AnnotationType = "word" | "markdown" | "wordplusmarkdown" | "null";
export type AnnotationJsonObject = {
    type: "word";
    content: WordAnnotationContent;
} | {
    type: "markdown";
    content: MarkdownAnnotationContent;
} | {
    type: "wordplusmarkdown";
    content: WordPlusMarkdownAnnotationContent;
} | {
    type: "null";
    content: string;
};
interface WordAnnotationContent {
    gloss: string;
}
export interface MarkdownAnnotationContent {
    markdown: string;
}
interface WordPlusMarkdownAnnotationContent {
    gloss: string;
    markdown: string;
}
export interface Annotation {
    type: AnnotationType;
    html: string;
    tex: string;
    toAnnotationObject: () => AnnotationJsonObject;
}
export declare function annotationFromJson(json: string): Annotation | undefined;
export declare function annotationFromObject(obj: AnnotationJsonObject): Annotation | undefined;
export declare class WordAnnotation implements Annotation {
    private _gloss;
    type: AnnotationType;
    constructor(gloss: string);
    get html(): string;
    get tex(): string;
    toAnnotationObject(): AnnotationJsonObject;
    static fromObject(obj: AnnotationJsonObject): WordAnnotation;
}
export declare class MarkdownAnnotation implements Annotation {
    private _markdown;
    type: AnnotationType;
    constructor(markdown: string);
    get html(): string;
    get tex(): string;
    toAnnotationObject(): AnnotationJsonObject;
    static fromObject(obj: AnnotationJsonObject): MarkdownAnnotation;
}
export declare class WordPlusMarkdownAnnotation implements Annotation {
    private _gloss;
    private _markdown;
    type: AnnotationType;
    constructor(gloss: string, markdown: string);
    get html(): string;
    get tex(): string;
    toAnnotationObject(): AnnotationJsonObject;
    static fromObject(obj: AnnotationJsonObject): WordPlusMarkdownAnnotation;
}
export declare class NullAnnotation implements Annotation {
    type: AnnotationType;
    constructor();
    get html(): string;
    get tex(): string;
    toAnnotationObject(): AnnotationJsonObject;
    static fromObject(): NullAnnotation;
}
export {};
