import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = ({ video, playing, muted }) => {
  // If there's no video, don't render the player.
  // MainApp will handle the loading state.
  if (!video) {
    return (
      <div className="featured-player-container">
        <div className="player-wrapper">
          {/* Placeholder for loading state, can be a spinner */}
        </div>
        <div className="featured-info">
          <h2 className="featured-title">Loading...</h2>
          <p className="featured-description"></p>
        </div>
      </div>
    );
  }

  return (
    <div className="featured-player-container">
      <div className="player-wrapper">
        <ReactPlayer
          // This key prop is crucial for cleanly switching sources.
          key={video.url} 
          className="react-player"
          url={video.url}
          playing={playing}
          muted={muted}
          controls={true}
          width="100%"
          height="100%"
          config={{
            file: {
              hlsOptions: {
                // HLS options can be configured here
              },
            },
          }}
        />
      </div>
      <div className="featured-info">
        <h2 className="featured-title">{video.title}</h2>
        <p className="featured-description">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
