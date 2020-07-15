import {
  TURN_ON_LOADER,
  TURN_OFF_LOADER,
  SET_USERS,
  NOTIFY_OF_ERROR,
} from "../actions/usersListActions";

let initialState = {
  users: [],
  isFetching: false,
  errorMessage: "",
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
        errorMessage: "",
      };
    case NOTIFY_OF_ERROR:
      return {
        ...state,
        errorMessage: "Что-то пошло не так. Повторите попытку позднее",
      };
    default:
      return state;
  }
}
