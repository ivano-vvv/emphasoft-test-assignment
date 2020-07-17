import React from "react";
import "./form-section.css";
import "./section.css";
import UserFormContainer from "./form-section__user-form";

export default function FormSection(props) {
  return (
    <section className={"form-section " + props.className}>
      <div className="section__header form-section__header">
        {!props.isEditMode && (
          <h2 className="form-section__heading section__heading h2">
            Добавить пользователя
          </h2>
        )}
        {props.isEditMode && (
          <h2 className="form-section__heading section__heading h2">
            Редактировать пользователя
          </h2>
        )}
      </div>
      <div className="section__body form-section__body">
        <UserFormContainer />
      </div>
    </section>
  );
}
