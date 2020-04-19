import axios, {AxiosPromise} from 'axios';

export const fetchTracks = (): AxiosPromise  => {
  return axios({
    method: "get",
    url: 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=rock&media=music'
  });
}