import { createUserAPI, updateUserDataAPI } from "../../dataAccess/usersAPI";
import getUsers from "./usersListThunk";
import { startSubmit, stopSubmit, reset, clearFields, initialize } from "redux-form";
import {
  switchAddForm,
  switchOnFormFetching,
  switchOffFormFetching,
} from "../actions/usersFormActions";

export function addUser(values) {
  return (dispatch) => {
    dispatch(startSubmit("user"));
    createUserAPI(values)
      .then(() => {
        dispatch(stopSubmit("user"));
        dispatch(reset("user"));
        dispatch(getUsers());
      })
      .catch((err) => {
        window.alert(err);
        dispatch(stopSubmit("user"));
      });
  };
}

export function updateUserData(id, values) {
  return (dispatch) => {
    dispatch(startSubmit("user"));
    updateUserDataAPI(id, values)
      .then(() => {
        dispatch(stopSubmit("user"));
        dispatch(reset("user"));
        dispatch(getUsers());
      })
      .catch((err) => {
        window.alert(err);
        dispatch(stopSubmit("user"));
        dispatch(switchOffFormFetching());
      });
  };
}

export function resetUserForm() {
  return (dispatch) => {
    dispatch(switchAddForm());
    dispatch(switchOnFormFetching());
    dispatch(initialize("user"));
    dispatch(switchOffFormFetching());
  };
}
