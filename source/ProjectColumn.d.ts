import {Action, Organization, Repository, User} from './common';

export interface ProjectColumnProject_column {
    url: string;
    project_url: string;
    cards_url: string;
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface ProjectColumnOwner extends User {
}

export interface ProjectColumnRepository extends Repository {
    owner: ProjectColumnOwner;
    description: string;
}

export interface ProjectColumnOrganization extends Organization {
}

export interface ProjectColumnSender extends User {
}

export interface ProjectColumn extends Action {
    project_column: ProjectColumnProject_column;
    repository: ProjectColumnRepository;
    organization: ProjectColumnOrganization;
    sender: ProjectColumnSender;
}
