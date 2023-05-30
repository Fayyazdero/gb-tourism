import { getUser } from "../../network/api/auth";
import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../constants/user";

export const getUserAction = (userId) => async (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });

  try {
    const res = await getUser(userId);
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error });
  }
};
