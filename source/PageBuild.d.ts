import {Repository, User} from './common';

export interface PageBuildError {
    message?: any;
}

export interface PageBuildPusher extends User {
}

export interface PageBuildBuild {
    url: string;
    status: string;
    error: PageBuildError;
    pusher: PageBuildPusher;
    commit: string;
    duration: number;
    created_at: string;
    updated_at: string;
}

export interface PageBuildOwner extends User {
}

export interface PageBuildRepository extends Repository {
    owner: PageBuildOwner;
    description: string;
}

export interface PageBuildSender extends User {
}

export interface PageBuild {
    id: number;
    build: PageBuildBuild;
    repository: PageBuildRepository;
    sender: PageBuildSender;
}
