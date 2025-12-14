import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const Header = ({ onSelectLive, isLive }) => {
  const { isAuthenticated } = useAuth(); // Get isAuthenticated from context

  return (
    <header className="header">
      <Link to="/" className="logo">
        Delta TV Uganda
        <span style={{ fontSize: '0.6em', display: 'block', fontWeight: 'normal', textDecoration: 'underline' }}>tukole</span>
      </Link>
      <nav className="main-nav">
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSelectLive();
          }}
          className={isLive ? 'active' : ''}
        >
          Live TV
        </a>
        {isAuthenticated && <Link to="/admin">Admin</Link>}
      </nav>
    </header>
  );
};

export default Header;
