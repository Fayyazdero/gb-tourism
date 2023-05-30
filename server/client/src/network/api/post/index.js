import { API } from "./../../axios";

export const getPost = async (id) => await API.get(`/posts/post/${id}`);

export const addPost = async (post) => await API.post("/posts", post);

export const getPosts = async (page, limit, slug) =>
  await API.get(
    `/posts/?page=${page}&limit=${limit}${slug ? `&category=${slug}` : ""}`
  );

export const getPostsByCategory = async (slug) =>
  await API.get(`/posts/?category=${slug}`);

export const getCategoryPosts = async (slug, page, limit) =>
  await API.get(
    `/posts/?category=${slug}${page ? `&page=${page}` : ""}${
      limit ? `&limit=${limit}` : ""
    }`
  );

export const getPostsBySearch = async (searchTerm) =>
  await API.get(`/posts/search/?searchQuery=${searchTerm}`);

export const getRecomendedPosts = async (tags) =>
  await API.get(`/posts/recomended?tags=${tags}`);

export const likePost = async (id, email) =>
  await API.patch(`/posts/${id}/like-post`, { email });

export const addComment = async (postId, comment) =>
  await API.post(`/posts/${postId}/comment`, comment);

export const deletePost = async (id) => await API.delete(`/posts/${id}`);

export const updatePost = async (id, post) =>
  await API.patch(`/posts/${id}`, post);

export const getUserPosts = async (id) => await API.get(`/posts/${id}/posts`);

export const getLengthOfCategoryPosts = async () =>
  await API.get("/posts/categories/length");

export const getTopCategoryPosts = async () =>
  await API.get("/posts/top/categories");
