import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import TrackList from './TrackList';
import TrackDetails from './TrackDetails';
import './App.css';

const App = () => (
  <div>
    <h2>Rock Tracks</h2>
    <Router>
      <Switch>
        <Route exact path="/" component={TrackList} />
        <Route path="/track/:trackId" component={TrackDetails}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  </div>
);

export default App;
