import { State } from '../types';

const getTracks = (state: State) => state.track.tracks;
const getError = (state: State) => state.track.error;

export default {
  getTracks,
  getError
}