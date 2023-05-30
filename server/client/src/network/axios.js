import axios from 'axios';
export const API = axios.create({
  // baseURL: "https://storymug.herokuapp.com/api",
  baseURL: 'http://localhost:5001/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 15000,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user')).token
    }`;
  }

  return req;
});
