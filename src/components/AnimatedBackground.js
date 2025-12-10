import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="animated-bg">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      <div className="grid-overlay"></div>
      <div 
        className="spotlight" 
        style={{ 
          left: `${mousePosition.x - 300}px`, 
          top: `${mousePosition.y - 300}px` 
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
