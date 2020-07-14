import {
  TURN_ON_LOADER,
  TURN_OFF_LOADER,
  SET_USERS,
} from "../actions/usersListActions";

let initialState = {
  users: [],
  isFetching: false,
};

export default function usersListReducer(state = initialState, action) {
  switch (action.type) {
    case TURN_ON_LOADER:
      return {
        ...state,
        isFetching: true,
      };
    case TURN_OFF_LOADER:
      return {
        ...state,
        isFetching: false,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
}
