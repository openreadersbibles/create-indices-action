import { z } from "zod";
export declare const UserUpdateObjectSchema: z.ZodObject<{
    user_id: z.ZodString;
    user_description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    user_id: string;
    user_description: string;
}, {
    user_id: string;
    user_description: string;
}>;
export type UserUpdateObject = z.infer<typeof UserUpdateObjectSchema>;
