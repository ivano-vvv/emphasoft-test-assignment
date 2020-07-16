import { createUserAPI } from "../../dataAccess/usersAPI";
import getUsers from "./usersListThunk";
import { startSubmit, stopSubmit, reset } from "redux-form";

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
