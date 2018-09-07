import {Installation, User} from './common';

export interface InstallationAccount extends User {
}

export interface InstallationInstallation extends Installation {
  account: InstallationAccount;
}

export interface InstallationSender extends User {
}

export interface Installation {
  action: string;
  installation: InstallationInstallation;
  sender: InstallationSender;
}
