import {Action, Label as CommonLabel, Organization, Repository, User} from './common';

export interface LabelLabel extends CommonLabel {
}

export interface LabelOwner extends User {
}

export interface LabelRepository extends Repository {
    owner: LabelOwner;
    deployments_url: string;
}

export interface LabelOrganization extends Organization {
}

export interface LabelSender extends User {
}

export interface Label extends Action {
    label: LabelLabel;
    repository: LabelRepository;
    organization: LabelOrganization;
    sender: LabelSender;
}
