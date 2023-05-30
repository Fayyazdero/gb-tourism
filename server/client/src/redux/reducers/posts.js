import {
  ADD_POST_FAIL,
  ADD_POST_SUCCESS,
  ADD_POST_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_REQUEST,
  GET_POSTS_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAIL,
  GET_IFINITE_POSTS_REQUEST,
  GET_IFINITE_POSTS_SUCCESS,
  GET_IFINITE_POSTS_FAIL,
  CLEAR_IFINITE_POSTS,
  GET_IFINITE_POSTS_CATEGORY_SUCCESS,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_POSTS_BY_SEARCH_REQUEST,
  GET_POSTS_BY_SEARCH_SUCCESS,
  GET_POSTS_BY_SEARCH_FAIL,
  GET_RECOMENDED_POSTS_REQUEST,
  GET_RECOMENDED_POSTS_SUCCESS,
  GET_RECOMENDED_POSTS_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  GET_POSTS_BY_CATEGORY_FOOTER_REQUEST,
  GET_POSTS_BY_CATEGORY_FOOTER_SUCCESS,
  GET_POSTS_BY_CATEGORY_FOOTER_FAIL,
  GET_TOP_CATEGORIES_POSTS_REQUEST,
  GET_TOP_CATEGORIES_POSTS_SUCCESS,
  GET_TOP_CATEGORIES_POSTS_FAIL,
  GET_CATEGORY_POSTS_REQUEST,
  GET_CATEGORY_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_FAIL,
  CLEAR_POST_SUCCESS,
} from "../constants/post";

const initialState = {
  posts: [],
  loading: false,
  error: "",
  c_loading: false,
  update_success: "",
  delete_success: false,
};

export const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST_REQUEST:
    case GET_POSTS_REQUEST:
    case UPDATE_POST_REQUEST:
    case DELETE_POST_REQUEST:
    case LIKE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        update_success: "",
        delete_success: false,
      };
    case ADD_COMMENT_REQUEST:
      return { ...state, loading: true, error: "", c_loading: true };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
        error: "",
      };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        posts: state?.posts?.map((post) => {
          if (post?._id === payload?._id) {
            return payload;
          }
          return post;
        }),
        loading: false,
        c_loading: false,
        error: "",
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false,
        error: "",
      };

    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload._id ? payload : post
        ),
        loading: false,
        error: "",
        update_success: "Post is successfully updated",
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload.id),
        loading: false,
        error: "",
        delete_success: true,
      };

    case LIKE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload._id ? payload : post
        ),
        loading: false,
        error: "",
      };

    case ADD_POST_FAIL:
    case GET_POSTS_FAIL:
    case UPDATE_POST_FAIL:
    case DELETE_POST_FAIL:
    case LIKE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.message,
        update_success: "",
        delete_success: false,
      };
    case ADD_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.message,
        c_loading: false,
      };

    default:
      return state;
  }
};

const initialPosts = {
  posts: [],
  categoryPosts: [],
  totalPosts: 0,
  error: null,
  loading: false,
};
export const infinitePosts = (state = initialPosts, { type, payload }) => {
  switch (type) {
    case GET_IFINITE_POSTS_REQUEST:
      return { ...state, loading: true, error: "" };

    case GET_IFINITE_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...payload.posts],
        totalPosts: payload.totalPosts,
        loading: false,
        error: "",
      };

    case GET_IFINITE_POSTS_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryPosts: [...state.categoryPosts, ...payload.posts],
        totalPosts: payload.totalPosts,
        loading: false,
        error: "",
      };

    case CLEAR_IFINITE_POSTS:
      return {
        ...state,
        posts: [],
        categoryPosts: [],
        totalPosts: 0,
        loading: false,
        error: "",
      };

    case GET_IFINITE_POSTS_FAIL:
      return { ...state, loading: false, error: payload.message };

    default:
      return state;
  }
};

const postState = {
  post: {},
  error: "",
  loading: false,
};

export const post = (state = postState, { type, payload }) => {
  switch (type) {
    case GET_POST_REQUEST:
      return { ...state, post: {}, loading: true, error: "" };

    case GET_POST_SUCCESS:
      return { ...state, post: payload.post, loading: false, error: "" };

    case GET_POST_FAIL:
      return { ...state, post: {}, loading: false, error: payload.message };

    case CLEAR_POST_SUCCESS:
      return { ...state, post: {}, loading: false, error: "" };

    default:
      return state;
  }
};

const searchPostsState = {
  posts: [],
  error: null,
  loading: false,
};
export const searchPosts = (state = searchPostsState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_BY_SEARCH_REQUEST:
      return { ...state, posts: [], error: null, loading: true };

    case GET_POSTS_BY_SEARCH_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
        error: null,
        loading: false,
      };

    case GET_POSTS_BY_SEARCH_FAIL:
      return { ...state, posts: [], error: payload.message, loading: false };

    default:
      return state;
  }
};

const recomendedPostState = {
  posts: [],
  loading: false,
  error: "",
};

export const recomendedPosts = (
  state = recomendedPostState,
  { type, payload }
) => {
  switch (type) {
    case GET_RECOMENDED_POSTS_REQUEST:
      return { ...state, posts: [], loading: true, error: "" };
    case GET_RECOMENDED_POSTS_SUCCESS:
      return { ...state, posts: payload, loading: false, error: "" };
    case GET_RECOMENDED_POSTS_FAIL:
      return { ...state, posts: [], loading: false, error: payload.message };
    default:
      return state;
  }
};

const userPostsState = {
  posts: [],
  loading: false,
  error: "",
};

export const userPosts = (state = userPostsState, { type, payload }) => {
  switch (type) {
    case GET_USER_POSTS_REQUEST:
      return { ...state, posts: [], loading: true, error: "" };

    case GET_USER_POSTS_SUCCESS:
      return { ...state, posts: payload, loading: false, error: "" };

    case GET_USER_POSTS_FAIL:
      return { ...state, posts: [], loading: false, error: payload.message };

    default:
      return state;
  }
};

const footerCategoryPostsState = {
  posts: [],
  loading: false,
  error: "",
};

export const footerCategoryPosts = (
  state = footerCategoryPostsState,
  { type, payload }
) => {
  switch (type) {
    case GET_POSTS_BY_CATEGORY_FOOTER_REQUEST:
      return { ...state, loading: true, error: "" };

    case GET_POSTS_BY_CATEGORY_FOOTER_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...payload.posts],
        loading: false,
        error: "",
      };

    case GET_POSTS_BY_CATEGORY_FOOTER_FAIL:
      return { ...state, loading: false, error: payload.message };

    default:
      return state;
  }
};

const topCategoriesPostsInitialState = {
  posts: [],
  loading: false,
  error: "",
};

export const topCategoriesPosts = (
  state = topCategoriesPostsInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_TOP_CATEGORIES_POSTS_REQUEST:
      return { ...state, posts: [], loading: true, error: "" };

    case GET_TOP_CATEGORIES_POSTS_SUCCESS:
      return { ...state, posts: payload, loading: false, error: "" };

    case GET_TOP_CATEGORIES_POSTS_FAIL:
      return { ...state, posts: [], loading: false, error: payload.message };
    default:
      return state;
  }
};

const postsByCategoryInitialState = {
  posts: [],
  loading: false,
  error: "",
};

export const postsByCategory = (
  state = postsByCategoryInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_CATEGORY_POSTS_REQUEST:
      return { ...state, posts: [], loading: true, error: "" };

    case GET_CATEGORY_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...payload.posts, ...state.posts],
        loading: false,
        error: "",
      };

    case GET_CATEGORY_POSTS_FAIL:
      return { ...state, posts: [], loading: false, error: payload.message };

    default:
      return state;
  }
};
