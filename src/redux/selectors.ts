import { State } from '../types';

const getTracks = (state: State) => state.track.tracks;

export default {
  getTracks,
}