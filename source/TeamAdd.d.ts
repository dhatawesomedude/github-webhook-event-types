import {Organization, Repository, User} from './common';

export interface TeamAddTeam {
    name: string;
    id: number;
    slug: string;
    description: string;
    permission: string;
    url: string;
    members_url: string;
    repositories_url: string;
}

export interface TeamAddOwner extends User {
}

export interface TeamAddRepository extends Repository {
    owner: TeamAddOwner;
    description: string;
}

export interface TeamAddOrganization extends Organization {
}

export interface TeamAddSender extends User {
}

export interface TeamAdd {
    team: TeamAddTeam;
    repository: TeamAddRepository;
    organization: TeamAddOrganization;
    sender: TeamAddSender;
}
