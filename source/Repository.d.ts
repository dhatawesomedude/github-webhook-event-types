import {Action, Organization, Repository as CommonRepository, User} from './common';

export interface RepositoryOwner extends User {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface RepositoryRepository extends CommonRepository {
  owner: RepositoryOwner;
  description: string;
}

export interface RepositoryOrganization extends Organization {
}

export interface RepositorySender extends User {
}

export interface Repository extends Action {
  repository: RepositoryRepository;
  organization: RepositoryOrganization;
  sender: RepositorySender;
}
