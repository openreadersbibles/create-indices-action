import { z } from "zod";
export declare const UserProfileRowSchema: z.ZodObject<{
    user_id: z.ZodString;
    user_description: z.ZodString;
    projects: z.ZodArray<z.ZodObject<{
        project_id: z.ZodString;
        project_title: z.ZodString;
        project_description: z.ZodString;
        layout_direction: z.ZodEnum<["ltr", "rtl"]>;
        frequency_thresholds: z.ZodRecord<z.ZodString, z.ZodNumber>;
        bookNames: z.ZodRecord<z.ZodString, z.ZodString>;
        canons: z.ZodArray<z.ZodEnum<["OT", "NT", "LXX"]>, "many">;
        roles: z.ZodArray<z.ZodObject<{
            user_id: z.ZodString;
            user_role: z.ZodEnum<["admin", "member", "disabled"]>;
            power_user: z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<0>]>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            user_role: "admin" | "member" | "disabled";
            power_user: 0 | 1;
        }, {
            user_id: string;
            user_role: "admin" | "member" | "disabled";
            power_user: 0 | 1;
        }>, "many">;
        allow_joins: z.ZodBoolean;
        font_families: z.ZodString;
        font_size: z.ZodOptional<z.ZodNumber>;
        parsing_formats: z.ZodRecord<z.ZodEnum<["OT", "NT", "LXX"]>, z.ZodRecord<z.ZodString, z.ZodObject<{
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
        publication_configurations: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
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
        }>>>;
        numerals: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        parsing_formats: Partial<Record<"OT" | "NT" | "LXX", Record<string, {
            id: string;
            template: string;
            translations: Record<string, string>;
        }>>>;
        project_id: string;
        project_title: string;
        project_description: string;
        layout_direction: "ltr" | "rtl";
        frequency_thresholds: Record<string, number>;
        bookNames: Record<string, string>;
        canons: ("OT" | "NT" | "LXX")[];
        roles: {
            user_id: string;
            user_role: "admin" | "member" | "disabled";
            power_user: 0 | 1;
        }[];
        allow_joins: boolean;
        font_families: string;
        numerals: string[];
        font_size?: number | undefined;
        publication_configurations?: Record<string, {
            footnoteMarkers: string[];
            polyglossiaOtherLanguage: string;
            chapterHeader: string;
            publication_project_font: string;
            publication_biblical_font: string;
            latex_template: string;
            parsing_formats: Record<string, string>;
            css_template?: string | undefined;
            footnote_style?: "lettered-by-verse" | "numbered-by-page" | undefined;
        }> | undefined;
    }, {
        parsing_formats: Partial<Record<"OT" | "NT" | "LXX", Record<string, {
            id: string;
            template: string;
            translations: Record<string, string>;
        }>>>;
        project_id: string;
        project_title: string;
        project_description: string;
        layout_direction: "ltr" | "rtl";
        frequency_thresholds: Record<string, number>;
        bookNames: Record<string, string>;
        canons: ("OT" | "NT" | "LXX")[];
        roles: {
            user_id: string;
            user_role: "admin" | "member" | "disabled";
            power_user: 0 | 1;
        }[];
        allow_joins: boolean;
        font_families: string;
        numerals: string[];
        font_size?: number | undefined;
        publication_configurations?: Record<string, {
            footnoteMarkers: string[];
            polyglossiaOtherLanguage: string;
            chapterHeader: string;
            publication_project_font: string;
            publication_biblical_font: string;
            latex_template: string;
            parsing_formats: Record<string, string>;
            css_template?: string | undefined;
            footnote_style?: "lettered-by-verse" | "numbered-by-page" | undefined;
        }> | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    user_id: string;
    user_description: string;
    projects: {
        parsing_formats: Partial<Record<"OT" | "NT" | "LXX", Record<string, {
            id: string;
            template: string;
            translations: Record<string, string>;
        }>>>;
        project_id: string;
        project_title: string;
        project_description: string;
        layout_direction: "ltr" | "rtl";
        frequency_thresholds: Record<string, number>;
        bookNames: Record<string, string>;
        canons: ("OT" | "NT" | "LXX")[];
        roles: {
            user_id: string;
            user_role: "admin" | "member" | "disabled";
            power_user: 0 | 1;
        }[];
        allow_joins: boolean;
        font_families: string;
        numerals: string[];
        font_size?: number | undefined;
        publication_configurations?: Record<string, {
            footnoteMarkers: string[];
            polyglossiaOtherLanguage: string;
            chapterHeader: string;
            publication_project_font: string;
            publication_biblical_font: string;
            latex_template: string;
            parsing_formats: Record<string, string>;
            css_template?: string | undefined;
            footnote_style?: "lettered-by-verse" | "numbered-by-page" | undefined;
        }> | undefined;
    }[];
}, {
    user_id: string;
    user_description: string;
    projects: {
        parsing_formats: Partial<Record<"OT" | "NT" | "LXX", Record<string, {
            id: string;
            template: string;
            translations: Record<string, string>;
        }>>>;
        project_id: string;
        project_title: string;
        project_description: string;
        layout_direction: "ltr" | "rtl";
        frequency_thresholds: Record<string, number>;
        bookNames: Record<string, string>;
        canons: ("OT" | "NT" | "LXX")[];
        roles: {
            user_id: string;
            user_role: "admin" | "member" | "disabled";
            power_user: 0 | 1;
        }[];
        allow_joins: boolean;
        font_families: string;
        numerals: string[];
        font_size?: number | undefined;
        publication_configurations?: Record<string, {
            footnoteMarkers: string[];
            polyglossiaOtherLanguage: string;
            chapterHeader: string;
            publication_project_font: string;
            publication_biblical_font: string;
            latex_template: string;
            parsing_formats: Record<string, string>;
            css_template?: string | undefined;
            footnote_style?: "lettered-by-verse" | "numbered-by-page" | undefined;
        }> | undefined;
    }[];
}>;
export type UserProfileRow = z.infer<typeof UserProfileRowSchema>;
