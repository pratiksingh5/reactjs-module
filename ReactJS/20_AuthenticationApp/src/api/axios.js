import axios from "axios";

// import { url } from "../utils/constant";

const getToken = () => {
  const userState = JSON.parse(localStorage.getItem('user'));
  const token = userState.token;
  return token;
}

export const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = getToken();
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
