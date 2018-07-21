import { fork, all } from 'redux-saga/effects';

import { 
  fetchImagesWatch,
  saveImageWatch,
  deleteImageWatch
 } from './sagas';

export default function* rootSaga() {
  yield all([
      fork(fetchImagesWatch),
      fork(saveImageWatch),
      fork(deleteImageWatch),
  ]);
}