import { z } from "zod";
// Define the AnnotationType schema
export const AnnotationTypeSchema = z.enum(["word", "markdown", "wordplusmarkdown", "null"]);
// Define the WordAnnotationContent schema
export const WordAnnotationContentSchema = z.object({
    gloss: z.string(),
});
// Define the MarkdownAnnotationContent schema
export const MarkdownAnnotationContentSchema = z.object({
    markdown: z.string(),
});
// Define the WordPlusMarkdownAnnotationContent schema
export const WordPlusMarkdownAnnotationContentSchema = z.object({
    gloss: z.string(),
    markdown: z.string(),
});
// Define the AnnotationJsonObject schema
export const AnnotationJsonObjectSchema = z.discriminatedUnion("type", [
    z.object({
        gloss_id: z.number(),
        type: z.literal("word"),
        content: WordAnnotationContentSchema,
    }),
    z.object({
        gloss_id: z.number(),
        type: z.literal("markdown"),
        content: MarkdownAnnotationContentSchema,
    }),
    z.object({
        gloss_id: z.number(),
        type: z.literal("wordplusmarkdown"),
        content: WordPlusMarkdownAnnotationContentSchema,
    }),
    z.object({
        gloss_id: z.number(),
        type: z.literal("null"),
        content: z.string(),
    }),
]);
