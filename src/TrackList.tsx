import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';
import actions from './redux/actions/actions';
import selectors from './redux/selectors';
import { Action, Track, State } from './types';

interface StateProps {
  tracks: Track[];
  error?: string;
}

interface ActionProps {
  fetchTracks: () => Action;
  setTrack: (tr?: Track) => Action;
}

export const TrackList = ({ fetchTracks, tracks, error, setTrack }: StateProps & ActionProps) => {
  let history = useHistory();
  React.useEffect(() => {
    // on mount fetch track info
    fetchTracks();
    setTrack(undefined);
  }, [fetchTracks, setTrack]);

  const handleShowTrackDetails = (track: Track) => () => {
    setTrack(track);
    history.push(`/track/${track.trackId}`)
  };

  return (
    <>
      {error && <p>{error}</p>}
      {tracks && tracks.length > 0 &&
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
      }
    </>
  );
}


const mapStateToProps = (state: State): StateProps => ({
  tracks: selectors.getTracks(state),
  error: selectors.getError(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  fetchTracks: () => dispatch(actions.fetchTracks()),
  setTrack: (track?: Track) => dispatch(actions.setTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
