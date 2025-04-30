import { z } from "zod";
export declare const GlossRowSchema: z.ZodObject<{
    annotationObject: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    gloss_id: z.ZodNumber;
    votes: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    gloss_id: number;
    annotationObject: {
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
    votes: string[];
}, {
    gloss_id: number;
    annotationObject: {
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
    votes: string[];
}>;
export type GlossRow = z.infer<typeof GlossRowSchema>;
