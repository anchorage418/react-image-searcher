import { fork, all } from 'redux-saga/effects';

import { 
  fetchImagesWatch,
  changeLayoutWatch,
  saveImageWatch,
  deleteImageWatch
 } from './sagas';

export default function* rootSaga() {
  yield all([
      fork(fetchImagesWatch),
      fork(changeLayoutWatch),
      fork(saveImageWatch),
      fork(deleteImageWatch),
  ]);
}