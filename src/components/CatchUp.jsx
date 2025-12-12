import React from 'react';
import './CatchUp.css';

const CatchUp = ({ shows, onSelectShow }) => {
  return (
    <div className="catchup-container">
      <h3 className="catchup-title">Catch Up</h3>
      <div className="shows-grid">
        {shows.map((show) => (
          <div key={show.id} className="show-card" onClick={() => onSelectShow(show)}>
            <img src={show.thumbnailUrl} alt={show.title} className="show-thumbnail" />
            <div className="show-info">
              <h4 className="show-title">{show.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatchUp;