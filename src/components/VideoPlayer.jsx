import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ video, playing, muted }) => {
  const [streamError, setStreamError] = useState(false);

  const handlePlayerError = () => {
    setStreamError(true);
  };
  
  if (!video) {
    return (
      <div className="video-player-wrapper">
        <div className="player-placeholder">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        key={video.url}
        className="react-player"
        url={video.url}
        playing={playing}
        muted={muted}
        controls={true}
        width="100%"
        height="100%"
        onError={handlePlayerError}
        config={{
          file: {
            hlsOptions: {},
          },
        }}
      />
      {streamError && (
        <div className="stream-error-overlay">
          <h2>Stream Unavailable</h2>
          <p>This content is currently offline. Please try again later.</p>
        </div>
      )}
       <div className="featured-info">
        <h2 className="featured-title">{video.title}</h2>
        <p className="featured-description">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
