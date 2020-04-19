import { TRACKS_FETCH_REQUEST, TRACK_SET } from './actionTypes';
import { Track } from '../../types';

const fetchTracks = () => ({
  type: TRACKS_FETCH_REQUEST
});

const setTrack = (track?: Track) => ({
  type: TRACK_SET,
  payload: { track }
});

export default {
  fetchTracks,
  setTrack
}