import { AnnotationJsonObject } from "./Annotation";
import { GlossLocation } from "./gloss-locations";
import { ProjectConfigurationRow } from "./ProjectConfiguration";
import { Canon } from "./VerseReference";
export interface ServerResponse {
    status: "success" | "authentication_failure" | "internet_failure" | "internal_failure" | "bad_request_failure";
    payload?: any;
}
export declare const InternetFailure: ServerResponse;
export declare const AuthenticationFailure: ServerResponse;
export declare const InternalFailure: ServerResponse;
export declare const BadRequestFailure: ServerResponse;
export interface ProjectPackage {
    project: ProjectConfigurationRow;
    new_project: boolean;
}
export interface UpdateVerseData {
    canon_name: Canon;
    word_gloss_updates: GlossSendObject[];
    phrase_gloss_updates: GlossSendObject[];
}
export interface GlossRow {
    jsonContent: string;
    gloss_id: number;
    votes: number;
}
export interface PhraseGlossRow {
    phrase_gloss_id: number;
    from_word_id: number;
    to_word_id: number;
    markdown: string;
    votes: number;
    myVote: number;
}
export interface GlossSendObject {
    annotationObject: AnnotationJsonObject;
    gloss_id: number;
    myVote: 0 | 1;
    location: GlossLocation;
}
