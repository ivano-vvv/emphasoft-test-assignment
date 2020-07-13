import React from "react";
import { reduxForm, Field, Form } from "redux-form";
import "./login-form.css";
import Input from "./common/input";
import Button from "./common/button";
import required from "../validations/required";
import authorizeUser from "../redux/thunks/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { hideLoginError } from "../redux/actions/loginFormActions";

function LoginForm(props) {
  const dispatch = useDispatch();
  const isLoginError = useSelector((state) => state.loginForm.isAuthErrorShown);
  const loginErrorMessage = useSelector((state) => state.loginForm.textError);

  const handleFocus = () => {
    dispatch(hideLoginError());
  };

  const onSubmit = (values) => {
    dispatch(authorizeUser(values.username, values.password));
  };

  return (
    <Form
      className={"login-form " + props.className}
      onSubmit={props.handleSubmit(onSubmit)}
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
            onFocus={handleFocus}
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
            onFocus={handleFocus}
          />
        </div>
      </div>
      {isLoginError && (
        <div className="login-form__error-block">
          <span className="login-form__login-error-label text2">
            {loginErrorMessage}
          </span>
        </div>
      )}
      <Button
        type="submit"
        isFetching={props.submitting}
        disabled={!props.valid}
      >
        Войти
      </Button>
    </Form>
  );
}

export default reduxForm({
  form: "login",
})(LoginForm);
