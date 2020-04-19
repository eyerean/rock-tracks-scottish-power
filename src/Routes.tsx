import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import TrackList from './pages/TrackList';
import TrackDetails from './pages/TrackDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TrackList} />
    <Route path="/track/:trackId" component={TrackDetails}/>
    <Redirect to="/" />
  </Switch>
);

export default Routes;