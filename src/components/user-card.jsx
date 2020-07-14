import React from "react";
import "./user-card.css";
import StatusIcon from "./svg-components/status-icon";
import SuperIcon from "./svg-components/super-icon";

export default function UserCard(props) {
  return (
    <div className={"user-card " + props.className}>
      <div className="user-card__status-bar">
        <StatusIcon
          className="user-card__status-icon"
          isActive={props.is_active}
        />
        {props.is_superuser && (
          <SuperIcon className="user-card__superuser-icon" />
        )}
        <span className="user-card__edit-label text2">Редактировать</span>
      </div>
      <header className="user-card__header">
        <span className="text2 user-card__id-label">
          id<span className="text2 user-card__id">{"#" + props.id}</span>
        </span>
      </header>
      <div className="user-card__name-block">
        <h3 className="h3 user-card__username">{props.username}</h3>
        <p className="text1 user-card__name">
          {getNameStr(props.first_name, props.last_name)}
        </p>
      </div>
    </div>
  );

  function getNameStr(firstName, lastName) {
    if (!firstName && !lastName) return "";

    let arr = [firstName || "", lastName || ""];
    return `/  ${arr.join(" ")}`;
  }
}
