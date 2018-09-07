import {Action, Comment, Repository, User} from './common';

export interface CommitCommentUser extends User {
}

export interface CommitCommentComment extends Comment {
  user: CommitCommentUser;
}

export interface CommitCommentOwner extends User {
}

export interface CommitCommentRepository extends Repository {
  owner: CommitCommentOwner;
    description: string;
}

export interface CommitCommentSender extends User {
}

export interface CommitComment extends Action {
  comment: CommitCommentComment;
  repository: CommitCommentRepository;
  sender: CommitCommentSender;
}
