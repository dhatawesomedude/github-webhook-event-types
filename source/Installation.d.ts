import {Installation, User} from './common';
import { basicInstallationRepository } from './InstallationRepositories'

type installationAction = 'created' | 'deleted' | 'new_permissions_accepted'

export interface InstallationAccount extends User {
}

export interface InstallationInstallation extends Installation {
  account: InstallationAccount;
}

export interface InstallationSender extends User {
}

export interface Installation {
  action: installationAction;
  installation: InstallationInstallation;
  sender: InstallationSender;
  repositories: basicInstallationRepository [];
}
