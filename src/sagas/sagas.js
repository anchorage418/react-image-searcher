import { takeEvery, put, call } from 'redux-saga/effects'
import fetchImagesApi from '../api/fetchImagesApi';
import {
  fetchImagesSuccess,
  saveImageSuccess,
  deleteImageSuccess
} from '../actions/index';
import {
  FETCH_IMAGES_START,
  SAVE_IMAGES_START,
  DELETE_IMAGE_START
} from '../actions/actionTypes';

function* fetchImages({payload}) {
  try {
     const data = yield call(fetchImagesApi, payload.value);
     yield put(fetchImagesSuccess(data))
  } catch (error) {
     console.error(error);
  }
}

function* saveImages({payload}) {
  try {
    yield put(saveImageSuccess(payload))
  } catch (error) {
    console.error(error);
  }
}

function* deleteImage({payload}) {
  try {
    yield put(deleteImageSuccess(payload))
  } catch (error) {
    console.error(error);
  }
}

export function* fetchImagesWatch() {
  yield takeEvery(FETCH_IMAGES_START, fetchImages)
}

export function* saveImageWatch() {
  yield takeEvery(SAVE_IMAGES_START, saveImages)
}

export function* deleteImageWatch() {
  yield takeEvery(DELETE_IMAGE_START, deleteImage)
}