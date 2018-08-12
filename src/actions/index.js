import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  CHANGE_LAYOUT_START,
  CHANGE_LAYOUT_SUCCESS,
  // CHANGE_LAYOUT_FAILURE,
  SAVE_IMAGES_START,
  SAVE_IMAGES_SUCCESS,
  // SAVE_IMAGES_FAILURE,
  DELETE_IMAGE_START,
  DELETE_IMAGE_SUCCESS,
  // DELETE_IMAGE_FAILURE,
  SHOW_MORE_IMAGES_START,
  SHOW_MORE_IMAGES_SUCCESS,
  SHOW_MORE_IMAGES_FAILURE,
} from './actionTypes';

export const fetchImagesStart = (data) => {
  return({
    type: FETCH_IMAGES_START,
    payload: data
  });
};

export const fetchImagesSuccess = (data, query) => {
  return({
    type: FETCH_IMAGES_SUCCESS,
    payload: {
      data: data,
      query: query
    }
  });
};

export const fetchImagesFailure = (error) => {
  return({
    type: FETCH_IMAGES_FAILURE,
    payload: {
      payload: error,
    }
  });
};

export const changeLayoutStart = (data) => {
  return({
    type: CHANGE_LAYOUT_START,
    payload: data
  });
};

export const changeLayoutSuccess = (data) => {
  return({
    type: CHANGE_LAYOUT_SUCCESS,
    payload: data
  });
};

export const saveImageStart = (data) => {
  return({
    type: SAVE_IMAGES_START,
    payload: data
  });
};

export const saveImageSuccess = (data) => {
  return({
    type: SAVE_IMAGES_SUCCESS,
    payload: data
  });
};

export const deleteImageStart = (data) => {
  return({
    type: DELETE_IMAGE_START,
    payload: data
  });
};

export const deleteImageSuccess = (data) => {
  return({
    type: DELETE_IMAGE_SUCCESS,
    payload: data
  });
};

export const showMoreImagesStart = (data) => {
  return({
    type: SHOW_MORE_IMAGES_START,
    payload: data
  });
};

export const showMoreImagesSuccess = (data, query) => {
  return({
    type: SHOW_MORE_IMAGES_SUCCESS,
    payload: {
      data: data,
      query: query
    }
  });
};

export const showMoreImagesFailure = (error) => {
  return({
    type: SHOW_MORE_IMAGES_FAILURE,
    payload: {
      payload: error,
    }
  });
};