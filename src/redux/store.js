import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { reducer as formReducer } from "redux-form";
import loginFormReducer from "./reducers/loginFormReducer";
import usersListReducer from "./reducers/usersReducer";

let reducers = combineReducers({
  auth: authReducer,
  loginForm: loginFormReducer,
  usersList: usersListReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
