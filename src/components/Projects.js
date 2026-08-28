import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Automated Attendance System',
      description: 'A comprehensive attendance management system implementing multiple authentication methods including Face Recognition, QR Code, RFID, and Fingerprint scanning.',
      tech: ['Python', 'OpenCV', 'Machine Learning', 'IoT'],
      icon: '🎯'
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Collection of AI and ML projects including predictive models, classification systems, and data analysis tools developed during internship and academic work.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Data Science'],
      icon: '🤖'
    },
    {
      title: 'Web Applications',
      description: 'Various web applications built using modern frameworks and technologies, focusing on responsive design and user experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      icon: '🌐'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">🎯 Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-banner">
              {project.icon} {project.title}
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
