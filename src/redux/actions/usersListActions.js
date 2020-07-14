export const TURN_ON_LOADER = "TURN_ON_LOADER";
export function turnOnLoader() {
  return {
    type: TURN_ON_LOADER,
  };
}

export const TURN_OFF_LOADER = "TURN_OFF_LOADER";
export function turnOffLoader() {
  return {
    type: TURN_OFF_LOADER,
  };
}

export const SET_USERS = "SET_USERS";
export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}
