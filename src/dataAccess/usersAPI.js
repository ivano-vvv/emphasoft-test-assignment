import * as axios from "axios";

const usersAPI = (token) =>
  axios.create({
    baseURL: "https://emphasoft-test-assignment.herokuapp.com/api/v1/users/",
    timeout: 10000,
    headers: {
      Authorization: `Token ${token}`,
    },
  });

export function getUsersAPI() {
  let token = sessionStorage.getItem("token");

  return usersAPI(token).get("/");
}
