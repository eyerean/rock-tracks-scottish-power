import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import selectors from './redux/selectors';
import { Track, State } from './types';
import { getReadableTimeByMs, getReadableDateByISODate } from './helpers';
import './App.css';
import actions from './redux/actions/actions';
import { Dispatch } from 'redux';
import { StateProps, ActionProps } from './TrackList';

interface Props extends StateProps, ActionProps {
  track?: Track;
}
export const TrackDetails = ({ track, fetchTracks, tracks, setTrack, error, fetching }: Props ) => {
  let history = useHistory();
  let { trackId } = useParams();
  const [trackError, setTrackError] = React.useState('');

  React.useEffect(() => {
    if(trackId && !track){
      // if track not found in store, fetch them all again
      fetchTracks();
    }
  }, [trackId, track, fetchTracks]);

  React.useEffect(() => {
    if(trackId && tracks){
      // when tracks are fetched find the track based on the track id of the url params
      const foundTrack = tracks.find((tr: Track) => tr.trackId.toString() === trackId);
      if(foundTrack){
        setTrack(foundTrack);
        setTrackError('');
      }else{
        setTrack(undefined);
        setTrackError(`No track found with id ${trackId}`);
      }
    }
  }, [trackId, tracks, setTrack]);

  const handleShowTrackList = () => {
    history.push('/');
  };

  const handleShowMoreDetails = (url: string) => () => {
    window.open(url, '_blank');
  }

    return (
      <div style={{ margin: 80}}>
        {error && <p>{error}</p>}
        {track ?
          <>
            <p>{`Artwork URL: ${track.artworkUrl100}`}</p>
            <p>{`Track name: ${track.trackName}`}</p>
            <p>{`Artist: ${track.artistName}`}</p>
            <p>{`Track Price: ${track.trackPrice} ${track.currency}`}</p>
            <p>{`Duration: ${getReadableTimeByMs(track.trackTimeMillis)}`}</p>
            <p>{`Release date: ${getReadableDateByISODate(track.releaseDate)}`}</p>

            <button onClick={handleShowTrackList}>
              go back
            </button>

            <button onClick={handleShowMoreDetails(track.trackViewUrl)}>
              more details
            </button>
          </>
        : 
          fetching ? <p>Fetching track...</p>
          : trackError && <>
            <p>{trackError}</p>
            <button onClick={handleShowTrackList}>
              back to home page
            </button>
          </>
        }
      </div>
    );
  }

const mapStateToProps = (state: State): StateProps & Pick<Props, 'track'> => ({
  track: selectors.getTrack(state),
  tracks: selectors.getTracks(state),
  error: selectors.getError(state),
  fetching: selectors.getFetchingState(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  fetchTracks: () => dispatch(actions.fetchTracks()),
  setTrack: (track?: Track) => dispatch(actions.setTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetails);
