import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import { Action, TracksResponse } from '../../types';
import { fetchTracks } from '../../api/requests';
import { TRACKS_FETCH_REQUEST, TRACKS_FETCH_SUCCESS, TRACKS_FETCH_FAILURE } from '../actions/actionTypes';

function* trackWatcherSaga() {
  yield takeLatest(TRACKS_FETCH_REQUEST, fetchTracksSaga);
}

function* fetchTracksSaga(action: Action) {
  try {
    const response: AxiosResponse<TracksResponse> = yield call(fetchTracks);    
    yield put({type: TRACKS_FETCH_SUCCESS, payload: {tracks: response.data.results}});
   } catch (error) {
      yield put({type: TRACKS_FETCH_FAILURE, payload: error});
   }
}

export default trackWatcherSaga;