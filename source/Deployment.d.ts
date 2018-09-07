import {User, Deployment, Repository} from './common';

export interface DeploymentPayload {
}

export interface DeploymentCreator extends User {
}

export interface DeploymentDeployment extends Deployment {
    payload: DeploymentPayload;
    creator: DeploymentCreator;
}

export interface DeploymentOwner extends User {
}

export interface DeploymentRepository extends Repository {
    owner: DeploymentOwner;
    description: string;
}

export interface DeploymentSender extends User {
}

export interface Deployment {
    deployment: DeploymentDeployment;
    repository: DeploymentRepository;
    sender: DeploymentSender;
}
