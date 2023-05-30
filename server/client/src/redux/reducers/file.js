import {
  FROALA_IMAGE_DELETE_FAIL,
  FROALA_IMAGE_DELETE_REQUEST,
  FROALA_IMAGE_DELETE_SUCCESS,
  FROALA_IMAGE_GET_FAIL,
  FROALA_IMAGE_GET_REQUEST,
  FROALA_IMAGE_GET_SUCCESS,
  FROALA_IMAGE_UPLOAD_FAIL,
  FROALA_IMAGE_UPLOAD_REQUEST,
  FROALA_IMAGE_UPLOAD_SUCCESS,
  IMAGE_DELETE_FAIL,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_SUCCESS,
  IMAGE_GET_FAIL,
  IMAGE_GET_REQUEST,
  IMAGE_GET_SUCCESS,
  IMAGE_UPLOAD_FAIL,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
} from "../constants/imageUpload";

const initialState = {
  file: "",
  loading: false,
  error: "",
  success: "",
};

export const file = (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGE_UPLOAD_REQUEST:
    case IMAGE_DELETE_REQUEST:
    case IMAGE_GET_REQUEST:
      return { ...state, file: "", loading: true, error: "", success: "" };

    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        file: payload,
        loading: false,
        error: "",
        success: "Image is uploaded successfully.",
      };

    case IMAGE_DELETE_SUCCESS:
      return {
        ...state,
        file: "",
        loading: false,
        error: "",
        success: payload,
      };

    case IMAGE_GET_SUCCESS:
      return {
        ...state,
        file: payload,
        loading: false,
        error: "",
        success: "",
      };

    case IMAGE_UPLOAD_FAIL:
    case IMAGE_DELETE_FAIL:
    case IMAGE_GET_FAIL:
      return {
        ...state,
        file: "",
        loading: false,
        error: payload.message,
        success: "",
      };

    default:
      return state;
  }
};

const froalaInitialState = {
  file: "",
  loading: false,
  error: "",
  success: "",
};

export const froalaImage = (state = froalaInitialState, { type, payload }) => {
  switch (type) {
    case FROALA_IMAGE_UPLOAD_REQUEST:
    case FROALA_IMAGE_DELETE_REQUEST:
    case FROALA_IMAGE_GET_REQUEST:
      return { ...state, file: "", loading: true, error: "", success: "" };

    case FROALA_IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        file: payload,
        loading: false,
        error: "",
        success: "Image is uploaded successfully.",
      };

    case FROALA_IMAGE_DELETE_SUCCESS:
      return {
        ...state,
        file: "",
        loading: false,
        error: "",
        success: payload,
      };

    case FROALA_IMAGE_GET_SUCCESS:
      return {
        ...state,
        file: payload,
        loading: false,
        error: "",
        success: "",
      };

    case FROALA_IMAGE_UPLOAD_FAIL:
    case FROALA_IMAGE_DELETE_FAIL:
    case FROALA_IMAGE_GET_FAIL:
      return {
        ...state,
        file: "",
        loading: false,
        error: payload.message,
        success: "",
      };

    default:
      return state;
  }
};
