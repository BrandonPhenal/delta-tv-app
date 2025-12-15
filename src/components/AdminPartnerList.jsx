import React from 'react';

const AdminPartnerList = ({ partners }) => {
  return (
    <div className="admin-list-container">
      <h3>Existing Partners</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr key={partner.id}>
              <td>
                <img src={partner.logoUrl} alt={partner.name} width="100" loading="lazy" />
              </td>
              <td>{partner.name}</td>
              <td><a href={partner.website} target="_blank" rel="noopener noreferrer">{partner.website}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPartnerList;