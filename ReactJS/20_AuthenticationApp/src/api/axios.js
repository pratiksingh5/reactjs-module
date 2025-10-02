import axios from "axios";
// import { url } from "../utils/constant";

export const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    // config.headers.Authorization = "token"
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
