import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">📬 Get In Touch</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
      </p>
      
      <div className="social-links">
        <a href="https://github.com/MishalHQ" className="social-link" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://github.com/MishalScripts" className="social-link" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/mishal" className="social-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/mishal" className="social-link" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:officialzenvomart@gmail.com" className="social-link">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
