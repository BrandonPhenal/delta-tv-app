import React, { useState } from 'react';

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
    onAddShow({ title, videoUrl, thumbnailUrl, isCatchUp: true, views: 0 });
    setTitle('');
    setVideoUrl('');
    setThumbnailUrl('');
  };

  return (
    <div className="admin-form-container">
      <h3>Add New Show</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Show Title</label>
          <input
            id="title"
            className="form-control"
            type="text"
            placeholder="e.g., Late Night News"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videoUrl">Video URL</label>
          <input
            id="videoUrl"
            className="form-control"
            type="text"
            placeholder="e.g., https://example.com/video.mp4"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="thumbnailUrl">Thumbnail URL</label>
          <input
            id="thumbnailUrl"
            className="form-control"
            type="text"
            placeholder="e.g., https://example.com/thumb.jpg"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Show</button>
      </form>
    </div>
  );
};

export default AdminForm;
