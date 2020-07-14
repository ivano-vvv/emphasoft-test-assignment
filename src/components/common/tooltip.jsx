import React from "react";
import "./tooltip.css";

export default function Tooltip(props) {
  return (
    <div className={"tooltip " + props.className}>
      <span className="tooltip__note text2">{props.children}</span>
    </div>
  );
}
