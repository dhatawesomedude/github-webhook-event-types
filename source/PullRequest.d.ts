import {Action, Repository, User} from './common';

export interface PullRequestPullRequestPullRequestUser extends User {
}

export interface PullRequestPullRequestPullRequestOwner extends User {
}

export interface PullRequestPullRequestRepo extends Repository {
  owner: PullRequestPullRequestPullRequestOwner;
  description: string;
}

export interface PullRequestHead {
  label: string;
  ref: string;
  sha: string;
  user: PullRequestPullRequestPullRequestUser;
  repo: PullRequestPullRequestRepo;
}

export interface PullRequestPullRequestPullRequestUser extends User {
}

export interface PullRequestBase {
  label: string;
  ref: string;
  sha: string;
  user: PullRequestPullRequestPullRequestUser;
  repo: PullRequestPullRequestRepo;
}

export interface PullRequestSelf {
  href: string;
}

export interface PullRequestHtml {
  href: string;
}

export interface PullRequestIssue {
  href: string;
}

export interface PullRequestComment {
  href: string;
}

export interface PullRequestPullRequestReview_comment {
  href: string;
}

export interface PullRequestPullRequestReview_comment {
  href: string;
}

export interface PullRequestCommit {
  href: string;
}

export interface PullRequestStatuse {
  href: string;
}

export interface PullRequest_link {
  self: PullRequestSelf;
  html: PullRequestHtml;
  issue: PullRequestIssue;
  comments: PullRequestComment;
  review_comments: PullRequestPullRequestReview_comment;
  review_comment: PullRequestPullRequestReview_comment;
  commits: PullRequestCommit;
  statuses: PullRequestStatuse;
}

export interface PullRequestPull_request {
  url: string;
  id: number;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: PullRequestPullRequestPullRequestUser;
  body: string;
  created_at: string;
  updated_at: string;
  closed_at?: any;
  merged_at?: any;
  merge_commit_sha?: any;
  assignee?: any;
  milestone?: any;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: PullRequestHead;
  base: PullRequestBase;
  _links: PullRequest_link;
  merged: boolean;
  mergeable?: any;
  mergeable_state: string;
  merged_by?: any;
  comments: number;
  review_comments: number;
  commits: number;
  additions: number;
  deletions: number;
  changed_files: number;
}

export interface PullRequestRepository {
  owner: PullRequestPullRequestPullRequestOwner;
  description: string;
}

export interface PullRequestSender extends User {
}

export interface PullRequestInstallation {
  id: number;
}

export interface PullRequest extends Action {
  number: number;
  pull_request: PullRequestPull_request;
  repository: PullRequestRepository;
  sender: PullRequestSender;
  installation: PullRequestInstallation;
}
