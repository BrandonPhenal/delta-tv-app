import React, { useState, useEffect } from 'react';
import AdminPartnerForm from '../components/AdminPartnerForm';
import AdminPartnerList from '../components/AdminPartnerList';

const PartnersManager = () => {
  const [partners, setPartners] = useState([]);

  const fetchPartners = () => {
    fetch('http://localhost:3001/partners')
      .then(res => res.json())
      .then(data => setPartners(data));
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const addPartner = (newPartner) => {
    fetch('http://localhost:3001/partners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPartner),
    })
      .then(res => res.json())
      .then(() => fetchPartners()); // Refresh list
  };

  const deletePartner = (partnerId) => {
    fetch(`http://localhost:3001/partners/${partnerId}`, {
      method: 'DELETE',
    })
      .then(() => fetchPartners()); // Refresh list
  };

  return (
    <div className="partners-manager-page">
      <h1>Manage Partners</h1>
      <p>Add or remove partners from the application.</p>
      <div className="card">
        <AdminPartnerForm onAddPartner={addPartner} />
        <AdminPartnerList partners={partners} onDeletePartner={deletePartner} />
      </div>
    </div>
  );
};

export default PartnersManager;