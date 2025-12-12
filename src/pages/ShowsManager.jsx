import React from 'react';
import AdminForm from '../components/AdminForm';
import AdminShowList from '../components/AdminShowList';
import './ShowsManager.css';

const ShowsManager = ({ shows, onAddShow, onDeleteShow }) => {
  return (
    <div className="shows-manager-page">
      <h1>Manage Shows</h1>
      <p>Add, edit, or remove shows from the "Catch Up" library.</p>
      <div className="manager-content">
        <AdminForm onAddShow={onAddShow} />
        <AdminShowList shows={shows} onDeleteShow={onDeleteShow} />
      </div>
    </div>
  );
};

export default ShowsManager;