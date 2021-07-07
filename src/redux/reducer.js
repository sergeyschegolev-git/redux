import { users } from '../data';
import { ADD_USER } from './actionTypes';

const initialState = {
  users
}

export const usersReducer = (state = initialState, action) => {
  if (action.type === ADD_USER) {
    return {
      users: [
        ...state.users,
        action.payload.user,
      ]
    }
  }

  return state;
}
