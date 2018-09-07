import {Action, Installation, User} from './common';

export interface InstallationRepositoriesAccount extends User {
}

export interface InstallationRepositoriesInstallation extends Installation {
  account: InstallationRepositoriesAccount;
  html_url: string;
}

export interface InstallationRepositoriesRepositories_removed {
  id: number;
  name: string;
  full_name: string;
}

export interface InstallationRepositoriesSender extends User {
}

export interface InstallationRepositories extends Action {
  installation: InstallationRepositoriesInstallation;
  repository_selection: string;
  repositories_added: any[];
  repositories_removed: InstallationRepositoriesRepositories_removed[];
  sender: InstallationRepositoriesSender;
}
