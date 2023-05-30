import { API } from "../../axios";

export const uploadFile = (file) => API.post("/file/upload", file);
export const deleteFile = (filename) => API.delete(`/file/${filename}`);
export const getFile = (filename) => API.get("/file", filename);
