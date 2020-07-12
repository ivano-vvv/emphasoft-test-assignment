import React from "react";
import "./input.css";

export default function Input(props) {
  return (
    <input
      {...props}
      type={props.type || "text"}
      className={"input " + props.className}
    />
  );
}
