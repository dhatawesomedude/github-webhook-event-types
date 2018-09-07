import {Action, Milestone as CommonMilestone, Organization, Repository, User} from './common';

export interface MilestoneCreator extends User {
}

export interface MilestoneMilestone extends CommonMilestone {
  creator: MilestoneCreator;
}

export interface MilestoneOwner extends User {
}

export interface MilestoneRepository extends Repository {
  owner: MilestoneOwner;
  deployments_url: string;
}

export interface MilestoneOrganization extends Organization {
}

export interface MilestoneSender extends User {
}

export interface Milestone extends Action {
  milestone: MilestoneMilestone;
  repository: MilestoneRepository;
  organization: MilestoneOrganization;
  sender: MilestoneSender;
}
