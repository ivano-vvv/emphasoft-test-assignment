import {
  SWITCH_ADD_FORM,
  SWITCH_EDIT_FORM,
  SWITCH_ON_FORM_FETCHING,
  SWITCH_OFF_FORM_FETCHING,
} from "../actions/usersFormActions";

let initialState = {
  isEditMode: false,
  initialValues: {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    is_active: true,
  },
  isFetching: false,
  EditUserId: 0,
};

export function usersFormReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_ADD_FORM:
      return {
        isEditMode: false,
        initialValues: {
          username: "",
          first_name: "",
          last_name: "",
          password: "",
          is_active: true,
        },
        isFetching: false,
        EditUserId: 0,
      };
    case SWITCH_EDIT_FORM:
      return {
        ...state,
        initialValues: {
          ...action.values,
        },
        isEditMode: true,
        EditUserId: action.values.id,
      };
    case SWITCH_ON_FORM_FETCHING: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case SWITCH_OFF_FORM_FETCHING: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
}
