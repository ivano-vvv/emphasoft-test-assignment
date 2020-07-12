import React from "react";
import LoginForm from "./login-form";

export default function LoginWindow(props) {
  return (
    <div className={"login-window " + props.className}>
      <h1 className="h1 login-window__heading">Авторизация</h1>
      <LoginForm />
    </div>
  );
}
