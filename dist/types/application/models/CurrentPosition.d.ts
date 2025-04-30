import { Canon } from "./Canon.js";
import { CanonData } from "./Canons.js";
import { ProjectConfiguration, ProjectId } from "./ProjectConfiguration.js";
import { VerseReference } from "./VerseReference.js";
type CompositeKey = string;
type CurrentPositionJson = {
    project_id: ProjectId;
    canon: Canon;
    positions: Record<ProjectId, Record<Canon, string>>;
};
export declare class CurrentPosition {
    private _current_project_id;
    private _current_canon;
    private _positions;
    constructor(project_id: ProjectId, canon: Canon, positions?: Map<CompositeKey, VerseReference>);
    copyOf(): CurrentPosition;
    set ref(reference: VerseReference);
    get project_id(): string;
    changeProject(id: ProjectId, c: Canon): void;
    get canonData(): CanonData;
    get canon(): Canon;
    set canon(c: Canon);
    get ref(): VerseReference;
    getReferenceFor(id: ProjectId, c: Canon): VerseReference;
    setCurrentReference(projectID: ProjectId, reference: VerseReference): void;
    private currentKey;
    static getKey(p: ProjectId, c: Canon): CompositeKey;
    static fromJson(json: string): CurrentPosition | undefined;
    toObject(): CurrentPositionJson;
    static createFromProjectList(projects: ProjectConfiguration[]): CurrentPosition | undefined;
}
export {};
