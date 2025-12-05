import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Echo OS',
      description: 'A modern operating system interface built with React, featuring a desktop environment with draggable windows, file system, and applications.',
      tech: ['React', 'TypeScript', 'CSS3']
    },
    {
      title: 'Bhindi Platform',
      description: 'AI-powered automation platform with 200+ integrations, enabling users to connect apps and automate workflows seamlessly.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI/ML']
    },
    {
      title: 'DeFi Dashboard',
      description: 'Comprehensive DeFi analytics dashboard tracking portfolio, yields, and market data across multiple blockchain networks.',
      tech: ['React', 'Web3.js', 'Ethers.js', 'Chart.js']
    },
    {
      title: 'NFT Marketplace',
      description: 'Decentralized marketplace for creating, buying, and selling NFTs with smart contract integration and IPFS storage.',
      tech: ['Next.js', 'Solidity', 'IPFS', 'Polygon']
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">🎯 Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-banner">
              {project.title}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
