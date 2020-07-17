import React from "react";
import "./user-form.css";
import { reduxForm, Form, Field } from "redux-form";
import Input from "./common/input";
import required from "../validations/required";
import Button from "./common/button";
import { useDispatch } from "react-redux";
import {
  maxLength150,
  maxLength128,
  maxLength30,
} from "../validations/maxLength";
import {
  usernamePatternValidate,
  passwordPatternValidate,
} from "../validations/patternValidations";
import { minLength8 } from "../validations/minLength";
import { hasCapLetter, hasDigit } from "../validations/passwordValidation";
import { addUser, updateUserData } from "../redux/thunks/userFormThunk";

function UserForm(props) {
  const dispatch = useDispatch();

  function onSubmit(values) {
    if (props.isEditMode) {
      dispatch(updateUserData(values));
    } else {
      dispatch(addUser(values));
    }
  }

  return (
    <Form
      className={"user-form " + props.className}
      onSubmit={props.handleSubmit(onSubmit)}
    >
      <div className="user-form__text-inputs">
        <div className="user-form__input-block">
          <label className="user-form__label text1" htmlFor="username">
            Имя пользователя
          </label>
          <Field
            className="user-form__input"
            name="username"
            component={Input}
            type="text"
            validate={[required, maxLength150, usernamePatternValidate]}
          />
        </div>
        <div className="user-form__input-block">
          <label className="user-form__label text1" htmlFor="username">
            Пароль
          </label>
          <Field
            className="user-form__input"
            name="password"
            component={Input}
            type="password"
            validate={[
              required,
              minLength8,
              hasCapLetter,
              hasDigit,
              maxLength128,
              passwordPatternValidate,
            ]}
          />
        </div>
        <div className="user-form__input-block">
          <label className="user-form__label text1" htmlFor="username">
            Имя
          </label>
          <Field
            className="user-form__input"
            name="first_name"
            component={Input}
            type="text"
            validate={maxLength30}
          />
        </div>
        <div className="user-form__input-block">
          <label className="user-form__label text1" htmlFor="username">
            Фамилия
          </label>
          <Field
            className="user-form__input"
            name="last_name"
            component={Input}
            type="text"
            validate={maxLength150}
          />
        </div>
      </div>
      <div className="user-form__submit-block">
        <div className="user-form__checkbox-block">
          <Field
            className="user-form__checkbox"
            name="is_active"
            component="input"
            type="checkbox"
          />
          <label className="user-form__label text1" htmlFor="username">
            Пользователь активен
          </label>
        </div>
        <div className="user-form__button-block">
          {props.isEditMode && (
            <Button
              onClick={props.handleCancel}
              className="user-form__button_cancel"
              appearance="accent"
            >
              Отменить
            </Button>
          )}
          <Button
            type="submit"
            isFetching={props.submitting}
            disabled={!props.valid}
          >
            {props.isEditMode ? "Сохранить" : "Добавить"}
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default reduxForm({
  form: "user",
})(UserForm);
