import {Action, Organization, Project as CommonProject, Repository, User} from './common';

export interface ProjectCreator extends User {
}

export interface ProjectProject extends CommonProject {
    creator: ProjectCreator;
}

export interface ProjectOwner extends User {
}

export interface ProjectRepository extends Repository {
    owner: ProjectOwner;
    description: string;
}

export interface ProjectOrganization extends Organization {
}

export interface ProjectSender extends User {
}

export interface Project extends Action {
    project: ProjectProject;
    repository: ProjectRepository;
    organization: ProjectOrganization;
    sender: ProjectSender;
}
