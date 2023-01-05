import axios from "axios";

const localhost = "http://localhost:8081";

const BaseUrl = localhost;
const api = axios.create({
  baseURL: BaseUrl,
});

export async function postLogin(data) {
  return api
    .post("/auth/login", data)
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function postRegister(data) {
  return api
    .post("/auth/register", data)
    .then((response) => response)
    .catch((error) => console.log(error));
}
