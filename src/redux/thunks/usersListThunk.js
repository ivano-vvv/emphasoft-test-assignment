import {
  turnOnLoader,
  setUsers,
  turnOffLoader,
} from "../actions/usersListActions";
import { getUsersAPI } from "../../dataAccess/usersAPI";

export default function getUsers() {
  return (dispatch) => {
    dispatch(turnOnLoader());
    getUsersAPI().then((response) => {
      dispatch(setUsers(response.data));
      dispatch(turnOffLoader());
    });
    // f: if auth error turn off isAuth
    // f: else 'smth went wrong, try it later'
    // f: turn off the loader
  };
}
