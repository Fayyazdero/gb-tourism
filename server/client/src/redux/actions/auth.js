import {
  emailActivate,
  forgetPassword,
  googleSignin,
  resetPassword,
  signin,
  signup,
} from "../../network/api/auth";
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
} from "./../constants/auth";

export const signupAction = (user, navigate) => async (dispatch) => {
  dispatch({ type: CUSTOM_SIGNUP_REQUEST });
  try {
    const res = await signup(user);
    dispatch({ type: CUSTOM_SIGNUP_SUCCESS, payload: res.data });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  } catch (error) {
    dispatch({ type: CUSTOM_SIGNUP_FAIL, payload: error });
  }
};

export const signinAction = (user, navigate) => async (dispatch) => {
  dispatch({ type: CUSTOM_SIGNIN_REQUEST });
  try {
    const res = await signin(user);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch({ type: CUSTOM_SIGNIN_SUCCESS, payload: res.data });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  } catch (error) {
    dispatch({ type: CUSTOM_SIGNIN_FAIL, payload: error });
  }
};

export const googleSigninAction = (tokenId, navigate) => async (dispatch) => {
  dispatch({ type: GOOGLE_SIGNIN_REQUEST });
  try {
    const res = await googleSignin(tokenId);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch({ type: GOOGLE_SIGNIN_SUCCESS, payload: res.data });

    navigate("/");
  } catch (error) {
    console.error(error);
    dispatch({ type: GOOGLE_SIGNIN_FAIL, payload: error });
  }
};

export const logoutAction = (navigate) => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  try {
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT_SUCCESS });
    navigate("/");
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error });
  }
};

export const emailActivateAction = (navigate, token) => async (dispatch) => {
  dispatch({ type: EMAIL_ACTIVATE_REQUEST });
  try {
    const res = await emailActivate(token);
    if (res) {
      dispatch({ type: EMAIL_ACTIVATE_SUCCESS, payload: true });
      setTimeout(() => {
        navigate("/auth");
      }, 1000);
    }
  } catch (error) {
    dispatch({ type: EMAIL_ACTIVATE_FAIL, payload: error });
  }
};

export const forgetPasswordAction = (email) => async (dispatch) => {
  dispatch({ type: FORGET_PASSWORD_REQUEST });
  try {
    const res = await forgetPassword(email);
    if (res) {
      dispatch({ type: FORGET_PASSWORD_SUCCESS, payload: true });
    }
  } catch (error) {
    dispatch({ type: FORGET_PASSWORD_FAIL, payload: error });
  }
};

export const resetPasswordAction = (navigate, obj) => async (dispatch) => {
  dispatch({ type: RESET_PASSWORD_REQUEST });
  try {
    const res = await resetPassword(obj);
    if (res) {
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: true });
      setTimeout(() => {
        navigate("/auth");
      }, 1000);
    }
  } catch (error) {
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error });
  }
};
