import {Action, Organization, User} from './common';

export interface OrgBlockBlocked_user extends User {
}

export interface OrgBlockOrganization extends Organization {
}

export interface OrgBlockSender extends User {
}

export interface OrgBlock extends Action {
  blocked_user: OrgBlockBlocked_user;
  organization: OrgBlockOrganization;
  sender: OrgBlockSender;
}
