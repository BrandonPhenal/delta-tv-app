import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Delta TV Admin</h2>
        <nav className="admin-nav">
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/shows">Shows</NavLink>
          <NavLink to="/admin/partners">Partners</NavLink>
        </nav>
        <div className="sidebar-footer">
          <NavLink to="/" className="nav-item">
            &larr; Back to App
          </NavLink>
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        </div>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
