import { all } from 'redux-saga/effects';
import trackWatcherSaga from './trackSaga';

export default function* rootSaga() {
  yield all([
    trackWatcherSaga()
  ]);
}