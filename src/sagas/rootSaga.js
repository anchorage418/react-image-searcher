import { fork, all } from 'redux-saga/effects';

import { 
  fetchImagesWatch,
  saveImageWatch
 } from './sagas';

export default function* rootSaga() {
  yield all([
      fork(fetchImagesWatch),
      fork(saveImageWatch),
  ]);
}