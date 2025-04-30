import { z } from "zod";
declare const StringLookupSchema: z.ZodRecord<z.ZodString, z.ZodString>;
export type StringLookup = z.infer<typeof StringLookupSchema>;
export declare const ParsingFormatObjectSchema: z.ZodObject<{
    id: z.ZodString;
    template: z.ZodString;
    translations: z.ZodRecord<z.ZodString, z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    template: string;
    translations: Record<string, string>;
}, {
    id: string;
    template: string;
    translations: Record<string, string>;
}>;
export type ParsingFormatObject = z.infer<typeof ParsingFormatObjectSchema>;
export {};
