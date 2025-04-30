import { z } from "zod";
// Define the StringLookup schema
const StringLookupSchema = z.record(z.string()); // Represents { [key: string]: string }
// Define the ParsingFormatObject schema
export const ParsingFormatObjectSchema = z.object({
    id: z.string(), // The `id` field is a string
    template: z.string(), // The `template` field is a string
    translations: StringLookupSchema, // The `translations` field is a StringLookup object
});
