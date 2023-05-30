import { combineReducers } from "redux";
import { auth, emailActivate, forgetPassword, resetPassword } from "./auth";
import { user } from "./user";
import {
  posts,
  infinitePosts,
  post,
  searchPosts,
  recomendedPosts,
  userPosts,
  footerCategoryPosts,
  topCategoriesPosts,
  postsByCategory,
} from "./posts";
import { file, froalaImage } from "./file";
import { theme } from "./theme";

const reducers = combineReducers({
  auth,
  emailActivate,
  forgetPassword,
  resetPassword,
  posts,
  theme,
  infinitePosts,
  user,
  post,
  search: searchPosts,
  recomended: recomendedPosts,
  userPosts,
  footerCategoryPosts,
  file,
  froalaImage,
  topCategoriesPosts,
  postsByCategory,
});

export default reducers;
