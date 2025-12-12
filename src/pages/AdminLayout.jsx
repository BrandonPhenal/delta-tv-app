import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminLayout.css';

const AdminLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Delta TV Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/admin/dashboard" className="nav-item">Dashboard</NavLink>
          <NavLink to="/admin/shows" className="nav-item">Shows</NavLink>
        </nav>
        <div className="sidebar-footer">
          <NavLink to="/" className="nav-item">
            &larr; Back to App
          </NavLink>
          <button onClick={handleLogout} className="logout-button-sidebar">
            Logout
          </button>
        </div>
      </aside>
      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
