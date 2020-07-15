import {
  turnOnLoader,
  setUsers,
  turnOffLoader,
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
        if (error.response) {
          if (error.response.status === 401) {
            dispatch(logOut());
          }
        }
      });
    // f: else 'smth went wrong, try it later'
    // f: turn off the loader
  };
}
