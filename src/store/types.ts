import { Repository, User } from '../clients/types';

export type Action = {
  type: string;
  payload?: any;
}

export type State = {
  users: User[],
  repositories: Repository[],
}
