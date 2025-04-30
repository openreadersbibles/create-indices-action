import { z } from "zod";
export const UserUpdateObjectSchema = z.object({
    user_id: z.string(),
    user_description: z.string(),
});
