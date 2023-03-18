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

export async function getAllCourses({ page, limit, token }) {
  return await api
    .get(`/api/curses?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function getCourse(id) {
  return await api
    .get(`/api/curses/${id}`)
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function searchCurso({ playlistname, page, limit, token }) {
  return await api
    .get(`/api/curses/search/${playlistname}?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function postNewCurso(token, userData, userId, apiKey) {
  const options = {
    method: "POST",
    url: `${BaseUrl}/api/${userId}/${apiKey}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: `${JSON.stringify(userData)}`,
  };

  return axios.request(options);
}
