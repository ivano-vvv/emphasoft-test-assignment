import React from "react";
import FormSection from "../form-section";
import { useSelector } from "react-redux";

export default function FormSectionContainer(props) {
  const isEditMode = useSelector((state) => state.usersForm.isEditMode);

  return <FormSection {...props} isEditMode={isEditMode} />;
}
