import React from "react";
import { useSelector } from "react-redux";
import LoginWindowContainer from "./content__login-page";

export default function Content(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <LoginWindowContainer />;
  }

  return <div>Auth is ok</div>;
}
