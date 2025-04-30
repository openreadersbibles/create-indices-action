import { z } from "zod";
import { MiniMarkdown } from './MiniMarkdown.js';
import { AnnotationJsonObject, AnnotationType } from "./AnnotationJsonObject.js";
export declare const converter: MiniMarkdown;
export declare const AnnotationSchema: z.ZodObject<{
    gloss_id: z.ZodNumber;
    type: z.ZodEnum<["word", "markdown", "wordplusmarkdown", "null"]>;
    html: z.ZodString;
    tex: z.ZodString;
    toAnnotationObject: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        gloss_id: z.ZodNumber;
        type: z.ZodLiteral<"word">;
        content: z.ZodObject<{
            gloss: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            gloss: string;
        }, {
            gloss: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "word";
        content: {
            gloss: string;
        };
        gloss_id: number;
    }, {
        type: "word";
        content: {
            gloss: string;
        };
        gloss_id: number;
    }>, z.ZodObject<{
        gloss_id: z.ZodNumber;
        type: z.ZodLiteral<"markdown">;
        content: z.ZodObject<{
            markdown: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            markdown: string;
        }, {
            markdown: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "markdown";
        content: {
            markdown: string;
        };
        gloss_id: number;
    }, {
        type: "markdown";
        content: {
            markdown: string;
        };
        gloss_id: number;
    }>, z.ZodObject<{
        gloss_id: z.ZodNumber;
        type: z.ZodLiteral<"wordplusmarkdown">;
        content: z.ZodObject<{
            gloss: z.ZodString;
            markdown: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            markdown: string;
            gloss: string;
        }, {
            markdown: string;
            gloss: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "wordplusmarkdown";
        content: {
            markdown: string;
            gloss: string;
        };
        gloss_id: number;
    }, {
        type: "wordplusmarkdown";
        content: {
            markdown: string;
            gloss: string;
        };
        gloss_id: number;
    }>, z.ZodObject<{
        gloss_id: z.ZodNumber;
        type: z.ZodLiteral<"null">;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "null";
        content: string;
        gloss_id: number;
    }, {
        type: "null";
        content: string;
        gloss_id: number;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    html: string;
    type: "null" | "word" | "markdown" | "wordplusmarkdown";
    gloss_id: number;
    tex: string;
    toAnnotationObject: (...args: unknown[]) => {
        type: "word";
        content: {
            gloss: string;
        };
        gloss_id: number;
    } | {
        type: "markdown";
        content: {
            markdown: string;
        };
        gloss_id: number;
    } | {
        type: "wordplusmarkdown";
        content: {
            markdown: string;
            gloss: string;
        };
        gloss_id: number;
    } | {
        type: "null";
        content: string;
        gloss_id: number;
    };
}, {
    html: string;
    type: "null" | "word" | "markdown" | "wordplusmarkdown";
    gloss_id: number;
    tex: string;
    toAnnotationObject: (...args: unknown[]) => {
        type: "word";
        content: {
            gloss: string;
        };
        gloss_id: number;
    } | {
        type: "markdown";
        content: {
            markdown: string;
        };
        gloss_id: number;
    } | {
        type: "wordplusmarkdown";
        content: {
            markdown: string;
            gloss: string;
        };
        gloss_id: number;
    } | {
        type: "null";
        content: string;
        gloss_id: number;
    };
}>;
export type Annotation = z.infer<typeof AnnotationSchema>;
export declare function annotationFromJson(json: string): Annotation | undefined;
export declare function annotationFromObject(obj: AnnotationJsonObject): Annotation | undefined;
declare class AnnotationBase {
    type: AnnotationType;
    gloss_id: number;
    constructor(type: AnnotationType, gloss_id: number);
}
export declare class WordAnnotation extends AnnotationBase implements Annotation {
    private _gloss;
    constructor(gloss: string, gloss_id: number);
    get html(): string;
    get tex(): string;
    get gloss(): string;
    toAnnotationObject(): AnnotationJsonObject;
    static fromObject(obj: AnnotationJsonObject): WordAnnotation;
}
export declare class MarkdownAnnotation extends AnnotationBase implements Annotation {
    private _markdown;
    constructor(markdown: string, gloss_id: number);
    get html(): string;
    get tex(): string;
    toAnnotationObject(): AnnotationJsonObject;
    static fromObject(obj: AnnotationJsonObject): MarkdownAnnotation;
}
export declare class WordPlusMarkdownAnnotation extends AnnotationBase implements Annotation {
    private _gloss;
    private _markdown;
    constructor(gloss: string, markdown: string, gloss_id: number);
    get html(): string;
    get tex(): string;
    toAnnotationObject(): AnnotationJsonObject;
    static fromObject(obj: AnnotationJsonObject): WordPlusMarkdownAnnotation;
}
export declare class NullAnnotation extends AnnotationBase implements Annotation {
    constructor(gloss_id: number);
    get html(): string;
    get tex(): string;
    toAnnotationObject(): AnnotationJsonObject;
    static fromObject(obj: AnnotationJsonObject): NullAnnotation;
}
export {};
