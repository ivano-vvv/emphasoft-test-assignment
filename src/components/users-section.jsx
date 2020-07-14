import React from "react";
import "./users-section.css";
import UserCard from "./user-card";

export default function UsersSection(props) {
  return (
    <section className={"users-section " + props.className}>
      <header className="users-section__header">
        <h2 className="users-section__heading h2">Пользователи</h2>
      </header>
      <div className="users-section__list">
        {props.users.map((u) => {
          return (
            <UserCard
              key={u.id}
              id={u.id}
              username={u.username}
              first_name={u.first_name}
              last_name={u.last_name}
              is_active={u.is_active}
              is_superuser={u.is_superuser}
              className="users-section__user-card"
            />
          );
        })}
      </div>
    </section>
  );
}
