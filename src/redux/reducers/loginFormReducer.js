import { SHOW_ERROR, HIDE_ERROR } from "../actions/loginFormActions";

let initialState = {
  isAuthErrorShown: false,
  textError: "Неверный логин и/или пароль",
};

export default function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR:
      return { ...state, isAuthErrorShown: true };
    case HIDE_ERROR:
      return { ...state, isAuthErrorShown: false };
    default:
      return state;
  }
}
