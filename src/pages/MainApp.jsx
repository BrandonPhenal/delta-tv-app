import { useState, useEffect } from 'react';
import './MainApp.css';
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import CatchUp from '../components/CatchUp';

function MainApp({ shows, liveStream }) {
  const [featuredContent, setFeaturedContent] = useState(null);
  const [isLive, setIsLive] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const selectShow = (show) => {
    setIsFading(true);
    setTimeout(() => {
      setFeaturedContent({
        title: show.title,
        url: show.videoUrl,
        description: show.description
      });
      setIsLive(false);
      setIsMuted(false);
      setIsPlaying(true);
      setIsFading(false);
    }, 400);
  };

  const selectLive = (isInitialLoad = false) => {
    setIsFading(true);
    setTimeout(() => {
      setFeaturedContent({
        title: liveStream.title,
        url: liveStream.url,
        description: "You are watching Delta TV live. Enjoy our programming in real-time."
      });
      setIsLive(true);
      setIsMuted(isInitialLoad);
      setIsPlaying(true);
      setIsFading(false);
    }, 400);
  };
  
  useEffect(() => {
    selectLive(true);
  }, []);

  return (
    <div className="main-app-container">
      <Header onSelectLive={() => selectLive(false)} isLive={isLive} />
      <main className={`main-content-area ${isFading ? 'fading' : ''}`}>
        <div className="content-grid">
          <div className="featured-section">
            <VideoPlayer 
              video={featuredContent} 
              playing={isPlaying} 
              muted={isMuted} 
            />
          </div>
          <div className="content-area">
            <CatchUp shows={shows} onSelectShow={selectShow} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainApp;