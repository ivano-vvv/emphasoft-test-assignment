import React from "react";
import FormSection from "../form-section";
import { useSelector, useDispatch } from "react-redux";
import { initialize } from "redux-form";

export default function FormSectionContainer(props) {
  const dispatch = useDispatch();
  const isEditMode = useSelector((state) => state.usersForm.isEditMode);
  const initialValues = useSelector((state) => state.usersForm.initialValues);

  dispatch(
    initialize("user", initialValues, {
      keepValues: true,
    })
  );

  return (
    <FormSection {...props} isEditMode={isEditMode} />
  );
}
