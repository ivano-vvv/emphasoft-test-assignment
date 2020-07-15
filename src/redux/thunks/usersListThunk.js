import {
  turnOnLoader,
  setUsers,
  turnOffLoader,
  notifyOfError,
} from "../actions/usersListActions";
import { getUsersAPI } from "../../dataAccess/usersAPI";
import { logOut } from "../actions/authActions";

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
