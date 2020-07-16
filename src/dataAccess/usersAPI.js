import * as axios from "axios";

const usersAPI = {
  getUsers() {
    return this._API(this._token).get("/");
  },
  createUser(values) {
    return this._API(this._token).post("/", {
      username: values.username,
      first_name: values.first_name,
      last_name: values.last_name,
      password: values.password,
      is_active: values.is_active,
    });
  },

  _token: sessionStorage.getItem("token"),
  _API(token) {
    return axios.create({
      baseURL: "https://emphasoft-test-assignment.herokuapp.com/api/v1/users/",
      timeout: 10000,
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  },
};

export function getUsersAPI() {
  return usersAPI.getUsers();
}

export function createUserAPI(values) {
  return usersAPI.createUser(values);
}
