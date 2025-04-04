import { CurrentPosition } from "./CurrentPosition";
import { ProjectConfiguration, ProjectId } from "./ProjectConfiguration";
export interface UserProfileRow {
    user_id: string;
    user_description: string;
    projects: string;
}
export interface UserUpdateObject {
    user_id: string;
    user_description: string;
}
export type UserId = string;
export declare class UserProfile {
    private _user_id;
    private _user_description;
    private _projects;
    constructor(row: UserProfileRow);
    get user_id(): UserId;
    get description(): string;
    get projects(): IterableIterator<ProjectConfiguration>;
    get numberOfProjects(): number;
    project(pid: ProjectId): ProjectConfiguration | undefined;
    projectFromPosition(position: CurrentPosition | undefined): ProjectConfiguration | undefined;
    replaceProject(project: ProjectConfiguration): void;
    static fromUserId(user_id: string): UserProfile;
    toObject(): UserUpdateObject;
}
