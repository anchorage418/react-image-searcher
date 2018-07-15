import { fork, all } from 'redux-saga/effects';

import { fetchImagesWatch } from './sagas';

export default function* rootSaga() {
  yield all([
      fork(fetchImagesWatch),
  ]);
}