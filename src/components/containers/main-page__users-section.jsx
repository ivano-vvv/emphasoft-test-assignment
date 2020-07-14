import React from "react";
import UsersSection from "../users-section";

export default function UsersSectionContainer(props) {
  let users = [];

  return <UsersSection {...props} users={users} />;
}
