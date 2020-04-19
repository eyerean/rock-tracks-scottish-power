import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './Routes';
import './App.css';

const App = () => (
  <Router>
    <div>
      <h2>Rock Tracks</h2>
      <Routes />
    </div>
  </Router>
);

export default App;
