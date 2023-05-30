import {
  CUSTOM_SIGNIN_FAIL,
  CUSTOM_SIGNIN_REQUEST,
  CUSTOM_SIGNIN_SUCCESS,
  CUSTOM_SIGNUP_FAIL,
  CUSTOM_SIGNUP_REQUEST,
  CUSTOM_SIGNUP_SUCCESS,
  EMAIL_ACTIVATE_FAIL,
  EMAIL_ACTIVATE_REQUEST,
  EMAIL_ACTIVATE_SUCCESS,
  FORGET_PASSWORD_FAIL,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  GOOGLE_SIGNIN_FAIL,
  GOOGLE_SIGNIN_REQUEST,
  GOOGLE_SIGNIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "../constants/auth";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  loading: false,
  error: "",
  main: false,
};

export const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case CUSTOM_SIGNUP_REQUEST:
    case CUSTOM_SIGNIN_REQUEST:
    case GOOGLE_SIGNIN_REQUEST:
    case LOGOUT_REQUEST:
      return { ...state, loading: true, mail: false, error: "" };

    case CUSTOM_SIGNUP_SUCCESS:
      return { ...state, user: null, mail: true, loading: false, error: "" };

    case CUSTOM_SIGNIN_SUCCESS:
    case GOOGLE_SIGNIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        mail: false,
        error: "",
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        mail: false,
        error: "",
      };

    case CUSTOM_SIGNUP_FAIL:
    case CUSTOM_SIGNIN_FAIL:
    case GOOGLE_SIGNIN_FAIL:
    case LOGOUT_FAIL:
      return {
        ...state,
        user: null,
        loading: false,
        mail: false,
        error: payload.message,
      };

    default:
      return state;
  }
};

const emailActivateState = {
  activate: false,
  loading: false,
  error: "",
};

export const emailActivate = (
  state = emailActivateState,
  { type, payload }
) => {
  switch (type) {
    case EMAIL_ACTIVATE_REQUEST:
      return { ...state, activate: false, loading: true, error: "" };

    case EMAIL_ACTIVATE_SUCCESS:
      return { ...state, loading: false, activate: payload, error: "" };

    case EMAIL_ACTIVATE_FAIL:
      return {
        ...state,
        loading: false,
        activate: false,
        error: payload.message,
      };

    default:
      return state;
  }
};

const forgetPasswordState = {
  mail: false,
  loading: false,
  error: "",
};

export const forgetPassword = (
  state = forgetPasswordState,
  { type, payload }
) => {
  switch (type) {
    case FORGET_PASSWORD_REQUEST:
      return { ...state, mail: false, loading: true, error: "" };

    case FORGET_PASSWORD_SUCCESS:
      return { ...state, mail: payload, loading: false, error: "" };

    case FORGET_PASSWORD_FAIL:
      return { ...state, mail: false, loading: false, error: payload.message };

    default:
      return state;
  }
};

const resetPasswordState = {
  reset: false,
  loading: false,
  error: "",
};

export const resetPassword = (
  state = resetPasswordState,
  { type, payload }
) => {
  switch (type) {
    case RESET_PASSWORD_REQUEST:
      return { ...state, reset: false, loading: true, error: "" };

    case RESET_PASSWORD_SUCCESS:
      return { ...state, reset: payload, loading: false, error: "" };

    case RESET_PASSWORD_FAIL:
      return { ...state, reset: false, loading: false, error: payload.message };

    default:
      return state;
  }
};
