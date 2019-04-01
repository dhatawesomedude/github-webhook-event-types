import {Action, Installation, User} from './common';

export interface basicInstallationRepository {
  id: number
  name: string
  full_name: string
  private: boolean
}

export interface InstallationRepositoriesAccount extends User {
}

export interface InstallationRepositoriesInstallation extends Installation {
  account: InstallationRepositoriesAccount;
  html_url: string;
}

export interface InstallationRepositoriesRepositories_removed extends basicInstallationRepository {

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
