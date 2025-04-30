import { CurrentPosition } from "./CurrentPosition.js";
import { ProjectConfiguration, ProjectId } from "./ProjectConfiguration.js";
import { UserProfileRow } from "./UserProfileRow.js";
import { UserUpdateObject } from "./UserUpdateObject.js";
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
