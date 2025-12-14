import React, { useRef } from 'react';

const CatchUp = ({ shows, onSelectShow }) => {
  const catchUpShows = shows.filter(show => show.isCatchUp);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust as needed
      if (direction === 'left') {
        scrollRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      } else {
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="card">
      <h3>Catch Up</h3>
      <div className="horizontal-scroll-container">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
        <div className="horizontal-scroll" ref={scrollRef}>
          {catchUpShows.map((show) => (
            <div key={show.id} className="show-card-detailed" onClick={() => onSelectShow(show)}>
              <img src={show.thumbnailUrl} alt={show.title} className="show-thumbnail-detailed" loading="lazy" />
              <div className="show-info-detailed">
                <h4 className="show-title-detailed">{show.title}</h4>
                <p className="show-description-detailed">{show.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </div>
  );
};

export default CatchUp;