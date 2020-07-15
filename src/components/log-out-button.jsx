import React from "react";
import "./log-out-button.css";

export default function LogOutButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={"log-out-button " + props.className}
    >
      <span className="text1 log-out-button__value">Выйти</span>
      <span>
        <svg
          className="log-out-button__icon"
          viewbox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
              stroke="#0D0D0D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="log-out-button__icon-arrow"
              d="M16 17L21 12L16 7"
              stroke="#0D0D0D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="log-out-button__icon-arrow"
              d="M21 12H9"
              stroke="#0D0D0D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </span>
    </button>
  );
}
