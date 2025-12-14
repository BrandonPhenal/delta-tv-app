import React, { useState } from 'react';
import AdminForm from '../components/AdminForm';
import AdminShowList from '../components/AdminShowList';
import EditShowModal from '../components/EditShowModal';

const ShowsManager = ({ shows, onAddShow, onUpdateShow, onDeleteShow }) => {
  const [editingShow, setEditingShow] = useState(null);

  const handleEditShow = (show) => {
    setEditingShow(show);
  };

  const handleUpdateShow = (updatedShow) => {
    onUpdateShow(updatedShow);
    setEditingShow(null);
  };

  return (
    <div className="shows-manager-page">
      <h1>Manage Shows</h1>
      <p>Add, edit, or remove shows from the "Catch Up" library.</p>
      <div className="card">
        <AdminForm onAddShow={onAddShow} />
        <AdminShowList 
          shows={shows} 
          onEditShow={handleEditShow} 
          onDeleteShow={onDeleteShow} 
        />
      </div>
      {editingShow && (
        <EditShowModal 
          show={editingShow}
          onUpdateShow={handleUpdateShow}
          onClose={() => setEditingShow(null)}
        />
      )}
    </div>
  );
};

export default ShowsManager;