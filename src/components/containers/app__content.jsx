import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginWindow from "../login-window";
import { checkToken } from "../../redux/actions/authActions";

export default function Content(props) {
  const dispatch = useDispatch();
  dispatch(checkToken());

  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <LoginWindow className="app__login-window" />;
  }

  return <div>Auth is ok</div>;
}
