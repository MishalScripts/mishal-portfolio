import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="name-highlight">Mishal</span>
          </h1>
          <p className="subtitle">Full Stack Developer & Blockchain Enthusiast</p>
          
          <div className="current-role">
            🚀 Currently Building at Bhindi HQ
          </div>

          <p className="summary">
            Passionate about creating innovative solutions with modern technologies. 
            Experienced in full-stack development, blockchain, and building scalable applications 
            that make a difference.
          </p>

          <div className="hero-buttons">
            <div className="github-dropdown">
              <button className="btn-primary">
                <FaGithub /> GitHub Profiles
              </button>
              <div className="github-menu">
                <a href="https://github.com/MishalHQ" target="_blank" rel="noopener noreferrer">
                  MishalHQ (Main)
                </a>
                <a href="https://github.com/MishalScripts" target="_blank" rel="noopener noreferrer">
                  MishalScripts (Projects)
                </a>
              </div>
            </div>
            
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-img-container">
              <img 
                src="https://raw.githubusercontent.com/MishalScripts/mishal-portfolio/main/photo.jpg" 
                alt="Mishal" 
                className="profile-img"
              />
            </div>
            <div className="contact-info">
              <p>📧 <a href="mailto:officialzenvomart@gmail.com">officialzenvomart@gmail.com</a></p>
              <p>📍 Bangalore, Karnataka, India</p>
              <p>💼 Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
