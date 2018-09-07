import {Action, Repository, User} from './common';

export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser extends User {
}

export interface PullRequestReviewCommentPullRequestReviewCommentSelf {
    href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentHtml {
    href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentPull_request {
    href: string;
}

export interface PullRequestReviewCommentPullRequestReviewComment_link {
    self: PullRequestReviewCommentPullRequestReviewCommentSelf;
    html: PullRequestReviewCommentPullRequestReviewCommentHtml;
    pull_request: PullRequestReviewCommentPullRequestReviewCommentPull_request;
}

export interface PullRequestReviewCommentPullRequestReviewCommentComment {
    url: string;
    id: number;
    diff_hunk: string;
    path: string;
    position: number;
    original_position: number;
    commit_id: string;
    original_commit_id: string;
    user: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser;
    body: string;
    created_at: string;
    updated_at: string;
    html_url: string;
    pull_request_url: string;
    _links: PullRequestReviewCommentPullRequestReviewComment_link;
}

export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner extends User {
}

export interface PullRequestReviewCommentPullRequestReviewCommentRepo extends Repository {
    owner: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner;
    description: string;
}

export interface PullRequestReviewCommentHead {
    label: string;
    ref: string;
    sha: string;
    user: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser;
    repo: PullRequestReviewCommentPullRequestReviewCommentRepo;
}

export interface PullRequestReviewCommentBase {
    label: string;
    ref: string;
    sha: string;
    user: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser;
    repo: PullRequestReviewCommentPullRequestReviewCommentRepo;
}

export interface PullRequestReviewCommentPullRequestReviewCommentSelf {
    href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentHtml {
    href: string;
}

export interface PullRequestReviewCommentIssue {
    href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentComment {
    href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentReview_comment {
    href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentReview_comment {
    href: string;
}

export interface PullRequestReviewCommentCommit {
    href: string;
}

export interface PullRequestReviewCommentStatuse {
    href: string;
}

export interface PullRequestReviewCommentPullRequestReviewComment_link {
    self: PullRequestReviewCommentPullRequestReviewCommentSelf;
    html: PullRequestReviewCommentPullRequestReviewCommentHtml;
    issue: PullRequestReviewCommentIssue;
    comments: PullRequestReviewCommentPullRequestReviewCommentComment;
    review_comments: PullRequestReviewCommentPullRequestReviewCommentReview_comment;
    review_comment: PullRequestReviewCommentPullRequestReviewCommentReview_comment;
    commits: PullRequestReviewCommentCommit;
    statuses: PullRequestReviewCommentStatuse;
}

export interface PullRequestReviewCommentPullRequestReviewCommentPull_request {
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
    user: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser;
    body: string;
    created_at: string;
    updated_at: string;
    closed_at?: any;
    merged_at?: any;
    merge_commit_sha: string;
    assignee?: any;
    milestone?: any;
    commits_url: string;
    review_comments_url: string;
    review_comment_url: string;
    comments_url: string;
    statuses_url: string;
    head: PullRequestReviewCommentHead;
    base: PullRequestReviewCommentBase;
    _links: PullRequestReviewCommentPullRequestReviewComment_link;
}

export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface PullRequestReviewCommentRepository extends Repository {
    owner: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner;
    description: string;
}

export interface PullRequestReviewCommentSender extends User {
}

export interface PullRequestReviewComment extends Action {
    action: string;
    comment: PullRequestReviewCommentPullRequestReviewCommentComment;
    pull_request: PullRequestReviewCommentPullRequestReviewCommentPull_request;
    repository: PullRequestReviewCommentRepository;
    sender: PullRequestReviewCommentSender;
}
