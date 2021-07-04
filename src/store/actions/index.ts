import { Dispatch } from 'redux';
import GithubClient from '../../clients/GithubClient';
import { Action } from '../types';
import { User, Repository } from '../../clients/types';
import { SET_INITIAL_STATE, SET_USERS, SET_REPOSITORIES } from './constants';

export function setInitialState(): Action {
  return {
    type: SET_INITIAL_STATE,
  };
}

export function setUsers(users: User[]): Action {
  return {
    type: SET_USERS,
    payload: users,
  };
}

export function setRepositories(repositories: Repository[]): Action {
  return {
    type: SET_REPOSITORIES,
    payload: repositories,
  };
}

export function fetchUsersAndRepositories(username: string) {
  return async (dispatch: Dispatch) => {
    const githubClient = new GithubClient();

    const users = await githubClient.getUsers(username);

    const repositories = await Promise.all(
      users.map(({ login }: { login: string }) => githubClient.getUserRepositories(login)),
    );

    dispatch(setUsers(users));
    dispatch(setRepositories(repositories.flat()));
  };
}
