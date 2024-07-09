import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave">
        <path d="M0,0 C300,100 600,0 900,100 L1200,120 L0,120 Z" className="wave1"></path>
        <path d="M0,0 C300,80 600,0 900,80 L1200,120 L0,120 Z" className="wave2"></path>
        <path d="M0,0 C300,60 600,0 900,60 L1200,120 L0,120 Z" className="wave3"></path>
      </svg>
    </div>
  );
};

export default Footer;
