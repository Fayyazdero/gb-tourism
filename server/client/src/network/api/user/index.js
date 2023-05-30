import { API } from "./../../apiClient";

export const getUsers = async () => await API.get("/users");
export const deleteUser = async (id) => await API.delete(`/users/${id}`);