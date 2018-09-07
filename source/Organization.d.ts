import {Action, Organization as CommonOrganization, User} from './common';

export interface OrganizationInvitation {
    id: number;
    login: string;
    email?: any;
    role: string;
}

export interface OrganizationUser extends User {
}

export interface OrganizationMembership {
    url: string;
    state: string;
    role: string;
    organization_url: string;
    user: OrganizationUser;
}

export interface OrganizationOrganization extends CommonOrganization {
}

export interface OrganizationSender extends User {
}

export interface Organization extends Action {
    invitation: OrganizationInvitation;
    membership: OrganizationMembership;
    organization: OrganizationOrganization;
    sender: OrganizationSender;
}
