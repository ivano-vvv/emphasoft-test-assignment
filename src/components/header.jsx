import React from "react";
import "./header.css";
import Logo from "./logo";
import LogOutButton from "./log-out-button";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__container container">
        <Logo className="header__logo" />
        <LogOutButton className="header__log-out" />
      </div>
    </header>
  );
}
