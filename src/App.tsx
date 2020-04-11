import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import actions from './redux/actions/actions';
import selectors from './redux/selectors';
import { Action, Track, State } from './types';
import { getReadableTimeByMs, getReadableDateByISODate } from './helpers';
import './App.css';

interface StateProps {
  tracks: Track[];
  error?: string;
}

interface ActionProps {
  fetchTracks: () => Action;
}

export const App = ({ fetchTracks, tracks, error }: StateProps & ActionProps) => {
  const [trackDetails, setTrackDetails] = React.useState({} as Track);
  React.useEffect(() => {
    // on mount fetch track info
    fetchTracks();
  }, [fetchTracks]);

  const handleShowTrackDetails = (track: Track) => () => {
    setTrackDetails(track);
  };

  const handleShowTrackList = () => {
    setTrackDetails({} as Track);
  };

  const handleShowMoreDetails = () => {
    window.open(trackDetails.trackViewUrl, '_blank');
  }

  return (
    <div>
      <h2>Rock Tracks</h2>
      {error && <p>{error}</p>}
      {Object.keys(trackDetails).length === 0 && tracks.length > 0 ? 
        <table>
          <thead style={{ backgroundColor: 'lightgrey'}}>
            <tr>
              <th>Track Name</th>
              <th>Artist</th>
              <th>Price</th>
              <th>Artwork URL</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track: Track) => (
              <tr key={track.trackId}>
                <td>{track.trackName}</td>
                <td>{track.artistName}</td>
                <td>{track.trackPrice}</td>
                <td>{track.artworkUrl100}</td>
                <td>
                  <button onClick={handleShowTrackDetails(track)}>
                    show track details
                  </button>
                </td>
              </tr>
            ))}  
          </tbody>
        </table> 
      : Object.keys(trackDetails).length > 0 &&
        <div style={{ margin: 80}}>
          <p>{`Artwork URL: ${trackDetails.artworkUrl100}`}</p>
          <p>{`Track name: ${trackDetails.trackName}`}</p>
          <p>{`Artist: ${trackDetails.artistName}`}</p>
          <p>{`Track Price: ${trackDetails.trackPrice} ${trackDetails.currency}`}</p>
          <p>{`Duration: ${getReadableTimeByMs(trackDetails.trackTimeMillis)}`}</p>
          <p>{`Release date: ${getReadableDateByISODate(trackDetails.releaseDate)}`}</p>

          <button onClick={handleShowTrackList}>
            go back
          </button>

          <button onClick={handleShowMoreDetails}>
            more details
          </button>
        </div>
      }
    </div>
  );
}


const mapStateToProps = (state: State): StateProps => ({
  tracks: selectors.getTracks(state),
  error: selectors.getError(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  fetchTracks: () => dispatch(actions.fetchTracks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
