import React, { useState, useEffect } from 'react';
import AdminPartnerList from '../components/AdminPartnerList';

const PartnersManager = () => {
  const [partners, setPartners] = useState([]);

  const fetchPartners = () => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setPartners(data.partners));
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <div className="partners-manager-page">
      <h1>View Partners</h1>
      <p>This is a list of partners in the application.</p>
      <div className="card">
        <AdminPartnerList partners={partners} />
      </div>
    </div>
  );
};

export default PartnersManager;