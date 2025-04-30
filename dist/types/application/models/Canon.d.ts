import { z } from "zod";
export declare const CanonSchema: z.ZodEnum<["OT", "NT", "LXX"]>;
export type Canon = z.infer<typeof CanonSchema>;
