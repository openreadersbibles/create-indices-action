import { z } from "zod";
import { AnnotationJsonObjectSchema } from "./AnnotationJsonObject";
export const GlossRowSchema = z.object({
    annotationObject: AnnotationJsonObjectSchema,
    gloss_id: z.number(),
    votes: z.array(z.string()),
});
