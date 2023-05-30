import { deleteFile, getFile, uploadFile } from "../../network/api/upload";
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

export const imageUploadAction = (file) => async (dispatch) => {
  dispatch({ type: IMAGE_UPLOAD_REQUEST });
  try {
    const res = await uploadFile(file);
    dispatch({ type: IMAGE_UPLOAD_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: IMAGE_UPLOAD_FAIL, payload: error });
  }
};

export const imageDeleteAction = (filename) => async (dispatch) => {
  dispatch({ type: IMAGE_DELETE_REQUEST });
  try {
    await deleteFile(filename);
    dispatch({
      type: IMAGE_DELETE_SUCCESS,
      payload: "Image is deleted successfully.",
    });
  } catch (error) {
    dispatch({ type: IMAGE_DELETE_FAIL, payload: error });
  }
};

export const getImageAction = (filename) => async (dispatch) => {
  dispatch({ type: IMAGE_GET_REQUEST });
  try {
    const res = await getFile(filename);
    dispatch({
      type: IMAGE_GET_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: IMAGE_GET_FAIL, payload: error });
  }
};

export const froalaImageUploadAction = (file) => async (dispatch) => {
  dispatch({ type: FROALA_IMAGE_UPLOAD_REQUEST });
  try {
    const res = await uploadFile(file);
    dispatch({ type: FROALA_IMAGE_UPLOAD_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: FROALA_IMAGE_UPLOAD_FAIL, payload: error });
  }
};

export const froalaImageDeleteAction = (filename) => async (dispatch) => {
  dispatch({ type: FROALA_IMAGE_DELETE_REQUEST });
  try {
    await deleteFile(filename);
    dispatch({
      type: FROALA_IMAGE_DELETE_SUCCESS,
      payload: "Image is deleted successfully.",
    });
  } catch (error) {
    dispatch({ type: FROALA_IMAGE_DELETE_FAIL, payload: error });
  }
};

export const froalaGetImageAction = (filename) => async (dispatch) => {
  dispatch({ type: FROALA_IMAGE_GET_REQUEST });
  try {
    const res = await getFile(filename);
    dispatch({
      type: FROALA_IMAGE_GET_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: FROALA_IMAGE_GET_FAIL, payload: error });
  }
};
