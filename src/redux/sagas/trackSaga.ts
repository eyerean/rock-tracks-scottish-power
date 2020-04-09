import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import { Action } from '../../types';
import { TRACKS_FETCH_REQUEST, TRACKS_FETCH_SUCCESS, TRACKS_FETCH_FAILURE } from '../actions/actionTypes';

function* trackWatcherSaga() {
  yield takeLatest(TRACKS_FETCH_REQUEST, fetchTracksSaga);
}

function* fetchTracksSaga(action: Action) {
  try {
    const response: AxiosResponse = yield call(fetchTracks);    
    yield put({type: TRACKS_FETCH_SUCCESS, payload: {tracks: response.data.results}});
   } catch (e) {
      yield put({type: TRACKS_FETCH_FAILURE, message: e.message});
   }
}

function fetchTracks(): AxiosPromise {
  return axios({
    method: "get",
    url: 'https://itunes.apple.com/search?term=rock&media=music'
  });
}

export default trackWatcherSaga;