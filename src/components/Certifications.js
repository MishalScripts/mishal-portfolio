import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: '🎓 Artificial Intelligence Certification',
      issuer: 'Verzeo - 2023',
      link: '#'
    },
    {
      title: '🐍 Python Programming',
      issuer: 'Online Certification - 2022',
      link: '#'
    },
    {
      title: '🌐 Web Development',
      issuer: 'Online Certification - 2022',
      link: '#'
    },
    {
      title: '📊 Data Science Fundamentals',
      issuer: 'Online Certification - 2023',
      link: '#'
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="section-title">🏆 Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <a 
            key={index} 
            href={cert.link} 
            className="cert-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>{cert.title}</h4>
            <p>{cert.issuer}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
