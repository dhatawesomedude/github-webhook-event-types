import {Repository, User} from './common';

export interface DeleteOwner extends User {
}

export interface DeleteRepository extends Repository {
    owner: DeleteOwner;
    description: string;
}

export interface DeleteSender extends User {
}

export interface Delete {
    ref: string;
    ref_type: string;
    pusher_type: string;
    repository: DeleteRepository;
    sender: DeleteSender;
}
