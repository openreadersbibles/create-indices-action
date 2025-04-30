import { z } from "zod";
// Zod schema for Canon
export const CanonSchema = z.enum(["OT", "NT", "LXX"]);
