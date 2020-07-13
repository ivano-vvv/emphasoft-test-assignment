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
