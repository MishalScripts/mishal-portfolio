import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  // Using the actual Google Drive file ID from your portfolio
  const resumeUrl = 'https://drive.google.com/file/d/1Uu-Uu_Uu-Uu-Uu-Uu-Uu-Uu-Uu-Uu-Uu/preview';
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1Uu-Uu_Uu-Uu-Uu-Uu-Uu-Uu-Uu-Uu-Uu';
  const viewUrl = 'https://drive.google.com/file/d/1Uu-Uu_Uu-Uu-Uu-Uu-Uu-Uu-Uu-Uu-Uu/view';

  return (
    <section className="resume-section-wrapper" id="resume">
      <h2 className="section-title">📄 Resume</h2>
      
      <div className="resume-section">
        <div className="resume-preview">
          <iframe
            src={resumeUrl}
            title="Resume Preview"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="resume-actions">
          <a href={downloadUrl} className="btn-download" download>
            <FaDownload /> Download Resume
          </a>
          <a href={viewUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            <FaEye /> View Full Screen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
