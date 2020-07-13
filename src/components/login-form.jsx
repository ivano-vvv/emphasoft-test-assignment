import React from "react";
import { reduxForm, Field, Form } from "redux-form";
import "./login-form.css";
import Input from "./common/input";
import Button from "./common/button";
import required from "../validations/required";

function LoginForm(props) {
  return (
    <Form
      className={"login-form " + props.className}
      onSubmit={props.handleSubmit}
    >
      <div className="login-form__body">
        <div className="login-form__input-block">
          <label className="login-form__label text2" htmlFor="username">
            Имя пользователя
          </label>
          <Field
            className="login-form__input"
            name="username"
            component={Input}
            type="text"
            validate={required}
          />
        </div>
        <div className="login-form__input-block">
          <label className="login-form__label text2" htmlFor="password">
            Пароль
          </label>
          <Field
            className="login-form__input"
            name="password"
            component={Input}
            type="password"
            validate={required}
          />
        </div>
      </div>
      <Button type="submit" isFetching={false} disabled={!props.valid}>
        Войти
      </Button>
    </Form>
  );
}

const onSubmit = (values) => {
  console.log(values);
};

export default reduxForm({
  form: "login",
  onSubmit,
})(LoginForm);
