import { z } from "zod";
export declare const LanguageIsoSchema: z.ZodEnum<["hbo", "arc", "grc"]>;
export type LanguageIso = z.infer<typeof LanguageIsoSchema>;
