import React, { useState } from 'react';
import './AdminForm.css';

const AdminForm = ({ onAddShow }) => {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !videoUrl || !thumbnailUrl) {
      alert('Please fill out all fields.');
      return;
    }
    onAddShow({ title, videoUrl, thumbnailUrl });
    setTitle('');
    setVideoUrl('');
    setThumbnailUrl('');
  };

  return (
    <div className="admin-form-container">
      <h3>Add New Show</h3>
      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          placeholder="Show Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Thumbnail URL"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
        <button type="submit">Add Show</button>
      </form>
    </div>
  );
};

export default AdminForm;
