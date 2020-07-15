import React from "react";
import UsersSection from "../users-section";
import { useSelector, useDispatch } from "react-redux";
import getUsers from "../../redux/thunks/usersListThunk";

export default function UsersSectionContainer(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersList.users);
  const requestError = useSelector((state) => state.usersList.errorMessage);

  if ((!users || users.length === 0) && !requestError) dispatch(getUsers());

  const isFetching = useSelector((state) => state.usersList.isFetching);
  const errorMessage = useSelector((state) => state.usersList.errorMessage);

  return (
    <UsersSection
      {...props}
      users={users}
      isFetching={isFetching}
      errorMessage={errorMessage}
    />
  );
}
