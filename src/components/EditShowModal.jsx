import React, { useState } from 'react';

const EditShowModal = ({ show, onUpdateShow, onClose }) => {
  const [title, setTitle] = useState(show.title);
  const [videoUrl, setVideoUrl] = useState(show.videoUrl);
  const [thumbnailUrl, setThumbnailUrl] = useState(show.thumbnailUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateShow({ ...show, title, videoUrl, thumbnailUrl });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content card">
        <h2>Edit Show</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Show Title</label>
            <input
              id="title"
              className="form-control"
              type="text"
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
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <button type="button" className="btn" onClick={onClose} style={{ marginLeft: '0.5rem' }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditShowModal;