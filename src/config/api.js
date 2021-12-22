import axios from "axios";

export const API = axios.create({
  baseURL: "http://94.74.86.174:8080/",
});

export const setToken = async (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer  ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
