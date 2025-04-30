import { ProjectIdSchema } from "./ProjectConfiguration.js";
import { BookIdentifierJsonSchema } from "./BookIdentifier.js";
import { z } from "zod";
export const HollowPublicationRequestSchema = z.object({
    books: z.array(BookIdentifierJsonSchema),
    project_id: ProjectIdSchema,
    publication_configuration_id: z.string(),
    nopdf: z.boolean(),
});
/*
/// Sample request:
const req: HollowPublicationRequest = {
    "books": [
        {
            "book": "1JN",
            "canon": "NT"
        }
    ],
    "project_id": "english-contextual",
    "publication_configuration_id": "default",
    "nopdf": false
};
*/ 
