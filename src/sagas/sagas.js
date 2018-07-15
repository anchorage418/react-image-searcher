import { takeEvery, put, call } from 'redux-saga/effects'
import fetchImagesApi from '../api/fetchImagesApi';
import {
  fetchImagesSuccess
} from '../actions/index';
import {
  FETCH_IMAGES_START
} from '../actions/actionTypes';

function* fetchImages({payload}) {
  try {
     const data = yield call(fetchImagesApi, payload.value);
     yield put(fetchImagesSuccess(data))
  } catch (error) {
     console.error(error);
  }
}

export function* fetchImagesWatch() {
  yield takeEvery(FETCH_IMAGES_START, fetchImages)
}