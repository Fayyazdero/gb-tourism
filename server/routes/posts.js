import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
  commentPost,
  getPost,
  getRecomendedPosts,
  getUserPosts,
  getLengthOfCategoryPosts,
  topCategoryPosts,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id/posts", getUserPosts);
router.get("/post/:id", getPost);
router.get("/search", getPostsBySearch);
router.get("/recomended", getRecomendedPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/like-post", auth, likePost);
router.post("/:id/comment", auth, commentPost);
router.get("/categories/length", getLengthOfCategoryPosts);
router.get("/top/categories", topCategoryPosts);

export default router;
