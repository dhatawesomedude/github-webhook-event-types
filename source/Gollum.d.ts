import {Repository, User} from './common';

export interface GollumPage {
    page_name: string;
    title: string;
    summary?: any;
    action: string;
    sha: string;
    html_url: string;
}

export interface GollumOwner extends User {
}

export interface GollumRepository extends Repository {
    owner: GollumOwner;
    description: string;
}

export interface GollumSender extends User {
}

export interface Gollum {
    pages: GollumPage[];
    repository: GollumRepository;
    sender: GollumSender;
}
