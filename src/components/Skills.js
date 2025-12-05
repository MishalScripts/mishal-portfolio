import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: '🎨 Frontend Development',
      skills: 'React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Material-UI, Framer Motion'
    },
    {
      title: '⚙️ Backend Development',
      skills: 'Node.js, Express.js, Python, FastAPI, RESTful APIs, GraphQL, WebSockets'
    },
    {
      title: '🔗 Blockchain & Web3',
      skills: 'Solidity, Ethers.js, Web3.js, Smart Contracts, DeFi, NFTs, Ethereum, Polygon'
    },
    {
      title: '🗄️ Databases',
      skills: 'MongoDB, PostgreSQL, MySQL, Redis, Firebase, Supabase'
    },
    {
      title: '☁️ Cloud & DevOps',
      skills: 'AWS, Google Cloud, Docker, GitHub Actions, CI/CD, Vercel, Netlify'
    },
    {
      title: '🛠️ Tools & Others',
      skills: 'Git, GitHub, VS Code, Postman, Figma, Agile/Scrum'
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">🚀 Skills</h2>
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
