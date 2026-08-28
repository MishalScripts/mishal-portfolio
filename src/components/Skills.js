import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: '💻 Programming Languages',
      skills: 'Python, Java, C, C++, JavaScript, SQL'
    },
    {
      title: '🤖 AI & Machine Learning',
      skills: 'TensorFlow, Scikit-learn, Pandas, NumPy, Deep Learning, Neural Networks'
    },
    {
      title: '🌐 Web Development',
      skills: 'HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB'
    },
    {
      title: '🛠️ Tools & Technologies',
      skills: 'Git, GitHub, VS Code, Jupyter Notebook, Docker, Linux'
    },
    {
      title: '🎮 Game Testing',
      skills: 'Bug Tracking, Test Case Design, Regression Testing, Performance Testing'
    },
    {
      title: '💡 Soft Skills',
      skills: 'Problem Solving, Team Collaboration, Communication, Time Management, Adaptability'
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">🚀 Skills & Expertise</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <p>{category.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
