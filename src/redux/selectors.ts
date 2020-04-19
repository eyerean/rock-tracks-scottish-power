import { State } from '../types';

const getTracks = (state: State) => state.track.tracks;
const getTrack = (state: State) => state.track.track;
const getError = (state: State) => state.track.error;

export default {
  getTracks,
  getTrack,
  getError
}