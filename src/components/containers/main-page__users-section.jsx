import React from "react";
import UsersSection from "../users-section";
import { useSelector, useDispatch } from "react-redux";
import getUsers from "../../redux/thunks/usersListThunk";

export default function UsersSectionContainer(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersList.users);

  if (!users || users.length === 0) dispatch(getUsers());

  const isFetching = useSelector((state) => state.usersList.isFetching);

  return <UsersSection {...props} users={users} isFetching={isFetching} />;
}
