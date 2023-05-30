import { API } from "../../axios";

export const signin = (user) => API.post("/auth/signin", user);
export const signup = (user) => API.post("/auth/signup", user);
export const googleSignin = (tokenId) => API.post("/auth/google", { tokenId });
export const getUser = (userId) => API.get(`/auth/user/${userId}`);
export const emailActivate = (token) => API.post("/auth/email-activate", token);
export const forgetPassword = (email) =>
  API.put("/auth/forget-password", email);
export const resetPassword = (obj) => API.put("/auth/reset-password", obj);
