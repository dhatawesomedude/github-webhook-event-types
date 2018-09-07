import {Repository, User} from './common';

export interface PublicOwner extends User {
}

export interface PublicRepository extends Repository {
  owner: PublicOwner;
  description: string;
}

export interface PublicSender extends User {
}

export interface Public {
  repository: PublicRepository;
  sender: PublicSender;
}
