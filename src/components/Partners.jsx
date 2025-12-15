import React, { useState, useEffect } from 'react';

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setPartners(data.partners));
  }, []);

  return (
    <div className="card partners-section">
      <h3>Our Partners</h3>
      <div className="partners-grid">
        {partners.map((partner) => (
          <a key={partner.id} href={partner.website} target="_blank" rel="noopener noreferrer" className="partner-card">
            <img src={partner.logoUrl} alt={partner.name} className="partner-logo" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;