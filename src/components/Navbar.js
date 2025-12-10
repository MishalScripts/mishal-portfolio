import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">MISHAL</div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#resume" onClick={() => setMobileMenuOpen(false)}>Resume</a></li>
          <li><a href="#suggestions" onClick={() => setMobileMenuOpen(false)}>Suggestions</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        <div 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
