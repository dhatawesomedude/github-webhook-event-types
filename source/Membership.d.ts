import {Action, Organization, User} from './common';

export interface MembershipMember extends User {
}

export interface MembershipSender extends User {
}

export interface MembershipTeam {
  name: string;
  id: number;
  slug: string;
  permission: string;
  url: string;
  members_url: string;
  repositories_url: string;
}

export interface MembershipOrganization extends Organization {
}

export interface Membership extends Action {
  scope: string;
  member: MembershipMember;
  sender: MembershipSender;
  team: MembershipTeam;
  organization: MembershipOrganization;
}
