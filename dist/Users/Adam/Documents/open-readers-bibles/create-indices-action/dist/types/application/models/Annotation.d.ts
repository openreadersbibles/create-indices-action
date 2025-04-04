import { MiniMarkdown } from './MiniMarkdown';
export declare let converter: MiniMarkdown;
export type AnnotationType = "word" | "markdown" | "wordplusmarkdown" | "null";
export interface AnnotationJsonObject {
    type: AnnotationType;
    content: any;
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
    static fromObject(obj: AnnotationJsonObject): NullAnnotation;
}
