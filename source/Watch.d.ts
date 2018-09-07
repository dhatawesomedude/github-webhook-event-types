import {Action, Repository, User} from './common';

export interface WatchOwner extends User {
}

export interface WatchRepository extends Repository {
  owner: WatchOwner;
  description: string;
}

export interface WatchSender extends User {
}

export interface Watch extends Action {
  repository: WatchRepository;
  sender: WatchSender;
}
