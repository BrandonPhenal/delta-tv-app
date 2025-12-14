import React, { useState } from 'react';

const AdminPartnerForm = ({ onAddPartner }) => {
  const [name, setName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !logoUrl || !website) {
      alert('Please fill out all fields.');
      return;
    }
    onAddPartner({ name, logoUrl, website });
    setName('');
    setLogoUrl('');
    setWebsite('');
  };

  return (
    <div className="admin-form-container">
      <h3>Add New Partner</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Partner Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            placeholder="e.g., Global Innovations"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="logoUrl">Logo URL</label>
          <input
            id="logoUrl"
            className="form-control"
            type="text"
            placeholder="e.g., https://example.com/logo.png"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website URL</label>
          <input
            id="website"
            className="form-control"
            type="text"
            placeholder="e.g., https://globalinnovations.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Partner</button>
      </form>
    </div>
  );
};

export default AdminPartnerForm;