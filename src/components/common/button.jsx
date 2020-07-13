import React from "react";
import "./button.css";
import Loader from "./loader";

export default function Button(props) {
  if (props.isFetching)
    return (
      <button {...props} className={"button button_fetching " + props.className}>
        <Loader className="button__loader" />
      </button>
    );

  return (
    <button {...props} className={"button " + props.className}>
      {props.children}
    </button>
  );
}
