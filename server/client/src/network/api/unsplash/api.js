import axios from "axios";
export const API = axios.create({
  baseURL: process.env.REACT_APP_API_UNSPALSH_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
  timeout: 10000,
});

API.interceptors.request.use((req) => {
  req.headers.Authorization = `Client-ID ${process.env.REACT_APP_API_UNSPALSH_PUBLIC_KEY}`;

  return req;
});
