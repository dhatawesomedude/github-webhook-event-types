import {Repository, User} from './common';

export interface ForkForkOwner extends User {
}

export interface ForkForkee extends Repository {
    owner: ForkForkOwner;
    description: string;
    public: boolean;
}

export interface ForkForkOwner extends User {
}

export interface ForkRepository extends Repository {
    owner: ForkForkOwner;
    description: string;
}

export interface ForkSender extends User {
}

export interface Fork {
    forkee: ForkForkee;
    repository: ForkRepository;
    sender: ForkSender;
}
