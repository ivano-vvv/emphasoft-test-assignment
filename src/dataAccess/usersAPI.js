import * as axios from "axios";

const usersAPI = {
  getUsers() {
    return this._API().get("/");
  },
  createUser(values) {
    return this._API().post("/", {
      username: values.username,
      first_name: values.first_name,
      last_name: values.last_name,
      password: values.password,
      is_active: values.is_active || false,
    });
  },
  updateUserData(values) {
    return this._API().put(`/${values.id}/`, {
      username: values.username,
      first_name: values.first_name,
      last_name: values.last_name,
      password: values.password,
      is_active: values.is_active || false,
    });
  },
  getUserData(id) {
    return this._API().get(`/${id}`);
  },

  _token: sessionStorage.getItem("token"),
  _API() {
    return axios.create({
      baseURL: "https://emphasoft-test-assignment.herokuapp.com/api/v1/users/",
      timeout: 10000,
      headers: {
        Authorization: `Token ${this._token}`,
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

export function updateUserDataAPI(id, values) {
  return usersAPI.updateUserData(id, values);
}

export function getUserDataAPI(id) {
  return usersAPI.getUserData(id);
}
