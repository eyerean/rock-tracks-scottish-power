import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import selectors from './redux/selectors';
import { Track, State } from './types';
import { getReadableTimeByMs, getReadableDateByISODate } from './helpers';
import './App.css';

interface StateProps {
  track?: Track;
}

export const TrackDetails = ({ track }: StateProps) => {
  let history = useHistory();

  const handleShowTrackList = () => {
    history.push('/');
  };

  const handleShowMoreDetails = (url: string) => () => {
    window.open(url, '_blank');
  }

    return (
      <div style={{ margin: 80}}>
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
          <p>No Track found</p>
        }
      </div>
    );
  }

const mapStateToProps = (state: State): StateProps => ({
  track: selectors.getTrack(state)
});

export default connect(mapStateToProps)(TrackDetails);
