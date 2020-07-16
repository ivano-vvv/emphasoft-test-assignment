import React from "react";
import "./form-section.css";

export default function FormSection(props) {
  return (
    <section className={"form-section " + props.className}>
      {!props.isEditMode && (
        <h2 className="form-section__heading h2">Добавить пользователя</h2>
      )}
      {props.isEditMode && (
        <h2 className="form-section__heading h2">Редактировать пользователя</h2>
      )}
    </section>
  );
}
