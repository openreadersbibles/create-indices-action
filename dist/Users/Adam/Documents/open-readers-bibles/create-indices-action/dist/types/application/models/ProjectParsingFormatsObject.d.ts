import { z } from "zod";
export declare const ProjectParsingFormatsObjectSchema: z.ZodRecord<z.ZodEnum<["OT", "NT", "LXX"]>, z.ZodRecord<z.ZodString, z.ZodObject<{
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
}>>>;
export type ProjectParsingFormatsObject = z.infer<typeof ProjectParsingFormatsObjectSchema>;
