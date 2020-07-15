export const SAVE_TOKEN = "SAVE_TOKEN";
export function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token,
  };
}

export const CHECK_TOKEN = "CHECK_TOKEN";
export function checkToken() {
  return {
    type: CHECK_TOKEN,
  };
}

export const LOG_OUT = "LOG_OUT";
export function logOut() {
  return {
    type: LOG_OUT,
  };
}
