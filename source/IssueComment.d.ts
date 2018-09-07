import {Action, Comment, Issue, Repository, User} from './common';

export interface IssueCommentIssueCommentUser extends User {
}

export interface IssueCommentLabel {
    url: string;
    name: string;
    color: string;
}

export interface IssueCommentIssue extends Issue {
    user: IssueCommentIssueCommentUser;
    labels: IssueCommentLabel[];
}

export interface IssueCommentIssueCommentUser extends User {
}

export interface IssueCommentComment extends Comment {
    user: IssueCommentIssueCommentUser;
}

export interface IssueCommentOwner extends User {
}

export interface IssueCommentRepository extends Repository {
    owner: IssueCommentOwner;
    description: string;
}

export interface IssueCommentSender extends User {
}

export interface IssueComment extends Action {
    issue: IssueCommentIssue;
    comment: IssueCommentComment;
    repository: IssueCommentRepository;
    sender: IssueCommentSender;
}
