import { ProjectConfiguration, ProjectId } from "./ProjectConfiguration";
import { BookIdentifier } from "./BookIdentifier";
import { PublicationConfiguration } from "./PublicationConfiguration";
export interface PublicationRequest {
    books: BookIdentifier[];
    project: ProjectConfiguration;
    configuration: PublicationConfiguration;
    nopdf: boolean;
}
export interface HollowPublicationRequest {
    books: string[];
    project_id: ProjectId;
    publication_configuration_id: string;
    nopdf: boolean;
}
