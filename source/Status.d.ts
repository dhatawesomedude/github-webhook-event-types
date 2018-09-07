import {Repository, User} from './common';

export interface StatusStatusAuthor {
    name: string;
    email: string;
    date: string;
}

export interface StatusStatusCommitter {
    name: string;
    email: string;
    date: string;
}

export interface StatusTree {
    sha: string;
    url: string;
}

export interface StatusStatusStatusCommit {
    author: StatusStatusAuthor;
    committer: StatusStatusCommitter;
    message: string;
    tree: StatusTree;
    url: string;
    comment_count: number;
}

export interface StatusStatusAuthor extends User {
}

export interface StatusStatusCommitter extends User {
}

export interface StatusStatusStatusCommit {
    sha: string;
    commit: StatusStatusStatusCommit;
    url: string;
    html_url: string;
    comments_url: string;
    author: StatusStatusAuthor;
    committer: StatusStatusCommitter;
    parents: any[];
}

export interface StatusStatusStatusCommit {
    sha: string;
    url: string;
}

export interface StatusBranche {
    name: string;
    commit: StatusStatusStatusCommit;
}

export interface StatusOwner extends User {
}

export interface StatusRepository extends Repository {
    owner: StatusOwner;
    description: string;
}

export interface StatusSender extends User {
}

export interface Status {
    id: number;
    sha: string;
    name: string;
    target_url?: any;
    context: string;
    description?: any;
    state: string;
    commit: StatusStatusStatusCommit;
    branches: StatusBranche[];
    created_at: string;
    updated_at: string;
    repository: StatusRepository;
    sender: StatusSender;
}
