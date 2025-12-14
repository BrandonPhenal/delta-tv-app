import React from 'react';

const AdminShowList = ({ shows, onEditShow, onDeleteShow }) => {
  return (
    <div className="admin-list-container">
      <h3>Existing Shows</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shows.map((show) => (
            <tr key={show.id}>
              <td>
                <img src={show.thumbnailUrl} alt={show.title} width="100" loading="lazy" />
              </td>
              <td>{show.title}</td>
              <td>
                <button onClick={() => onEditShow(show)} className="btn">
                  Edit
                </button>
                <button onClick={() => onDeleteShow(show.id)} className="btn btn-danger" style={{ marginLeft: '0.5rem' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminShowList;
