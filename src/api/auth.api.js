import { API, URL_API } from "./const.api";


export const AuthAPI = {
  login: (data) => API.post(`${URL_API}/auth/signin`, data),
  register: (data) => API.post(`${URL_API}/auth/signup`, data),
  getUser: (id) => API.get(`${URL_API}/get-user/${id}`)
}