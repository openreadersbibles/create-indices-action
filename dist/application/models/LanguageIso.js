import { z } from "zod";
export const LanguageIsoSchema = z.enum(["hbo", "arc", "grc"]);
