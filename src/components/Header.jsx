import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = ({ onSelectLive, isLive }) => {
  return (
    <header className="app-header">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <nav className="navigation">
        <button 
          onClick={onSelectLive} 
          className={`nav-button ${isLive ? 'active' : ''}`}
        >
          Live TV
        </button>
      </nav>
    </header>
  );
};

export default Header;
