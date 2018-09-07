import {Action, Organization, Repository, User} from './common';

export interface ProjectCardCreator extends User {
}

export interface ProjectCardProject_card {
  url: string;
  column_url: string;
  column_id: number;
  id: number;
  note?: any;
  creator: ProjectCardCreator;
  created_at: string;
  updated_at: string;
  content_url: string;
}

export interface ProjectCardOwner extends User {
}

export interface ProjectCardRepository extends Repository {
  owner: ProjectCardOwner;
  description: string;
}

export interface ProjectCardOrganization extends Organization {
}

export interface ProjectCardSender extends User {
}

export interface ProjectCard extends Action {
  project_card: ProjectCardProject_card;
  repository: ProjectCardRepository;
  organization: ProjectCardOrganization;
  sender: ProjectCardSender;
}
