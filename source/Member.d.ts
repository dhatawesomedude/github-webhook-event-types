import {Action, Repository, User} from './common';

export interface MemberMember extends User {
}

export interface MemberOwner extends User {
}

export interface MemberRepository extends Repository {
  owner: MemberOwner;
  description: string;
}

export interface MemberSender extends User {
}

export interface Member extends Action {
  member: MemberMember;
  repository: MemberRepository;
  sender: MemberSender;
}
