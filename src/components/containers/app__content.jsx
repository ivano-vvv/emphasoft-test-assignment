import React from "react";
import { useSelector } from "react-redux";
import LoginWindow from "../login-window";

export default function Content(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <LoginWindow className='app__login-window' />;
  }

  return <div>Auth is ok</div>;
}
