import React from "react";
import "./input.css";

export default function Input(props) {
  const errorClass = (error, touched) => {
    return error && touched ? "input__field_error" : "";
  };

  return (
    <div className={"input " + props.className}>
      <input
        {...props.input}
        type={props.type || "text"}
        className={
          "input__field " +
          " " +
          errorClass(props.meta.error, props.meta.touched)
        }
        autoComplete="off"
      />
      {props.meta.touched && (
        <span className="text2 input__error-label">
          {props.meta.error || props.meta.warning}
        </span>
      )}
    </div>
  );
}
