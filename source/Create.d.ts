import {Repository, User} from './common';

export interface CreateOwner extends User {
}

export interface CreateRepository extends Repository {
    owner: CreateOwner;
    description: string;
}

export interface CreateSender extends User {
}

export interface Create {
    ref: string;
    ref_type: string;
    master_branch: string;
    description: string;
    pusher_type: string;
    repository: CreateRepository;
    sender: CreateSender;
}
