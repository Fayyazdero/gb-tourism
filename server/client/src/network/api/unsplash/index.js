import { API } from "./api";

export const getPhotos = async (searchTerm) =>
  await API.get(`/search/photos?page=1&per_page=50&query=${searchTerm}`);
