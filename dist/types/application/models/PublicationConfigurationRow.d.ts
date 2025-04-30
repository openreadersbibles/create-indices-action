import { z } from "zod";
export declare const PublicationFootnoteStyleSchema: z.ZodEnum<["lettered-by-verse", "numbered-by-page"]>;
export type PublicationFootnoteStyle = z.infer<typeof PublicationFootnoteStyleSchema>;
export declare const PublicationConfigurationRowSchema: z.ZodObject<{
    footnoteMarkers: z.ZodArray<z.ZodString, "many">;
    polyglossiaOtherLanguage: z.ZodString;
    chapterHeader: z.ZodString;
    publication_project_font: z.ZodString;
    publication_biblical_font: z.ZodString;
    latex_template: z.ZodString;
    parsing_formats: z.ZodRecord<z.ZodString, z.ZodString>;
    css_template: z.ZodOptional<z.ZodString>;
    footnote_style: z.ZodOptional<z.ZodEnum<["lettered-by-verse", "numbered-by-page"]>>;
}, "strip", z.ZodTypeAny, {
    footnoteMarkers: string[];
    polyglossiaOtherLanguage: string;
    chapterHeader: string;
    publication_project_font: string;
    publication_biblical_font: string;
    latex_template: string;
    parsing_formats: Record<string, string>;
    css_template?: string | undefined;
    footnote_style?: "lettered-by-verse" | "numbered-by-page" | undefined;
}, {
    footnoteMarkers: string[];
    polyglossiaOtherLanguage: string;
    chapterHeader: string;
    publication_project_font: string;
    publication_biblical_font: string;
    latex_template: string;
    parsing_formats: Record<string, string>;
    css_template?: string | undefined;
    footnote_style?: "lettered-by-verse" | "numbered-by-page" | undefined;
}>;
export type PublicationConfigurationRow = z.infer<typeof PublicationConfigurationRowSchema>;
