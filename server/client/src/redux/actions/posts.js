import {
  addComment,
  addPost,
  deletePost,
  getCategoryPosts,
  getPost,
  getPosts,
  getPostsByCategory,
  getPostsBySearch,
  getRecomendedPosts,
  getTopCategoryPosts,
  getUserPosts,
  likePost,
  updatePost,
} from '../../network/api/post';
import {
  ADD_COMMENT_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  CLEAR_IFINITE_POSTS,
  CLEAR_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_CATEGORY_POSTS_FAIL,
  GET_CATEGORY_POSTS_REQUEST,
  GET_CATEGORY_POSTS_SUCCESS,
  GET_IFINITE_POSTS_CATEGORY_SUCCESS,
  GET_IFINITE_POSTS_FAIL,
  GET_IFINITE_POSTS_REQUEST,
  GET_IFINITE_POSTS_SUCCESS,
  GET_POSTS_BY_CATEGORY_FAIL,
  GET_POSTS_BY_CATEGORY_FOOTER_FAIL,
  GET_POSTS_BY_CATEGORY_FOOTER_REQUEST,
  GET_POSTS_BY_CATEGORY_FOOTER_SUCCESS,
  GET_POSTS_BY_CATEGORY_REQUEST,
  GET_POSTS_BY_CATEGORY_SUCCESS,
  GET_POSTS_BY_SEARCH_FAIL,
  GET_POSTS_BY_SEARCH_REQUEST,
  GET_POSTS_BY_SEARCH_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_RECOMENDED_POSTS_FAIL,
  GET_RECOMENDED_POSTS_REQUEST,
  GET_RECOMENDED_POSTS_SUCCESS,
  GET_TOP_CATEGORIES_POSTS_FAIL,
  GET_TOP_CATEGORIES_POSTS_REQUEST,
  GET_TOP_CATEGORIES_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  LIKE_POST_FAIL,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  UPDATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from '../constants/post';

export const addPostAction = (newPost, navigate) => async (dispatch) => {
  dispatch({ type: ADD_POST_REQUEST });
  try {
    const res = await addPost(newPost);
    dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
    setTimeout(() => {
      navigate(`/posts/${res?.data?._id}`);
    }, 1000);
  } catch (error) {
    dispatch({ type: ADD_POST_FAIL, payload: error });
  }
};

export const getPostsAction = (page, limit) => async (dispatch) => {
  dispatch({ type: GET_POSTS_REQUEST });
  try {
    const res = await getPosts(page, limit);
    dispatch({ type: GET_POSTS_SUCCESS, payload: res.data.posts });
  } catch (error) {
    dispatch({ type: GET_POSTS_FAIL, payload: error });
  }
};

export const getPostAction = (id) => async (dispatch) => {
  dispatch({ type: GET_POST_REQUEST });
  try {
    const res = await getPost(id);
    dispatch({ type: GET_POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_POST_FAIL, payload: error });
  }
};

export const clearPostAction = () => async (dispatch) => {
  dispatch({ type: CLEAR_POST_SUCCESS });
};

export const getPostsBySearchAction = (searchTerm) => async (dispatch) => {
  dispatch({ type: GET_POSTS_BY_SEARCH_REQUEST });
  try {
    const res = await getPostsBySearch(searchTerm);
    dispatch({ type: GET_POSTS_BY_SEARCH_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_POSTS_BY_SEARCH_FAIL, payload: error });
  }
};

export const getRecomendedPostsAction = (tags) => async (dispatch) => {
  dispatch({ type: GET_RECOMENDED_POSTS_REQUEST });
  try {
    const res = await getRecomendedPosts(tags);
    dispatch({ type: GET_RECOMENDED_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_RECOMENDED_POSTS_FAIL, payload: error });
  }
};

export const getInfinitePostsAction =
  (page, limit, slug) => async (dispatch) => {
    dispatch({ type: GET_IFINITE_POSTS_REQUEST });
    try {
      if (slug) {
        const res = await getPosts(page, limit, slug);
        dispatch({
          type: GET_IFINITE_POSTS_CATEGORY_SUCCESS,
          payload: {
            posts: res.data.posts,
            totalPosts: res.data.length,
          },
        });
      } else {
        const res = await getPosts(page, limit);
        dispatch({
          type: GET_IFINITE_POSTS_SUCCESS,
          payload: {
            posts: res.data.posts,
            totalPosts: res.data.length,
          },
        });
      }
    } catch (error) {
      dispatch({ type: GET_IFINITE_POSTS_FAIL, payload: error });
    }
  };

export const clearInfinitePostsAction = () => async (dispatch) => {
  dispatch({ type: CLEAR_IFINITE_POSTS });
};

export const updatePostAction = (id, post, navigate) => async (dispatch) => {
  dispatch({ type: UPDATE_POST_REQUEST });
  try {
    const res = await updatePost(id, post);
    dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data });
    setTimeout(() => {
      navigate(`/posts/${res?.data?._id}`);
    }, 1000);
  } catch (error) {
    dispatch({ type: UPDATE_POST_FAIL, payload: error });
  }
};

export const deletePostAction = (id) => async (dispatch) => {
  dispatch({ type: DELETE_POST_REQUEST });
  try {
    const res = await deletePost(id);
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: { message: res.data, id: id },
    });
    return res.data;
  } catch (error) {
    dispatch({ type: DELETE_POST_FAIL, payload: error });
  }
};

export const likePostAction = (id, email) => async (dispatch) => {
  dispatch({ type: LIKE_POST_REQUEST });
  try {
    const res = await likePost(id, email);
    dispatch({
      type: LIKE_POST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: LIKE_POST_FAIL, payload: error });
  }
};

export const getPostsByCategoryAction =
  (category, page, limit) => async (dispatch) => {
    dispatch({ type: GET_POSTS_BY_CATEGORY_REQUEST });
    try {
      const res = await getPostsByCategory(category, page, limit);
      dispatch({ type: GET_POSTS_BY_CATEGORY_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_POSTS_BY_CATEGORY_FAIL, payload: error });
    }
  };

export const getCategoryPostsAction =
  (category, page, limit) => async (dispatch) => {
    dispatch({ type: GET_CATEGORY_POSTS_REQUEST });
    try {
      const res = await getCategoryPosts(category, page, limit);
      dispatch({ type: GET_CATEGORY_POSTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_CATEGORY_POSTS_FAIL, payload: error });
    }
  };

export const getPostsByCategoryFooterAction =
  (category) => async (dispatch) => {
    dispatch({ type: GET_POSTS_BY_CATEGORY_FOOTER_REQUEST });
    try {
      const res = await getPostsByCategory(category);
      dispatch({
        type: GET_POSTS_BY_CATEGORY_FOOTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: GET_POSTS_BY_CATEGORY_FOOTER_FAIL, payload: error });
    }
  };

export const commentPostAction = (postId, comment) => async (dispatch) => {
  dispatch({ type: ADD_COMMENT_REQUEST });
  try {
    const res = await addComment(postId, comment);
    dispatch({ type: ADD_COMMENT_SUCCESS, payload: res.data });
    return res.data.comments;
  } catch (error) {
    dispatch({ type: ADD_COMMENT_FAIL, payload: error });
  }
};

export const getUserPostsAction = (id) => async (dispatch) => {
  dispatch({ type: GET_USER_POSTS_REQUEST });
  try {
    const res = await getUserPosts(id);
    dispatch({ type: GET_USER_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_POSTS_FAIL, payload: error });
  }
};

export const topCategoriesPostsAction = () => async (dispatch) => {
  dispatch({ type: GET_TOP_CATEGORIES_POSTS_REQUEST });
  try {
    const res = await getTopCategoryPosts();
    dispatch({ type: GET_TOP_CATEGORIES_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TOP_CATEGORIES_POSTS_FAIL, payload: error });
  }
};
