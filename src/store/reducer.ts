import { SET_INITIAL_STATE, SET_REPOSITORIES, SET_USERS } from './actions/constants';
import { Action, State } from './types';

export const initialState: State = {
  users: [],
  repositories: [],
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {
        ...initialState,
      };

    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };

    default:
      return state;
  }
};
