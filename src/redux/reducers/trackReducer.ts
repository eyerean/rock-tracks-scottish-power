import { Action, TrackState, Track } from '../../types';
import { TRACKS_FETCH_REQUEST, TRACKS_FETCH_SUCCESS, TRACKS_FETCH_FAILURE, TRACK_SET } from '../actions/actionTypes';

const INITIAL_STATE: TrackState = {
  error: undefined,
  fetching: false,
  tracks: [] as Track[],
  track: undefined
};

const trackReducer = (state: TrackState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case TRACKS_FETCH_REQUEST:
      return { ...state, fetching: true, error: undefined };
    case TRACKS_FETCH_SUCCESS:
      return { ...state, fetching: false, tracks: action.payload.tracks };
    case TRACKS_FETCH_FAILURE:
      return { ...state, fetching: false, error: action.payload.error };
    case TRACK_SET:
      return { ...state, track: action.payload.track };
    default:
      return state;
  }
};

export default trackReducer;