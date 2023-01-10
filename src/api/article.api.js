import { API, URL_API } from "./const.api";

export const ArticleAPI = {
  get: () => API.get(`${URL_API}/get-articles`)
}