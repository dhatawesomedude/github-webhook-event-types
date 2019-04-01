export interface Action {
    action: string;
}

export interface Comment {
    url: string;
    html_url: string;
    id: number;
    user: User;
    position?: any;
    line?: any;
    path?: any;
    commit_id: string;
    created_at: string;
    updated_at: string;
    body: string;
}

export interface Deployment {
    url: string;
    id: number;
    sha: string;
    ref: string;
    task: string;
    payload: Payload;
    environment: string;
    description?: any;
    creator: User;
    created_at: string;
    updated_at: string;
    statuses_url: string;
    repository_url: string;
}
export type installationRepositorySelection = 'all' | 'selected'

export interface Installation {
    id: number;
    account: User;
    repository_selection: installationRepositorySelection;
    access_tokens_url: string;
    repositories_url: string;
}

export interface Issue {
    url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    number: number;
    title: string;
    user: User;
    labels: Label[];
    state: string;
    locked: boolean;
    assignee?: User;
    milestone?: any;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at?: any;
    body: string;
}

export interface Label {
    url: string;
    name: string;
    color: string;
}

export interface Milestone {
    url: string;
    html_url: string;
    labels_url: string;
    id: number;
    number: number;
    title: string;
    description?: any;
    creator: User;
    open_issues: number;
    closed_issues: number;
    state: string;
    created_at: string;
    updated_at: string;
    due_on?: any;
    closed_at?: any;
}

export interface Organization {
    login: string;
    id: number;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: string;
}

export interface Payload {

}

export interface Project {
    owner_url: string;
    url: string;
    columns_url: string;
    id: number;
    name: string;
    body: string;
    number: number;
    state: string;
    creator: User;
    created_at: string;
    updated_at: string;
}

export interface Repository {
    id: number;
    name: string;
    full_name: string;
    owner: User;
    private: boolean;
    html_url: string;
    description?: any;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage?: any;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language?: any;
    has_issues: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url?: any;
    open_issues_count: number;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}

export interface User {
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
