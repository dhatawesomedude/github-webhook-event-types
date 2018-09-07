import {Deployment, Payload, Repository, User} from './common';

export interface DeploymentStatusDeploymentStatusCreator extends User {
}

export interface DeploymentStatusDeployment_status {
    url: string;
    id: number;
    state: string;
    creator: DeploymentStatusDeploymentStatusCreator;
    description?: any;
    target_url?: any;
    created_at: string;
    updated_at: string;
    deployment_url: string;
    repository_url: string;
}

export interface DeploymentStatusPayload extends Payload {
}

export interface DeploymentStatusDeploymentStatusCreator extends User {
}

export interface DeploymentStatusDeployment extends Deployment {
    payload: DeploymentStatusPayload;
    creator: DeploymentStatusDeploymentStatusCreator;
}

export interface DeploymentStatusOwner extends User {
}

export interface DeploymentStatusRepository extends Repository {
    owner: DeploymentStatusOwner;
    description: string;
}

export interface DeploymentStatusSender extends User {
}

export interface DeploymentStatus {
    deployment_status: DeploymentStatusDeployment_status;
    deployment: DeploymentStatusDeployment;
    repository: DeploymentStatusRepository;
    sender: DeploymentStatusSender;
}
