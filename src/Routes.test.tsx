import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TrackList from './pages/TrackList';
import TrackDetails from './pages/TrackDetails';
import Routes from './Routes';
import { TrackState } from './types';

describe('The Routes component', () => {
  const initialState: {track: TrackState} = { track: {tracks: [], error: undefined, fetching: false, track: undefined}};
  const mockStore = configureStore();
  let store, routeComponent;

  beforeEach(()=> {
    store = mockStore(initialState);
  });

  afterEach(() => {
    routeComponent.unmount();
  })

  it('renders 2 Route components', () => {
    routeComponent = shallow(<Routes />);      
    expect(routeComponent.find(Route)).toHaveLength(2);
  })
  
  it('renders TrackList component when on /', () => {
    routeComponent = mount(
      <Provider store={store}>
          <MemoryRouter initialEntries={[ '/' ]}>
            <Routes />
          </MemoryRouter>
        </Provider>
    );
    expect(routeComponent.find(TrackList)).toHaveLength(1);
    expect(routeComponent.find(TrackDetails)).toHaveLength(0);
  });


  it('renders TrackDetails component when on /track/12341234', () => {
    routeComponent = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ '/track/12341234' ]}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );    
    expect(routeComponent.find(TrackDetails)).toHaveLength(1);
    expect(routeComponent.find(TrackList)).toHaveLength(0);
  });

  it('renders TrackDetails component when on unknown route /asdf', () => {
    routeComponent = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ '/asdf' ]}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    expect(routeComponent.find(TrackList)).toHaveLength(1);
    expect(routeComponent.find(TrackDetails)).toHaveLength(0);
  });
});