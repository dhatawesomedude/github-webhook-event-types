import {Action, Repository, User} from './common';

export interface ReleaseAuthor extends User {
}

export interface ReleaseRelease {
    url: string;
    assets_url: string;
    upload_url: string;
    html_url: string;
    id: number;
    tag_name?: string;
    target_commitish: string;
    name?: any;
    draft: boolean;
    author: ReleaseAuthor;
    prerelease: boolean;
    created_at: string;
    published_at: string;
    assets: any[];
    tarball_url: string;
    zipball_url: string;
    body?: any;
}

export interface ReleaseOwner extends User {
}

export interface ReleaseRepository extends Repository {
    owner: ReleaseOwner;
    description: string;
}

export interface ReleaseSender extends User {
}

export interface Release extends Action {
    release: ReleaseRelease;
    repository: ReleaseRepository;
    sender: ReleaseSender;
}
