import React from "react";
import "./status-icon.css";
import Tooltip from "../common/tooltip";

export default function StatusIcon(props) {
  return (
    <span className={"status-icon " + props.className}>
      <svg
        className="status-icon_svg"
        width="12px"
        height="12px"
        overflow="visible"
      >
        <circle
          cx="6"
          cy="6"
          r="6"
          stroke={props.isActive ? "#1A8D37" : "#8A3131"}
          stroke-width="1"
          fill={props.isActive ? "#1FA640" : "#A43D3D"}
        />
      </svg>
      {props.isActive && (
        <Tooltip className="status-icon__tooltip">Активен</Tooltip>
      )}
      {!props.isActive && (
        <Tooltip className="status-icon__tooltip">Неактивен</Tooltip>
      )}
    </span>
  );
}
