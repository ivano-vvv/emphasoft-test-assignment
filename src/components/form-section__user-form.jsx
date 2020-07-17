import React from "react";
import UserForm from "./user-form";
import { useSelector, useDispatch } from "react-redux";
import ListLoader from "./list-loader";
import { resetUserForm } from "../redux/thunks/userFormThunk";

export default function UserFormContainer(props) {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.usersForm.isFetching);
  const isEditMode = useSelector((state) => state.usersForm.isEditMode);

  function handleCancel() {
    dispatch(resetUserForm());
  }

  if (isFetching) return <ListLoader {...props} />;

  return <UserForm {...props} isEditMode={isEditMode} handleCancel={handleCancel} />;
}
