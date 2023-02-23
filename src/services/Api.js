import axios from "axios";

const localhost = "http://localhost:8081";

export const BaseUrl = localhost;
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
  return await api
    .post("/auth/register", data)
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function getAllCourses() {
  return await api
    .get("/api/courses")
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function getCourse(id) {
  return await api
    .get(`/api/courses/${id}`)
    .then((response) => response)
    .catch((error) => console.log(error));
}

