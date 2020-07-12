import React from "react";
import { reduxForm, Field, Form } from "redux-form";

function LoginForm(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <label htmlFor="username">Имя пользователя</label>
      <Field name="username" component="input" type="text" />
      <label htmlFor="password">Пароль</label>
      <Field name="password" component="input" type="password" />
      <button type="submit">Войти</button>
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
