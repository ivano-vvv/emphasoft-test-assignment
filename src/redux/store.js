import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

let reducers = combineReducers({
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
