import {Action, Organization, User} from './common';

export interface TeamTeam {
    name: string;
    id: number;
    slug: string;
    description: string;
    privacy: string;
    url: string;
    members_url: string;
    repositories_url: string;
    permission: string;
}

export interface TeamOrganization extends Organization {
}

export interface TeamSender extends User {
}

export interface Team extends Action {
    team: TeamTeam;
    organization: TeamOrganization;
    sender: TeamSender;
}
