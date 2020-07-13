import * as axios from "axios";

export default function getAuthTokenAPI(username, password) {
  return axios.post(
    "https://emphasoft-test-assignment.herokuapp.com/api-token-auth/",
    {
      username,
      password,
    }
  );
}
