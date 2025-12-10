import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Game QA Tester',
      company: 'Indium Software',
      duration: 'Nov 2024 - Present',
      responsibilities: [
        'Conducting comprehensive testing of gaming applications to identify bugs, glitches, and performance issues',
        'Collaborating with development teams to ensure high-quality game releases',
        'Documenting test cases and providing detailed bug reports',
        'Participating in regression testing and quality assurance processes'
      ]
    },
    {
      title: 'Intern - Artificial Intelligence',
      company: 'Verzeo',
      duration: 'Jun 2023 - Aug 2023',
      responsibilities: [
        'Developed and implemented machine learning models for real-world applications',
        'Worked on data preprocessing, feature engineering, and model optimization',
        'Collaborated with cross-functional teams on AI-driven projects',
        'Gained hands-on experience with Python, TensorFlow, and scikit-learn'
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">💼 Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
              </div>
              <span className="duration">{exp.duration}</span>
            </div>
            <ul>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
