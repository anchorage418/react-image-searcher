import { fork, all } from 'redux-saga/effects';

import { 
  fetchImagesWatch,
  changeLayoutWatch,
  saveImageWatch,
  deleteImageWatch,
  showMoreImagesWatch
 } from './sagas';

export default function* rootSaga() {
  yield all([
      fork(fetchImagesWatch),
      fork(changeLayoutWatch),
      fork(saveImageWatch),
      fork(deleteImageWatch),
      fork(showMoreImagesWatch),
  ]);
}