import React from 'react';
import './Logo.css';

const Logo = () => (
  <div className="logo-container">
    <svg width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="delta-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00AEEF" />
          <stop offset="100%" stopColor="#0072B5" />
        </linearGradient>
      </defs>

      {/* Big 'D' */}
      <text
        x="0"
        y="45"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="50"
        fontWeight="bold"
        fill="url(#delta-gradient)"
      >
        D
      </text>

      {/* DELTA TV and TUKOLE */}
      <text
        x="45"
        y="25"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="#FFFFFF"
      >
        DELTA TV
      </text>
      <text
        x="45"
        y="45"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="14"
        fill="#A0AEC0"
      >
        TUKOLE
      </text>
    </svg>
  </div>
);

export default Logo;

