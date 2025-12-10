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
          <p className="subtitle">Information Science Engineering Student | AI Enthusiast</p>
          
          <div className="current-role">
            🎮 Currently: Game QA Tester @ Indium Software
          </div>

          <p className="summary">
            A goal-oriented Information Science Engineering student with a passion for mastering 
            emerging technologies. Skilled at transforming ideas into actionable projects, with a 
            strong focus on innovation. Dedicated to building a career that merges technical 
            expertise with real-world impact.
          </p>

          <div className="hero-buttons">
            <div className="github-dropdown">
              <button className="btn-primary">
                <FaGithub /> GitHub Projects
              </button>
              <div className="github-menu">
                <a href="https://github.com/MishalScripts/Automated-Attendance-System" target="_blank" rel="noopener noreferrer">
                  Automated Attendance System
                </a>
                <a href="https://github.com/MishalScripts/Automated-Attendance-System-using-Face-Recognition" target="_blank" rel="noopener noreferrer">
                  Face Recognition Attendance
                </a>
                <a href="https://github.com/MishalScripts/Automated-Attendance-System-using-QR-Code" target="_blank" rel="noopener noreferrer">
                  QR Code Attendance
                </a>
                <a href="https://github.com/MishalScripts/Automated-Attendance-System-using-RFID" target="_blank" rel="noopener noreferrer">
                  RFID Attendance
                </a>
                <a href="https://github.com/MishalScripts/Automated-Attendance-System-using-Fingerprint" target="_blank" rel="noopener noreferrer">
                  Fingerprint Attendance
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
              <p>📱 <a href="tel:+919353653653">+91 9353653653</a></p>
              <p>📍 Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
