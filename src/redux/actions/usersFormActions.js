export const SWITCH_ADD_FORM = "SWITCH_ADD_FORM";
export function switchAddForm() {
  return {
    type: SWITCH_ADD_FORM,
  };
}

export const SWITCH_EDIT_FORM = "SWITCH_EDIT_FORM";
export function switchEditForm(values) {
  return {
    type: SWITCH_EDIT_FORM,
    values,
  };
}
