import { API } from "./../../axios";

export const getCategories = async () => await API.get(`/categories`);
