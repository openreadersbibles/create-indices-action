import { z } from "zod";
export declare const AnnotationTypeSchema: z.ZodEnum<["word", "markdown", "wordplusmarkdown", "null"]>;
export type AnnotationType = z.infer<typeof AnnotationTypeSchema>;
export declare const WordAnnotationContentSchema: z.ZodObject<{
    gloss: z.ZodString;
}, "strip", z.ZodTypeAny, {
    gloss: string;
}, {
    gloss: string;
}>;
export type WordAnnotationContent = z.infer<typeof WordAnnotationContentSchema>;
export declare const MarkdownAnnotationContentSchema: z.ZodObject<{
    markdown: z.ZodString;
}, "strip", z.ZodTypeAny, {
    markdown: string;
}, {
    markdown: string;
}>;
export type MarkdownAnnotationContent = z.infer<typeof MarkdownAnnotationContentSchema>;
export declare const WordPlusMarkdownAnnotationContentSchema: z.ZodObject<{
    gloss: z.ZodString;
    markdown: z.ZodString;
}, "strip", z.ZodTypeAny, {
    markdown: string;
    gloss: string;
}, {
    markdown: string;
    gloss: string;
}>;
export type WordPlusMarkdownAnnotationContent = z.infer<typeof WordPlusMarkdownAnnotationContentSchema>;
export declare const AnnotationJsonObjectSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
}>]>;
export type AnnotationJsonObject = z.infer<typeof AnnotationJsonObjectSchema>;
