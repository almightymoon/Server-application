import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("user").token
    )}`;
  }

  return req;
});

export const signIn = (data) => API.post("/users/signin", data);
export const signInGoogle = (accessToken) =>
  API.post("/users/signin", {
    googleAccessToken: accessToken,
  });

export const signUp = (data) => API.post("/users/signup", data);
export const signUpGoogle = (accessToken) =>
  API.post("/users/signup", {
    googleAccessToken: accessToken,
  });
