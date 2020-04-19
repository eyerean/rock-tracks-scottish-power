import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import {
  MemoryRouter
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Track, TrackState } from '../types';
import ConnectedTrackList, { TrackList } from './TrackList';

const mockTracks: Track[] = [
  {"wrapperType":"track", "kind":"song", "artistId":106621, "collectionId":1377813284, "trackId":1377813701, "artistName":"Guns N' Roses", "collectionName":"Appetite for Destruction", "trackName":"Sweet Child O' Mine", "collectionCensoredName":"Appetite for Destruction", "trackCensoredName":"Sweet Child O' Mine", "artistViewUrl":"https://music.apple.com/us/artist/guns-n-roses/106621?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/sweet-child-o-mine/1377813284?i=1377813701&uo=4", "trackViewUrl":"https://music.apple.com/us/album/sweet-child-o-mine/1377813284?i=1377813701&uo=4", 
  "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/be/7d/03/be7d0374-90e1-b72f-5006-fa238224fa8c/mzaf_6310073099534841361.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/93/09/d5/9309d5ae-2b5d-d0e3-2909-b1c885fd9641/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/93/09/d5/9309d5ae-2b5d-d0e3-2909-b1c885fd9641/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/93/09/d5/9309d5ae-2b5d-d0e3-2909-b1c885fd9641/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"1987-07-21T12:00:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":12, "trackNumber":9, "trackTimeMillis":356067, "country":"USA", "currency":"USD", "primaryGenreName":"Hard Rock", "isStreamable":true}, 
  {"wrapperType":"track", "kind":"song", "artistId":3444975, "collectionId":140862914, "trackId":140862717, "artistName":"Buckcherry", "collectionName":"15", "trackName":"Crazy Bitch", "collectionCensoredName":"15", "trackCensoredName":"Crazy Bitch", "artistViewUrl":"https://music.apple.com/us/artist/buckcherry/3444975?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/crazy-bitch/140862914?i=140862717&uo=4", "trackViewUrl":"https://music.apple.com/us/album/crazy-bitch/140862914?i=140862717&uo=4", "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/94/60/5b/mzm.owwljezn.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/f0/63/ea/f063ea22-b51a-2850-a4a4-f5111dfce29b/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/f0/63/ea/f063ea22-b51a-2850-a4a4-f5111dfce29b/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/f0/63/ea/f063ea22-b51a-2850-a4a4-f5111dfce29b/source/100x100bb.jpg", "collectionPrice":10.99, "trackPrice":1.29, "releaseDate":"2005-10-17T07:00:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"explicit", "discCount":1, "discNumber":1, "trackCount":11, "trackNumber":7, "trackTimeMillis":202720, "country":"USA", "currency":"USD", "primaryGenreName":"Hard Rock", "contentAdvisoryRating":"Explicit", "isStreamable":true}, 
  {"wrapperType":"track", "kind":"song", "artistId":5280361, "collectionId":214403406, "trackId":214403648, "artistName":"Nickelback", "collectionName":"All the Right Reasons", "trackName":"Rockstar", "collectionCensoredName":"All the Right Reasons", "trackCensoredName":"Rockstar", "artistViewUrl":"https://music.apple.com/us/artist/nickelback/5280361?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/rockstar/214403406?i=214403648&uo=4", "trackViewUrl":"https://music.apple.com/us/album/rockstar/214403406?i=214403648&uo=4", "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/ef/aa/f4/mzm.oiqgkqho.aac.p.m4a", "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Music/v4/4f/0e/7e/4f0e7eda-daa7-ba7b-0e08-3058c4901c50/source/30x30bb.jpg", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Music/v4/4f/0e/7e/4f0e7eda-daa7-ba7b-0e08-3058c4901c50/source/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music/v4/4f/0e/7e/4f0e7eda-daa7-ba7b-0e08-3058c4901c50/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2005-09-26T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":11, "trackNumber":11, "trackTimeMillis":255435, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
  {"wrapperType":"track", "kind":"song", "artistId":262836961, "collectionId":420075073, "trackId":420075084, "artistName":"Adele", "collectionName":"21", "trackName":"Rolling in the Deep", "collectionCensoredName":"21", "trackCensoredName":"Rolling in the Deep", "artistViewUrl":"https://music.apple.com/us/artist/adele/262836961?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/rolling-in-the-deep/420075073?i=420075084&uo=4", "trackViewUrl":"https://music.apple.com/us/album/rolling-in-the-deep/420075073?i=420075084&uo=4", "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/3d/fd/74/mzm.dqadcdcf.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/39/50/b3/3950b304-580b-877c-c05b-1ba30a5a8239/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/39/50/b3/3950b304-580b-877c-c05b-1ba30a5a8239/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/39/50/b3/3950b304-580b-877c-c05b-1ba30a5a8239/source/100x100bb.jpg", "collectionPrice":10.99, "trackPrice":1.29, "releaseDate":"2010-11-29T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":12, "trackNumber":1, "trackTimeMillis":228293, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "isStreamable":true}, 
];

describe('The ConnectedTrackList component',()=>{
  const initialState: {track: TrackState} = { track: {tracks: [], error: undefined, fetching: false, track: undefined} };
  const mockStore = configureStore();
  let store, trackListComponent;

  beforeEach(()=>{
    store = mockStore(initialState);
    trackListComponent = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedTrackList />
        </MemoryRouter>
      </Provider>
    );
  });

  afterEach(() => {
    trackListComponent.unmount();
  });

  it('renders the connected TrackList component', () => {
     expect(trackListComponent.find(ConnectedTrackList).length).toEqual(1);
  });

  it('includes props that match with initial redux state', () => {
    expect(trackListComponent.find(TrackList).prop('tracks')).toEqual(initialState.track.tracks);
  });

  it('renders an error if it exists', () => {
    trackListComponent.unmount();
    store = mockStore({track: {...initialState.track, error: 'Something went wrong'}});

    trackListComponent = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedTrackList />
        </MemoryRouter>
      </Provider>
    );
    expect(trackListComponent.containsMatchingElement(<p>Something went wrong</p>)).toEqual(true);
  });

  it("doesn't render a table when no tracks fetched", () => {
    expect(trackListComponent.find('table')).toHaveLength(0);
  });

  it('renders a table if tracks are fetched', () => {
    trackListComponent.unmount();
    store = mockStore({track: {...initialState.track, tracks: mockTracks}});

    trackListComponent = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedTrackList />
        </MemoryRouter>
      </Provider>
    );
    expect(trackListComponent.find('table')).toHaveLength(1);
  });
});