import { startSubmit, stopSubmit, setSubmitFailed } from "redux-form";
import getAuthTokenAPI from "../../dataAccess/authAPI";
import { saveToken } from "../actions/authActions";
import { showLoginError } from "../actions/loginFormActions";

export default function authorizeUser(username, password) {
  return (dispatch) => {
    dispatch(startSubmit("login"));
    getAuthTokenAPI(username, password)
      .then((response) => {
        dispatch(saveToken(response.data.token));
        dispatch(stopSubmit("login"));
      })
      .catch((error) => {
        dispatch(showLoginError());
        dispatch(stopSubmit("login"));
      });
  };
}
