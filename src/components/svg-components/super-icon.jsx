import React from "react";
import "./super-icon.css";
import Tooltip from "../common/tooltip";

export default function SuperIcon(props) {
  return (
    <span className={"superuser-icon " + props.className}>
      <svg
        className="superuser-icon__svg"
        width="16"
        height="15"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <path
          d="M6.002 5.04264L7.34386 0.912823L8.68572 5.04264C8.79488 5.37859 9.10795 5.60605 9.46119 5.60605H13.8035L10.2905 8.15841C10.0047 8.36604 9.88514 8.73408 9.9943 9.07004L11.3362 13.1998L7.82313 10.6475C7.53735 10.4399 7.15037 10.4399 6.86459 10.6475L3.35156 13.1998L4.69342 9.07004C4.80258 8.73408 4.683 8.36604 4.39721 8.15841L0.884186 5.60605H5.22653C5.57977 5.60605 5.89284 5.37859 6.002 5.04264Z"
          fill="#EDB342"
          stroke="#E1AA40"
        />
      </svg>
      <Tooltip className="superuser-icon__tooltip">
        Имеет права администратора
      </Tooltip>
    </span>
  );
}
