import React from 'react';
import AdminShowList from '../components/AdminShowList';

const ShowsManager = ({ shows }) => {
  return (
    <div className="shows-manager-page">
      <h1>View Shows</h1>
      <p>This is a list of shows in the "Catch Up" library.</p>
      <div className="card">
        <AdminShowList 
          shows={shows} 
        />
      </div>
    </div>
  );
};

export default ShowsManager;