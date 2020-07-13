export const SHOW_ERROR = "SHOW_ERROR";
export function showLoginError() {
  return {
    type: SHOW_ERROR,
  };
}

export const HIDE_ERROR = "HIDE_ERROR";
export function hideLoginError() {
  return {
    type: HIDE_ERROR,
  };
}
