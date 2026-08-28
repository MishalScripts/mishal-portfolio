import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Mishal. Built with React & ❤️</p>
      <p>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
