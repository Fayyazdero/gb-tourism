import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../constants/user";

const initialState = {
  user: {},
  loading: false,
  error: "",
};
export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        user: {},
        loading: true,
        error: "",
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: "",
      };

    case GET_USER_FAIL:
      return {
        ...state,
        user: {},
        loading: false,
        error: payload.message,
      };

    default:
      return state;
  }
};
