import React from 'react';
import './AdminShowList.css';

const AdminShowList = ({ shows, onDeleteShow }) => {
  return (
    <div className="admin-list-container">
      <h3>Manage Shows</h3>
      <ul className="admin-show-list">
        {shows.map((show) => (
          <li key={show.id} className="admin-show-item">
            <img src={show.thumbnailUrl} alt={show.title} className="admin-show-thumbnail" />
            <span className="admin-show-title">{show.title}</span>
            <button onClick={() => onDeleteShow(show.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminShowList;
