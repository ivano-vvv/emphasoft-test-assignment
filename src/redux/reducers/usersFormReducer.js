import { SWITCH_ADD_FORM, SWITCH_EDIT_FORM } from "../actions/usersFormActions";

let initialState = {
  isEditMode: false,
  initialValues: {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    is_active: true,
  },
};

export function usersFormReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_ADD_FORM:
      return initialState;
    case SWITCH_EDIT_FORM:
      return {
        ...state,
        initialValues: {
          ...action.values,
        },
      };
    default:
      return state;
  }
}
