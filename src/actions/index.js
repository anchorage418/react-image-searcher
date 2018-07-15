import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
} from './actionTypes';

export const fetchImagesStart = (data) => {
  return({
    type: FETCH_IMAGES_START,
    payload: data
  });
}

export const fetchImagesSuccess = (data) => {
  return({
    type: FETCH_IMAGES_SUCCESS,
    payload: data
  });
}

export const fetchImagesFailure = (error) => {
  return({
    type: FETCH_IMAGES_FAILURE,
    payload: error
  });
}