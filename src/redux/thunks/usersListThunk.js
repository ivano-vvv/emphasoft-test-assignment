import {
  turnOnLoader,
  setUsers,
  turnOffLoader,
  notifyOfError,
} from "../actions/usersListActions";
import { getUsersAPI, getUserDataAPI } from "../../dataAccess/usersAPI";
import { logOut } from "../actions/authActions";
import {
  switchEditForm,
  switchOnFormFetching,
  switchOffFormFetching,
} from "../actions/usersFormActions";

export default function getUsers() {
  return (dispatch) => {
    dispatch(turnOnLoader());
    getUsersAPI()
      .then((response) => {
        dispatch(setUsers(response.data));
        dispatch(turnOffLoader());
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          if (error.response.status === 401) {
            dispatch(logOut());
          } else {
            dispatch(notifyOfError());
          }
        }
        dispatch(turnOffLoader());
      });
  };
}

export function getUserForEdit(id) {
  return (dispatch) => {
    dispatch(switchOnFormFetching());
    getUserDataAPI(id)
      .then((response) => {
        console.log(response.data);
        dispatch(switchEditForm(response.data));
        dispatch(switchOffFormFetching());
      })
      .catch((err) => {
        window.alert(err);
        dispatch(switchOffFormFetching());
      });
  };
}
