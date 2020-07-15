import React from "react";
import "./header.css";
import Logo from "./logo";
import LogOutButton from "./log-out-button";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/authActions";

export default function Header(props) {
  const dispatch = useDispatch();

  function onLogOutClick() {
    dispatch(logOut());
  }

  return (
    <header className={"header " + props.className}>
      <div className="header__container container">
        <Logo className="header__logo" />
        <LogOutButton onClick={onLogOutClick} className="header__log-out" />
      </div>
    </header>
  );
}
