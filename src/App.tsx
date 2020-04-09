import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import actions from './redux/actions/actions';
import selectors from './redux/selectors';
import { Action, Track, State } from './types';
import './App.css';

interface StateProps {
  tracks: Track[];
}

interface ActionProps {
  fetchTracks: () => Action;
}

const App = ({ fetchTracks, tracks }: StateProps & ActionProps) => {
  React.useEffect(() => {
    // on mount fetch track info
    fetchTracks();
  }, [fetchTracks]);

  console.log('tracks!', tracks);
  
  return (
    <div className="App">

    </div>
  );
}


const mapStateToProps = (state: State): StateProps => ({
  tracks: selectors.getTracks(state),
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  fetchTracks: () => dispatch(actions.fetchTracks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
