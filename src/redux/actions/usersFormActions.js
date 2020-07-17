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

export const SWITCH_ON_FORM_FETCHING = "SWITCH_ON_FORM_FETCHING";
export function switchOnFormFetching() {
  return {
    type: SWITCH_ON_FORM_FETCHING,
  };
}

export const SWITCH_OFF_FORM_FETCHING = "SWITCH_OFF_FORM_FETCHING";
export function switchOffFormFetching() {
  return {
    type: SWITCH_OFF_FORM_FETCHING,
  };
}