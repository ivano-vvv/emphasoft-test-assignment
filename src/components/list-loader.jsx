import React from "react";
import "./list-loader.css";

export default function ListLoader(props) {
  return (
    <div className={"lds-ring " + props.className}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
