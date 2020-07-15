import { SAVE_TOKEN, CHECK_TOKEN, LOG_OUT } from "../actions/authActions";

let initialState = {
  isAuth: false,
  token: "",
  failedAuth: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_TOKEN:
      if (sessionStorage.getItem("token")) {
        return {
          ...state,
          isAuth: true,
          token: sessionStorage.getItem("token"),
        };
      }
      return state;
    case SAVE_TOKEN:
      sessionStorage.setItem("token", action.token);
      return { ...state, isAuth: true, token: action.token };
    case LOG_OUT:
      sessionStorage.removeItem("token");
      return { ...state, isAuth: false };
    default:
      return state;
  }
}
