import {Issue, Label, Repository, User} from './common';

export interface IssuesUser extends User {
}

export interface IssuesLabel extends Label {
    id: number;
    default: boolean;
}

export interface IssuesIssue extends Issue {
    user: IssuesUser;
    labels: IssuesLabel[];
}

export interface IssuesOwner extends User {
}

export interface IssuesRepository extends Repository {
    owner: IssuesOwner;
    description: string;
}

export interface IssuesSender extends User {
}

export interface Issues {
    action: string;
    issue: IssuesIssue;
    repository: IssuesRepository;
    sender: IssuesSender;
}
