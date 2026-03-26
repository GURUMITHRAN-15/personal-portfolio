import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <section className="about about-trigger-class" id="about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-left slide-in-left">
              <h2 className="section-title">About Me</h2>
              <p className="about-text">
                I build practical projects using AI and web technologies. My approach blends creativity with technical problem-solving. I enjoy turning ideas into working products, especially tools that solve real problems.
              </p>
              
              <div className="arrow-svg">
                <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,180 C40,140 100,50 180,20" stroke="#d4d4d4" strokeWidth="2" strokeLinecap="round" fill="transparent" className="draw-arrow"/>
                  <path d="M180,20 L160,25" stroke="#d4d4d4" strokeWidth="2" strokeLinecap="round" fill="transparent" className="draw-arrow"/>
                  <path d="M180,20 L175,40" stroke="#d4d4d4" strokeWidth="2" strokeLinecap="round" fill="transparent" className="draw-arrow"/>
                </svg>
              </div>
            </div>
            
            <div className="about-right slide-in-right">
              <div className="interest-card interactive">
                <div className="interest-icon">🔭</div>
                <div className="interest-content">
                  <h3>Currently Working On</h3>
                  <p>AI-powered applications designed to streamline everyday tasks.</p>
                </div>
              </div>
              <div className="interest-card interactive">
                <div className="interest-icon">🌱</div>
                <div className="interest-content">
                  <h3>Learning & Exploring</h3>
                  <p>Advanced concepts like RAG systems and scalable backend development architectures.</p>
                </div>
              </div>
              <div className="interest-card interactive">
                <div className="interest-icon">⚡</div>
                <div className="interest-content">
                  <h3>My Goal</h3>
                  <p>Building fast, functional, and visually appealing products that matter.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-divider">
        <div className="marquee-content">
          <span>FRONTEND DEVELOPMENT</span> <span className="dot">•</span>
          <span>BACKEND DEVELOPMENT</span> <span className="dot">•</span>
          <span>AI INTEGRATION</span> <span className="dot">•</span>
          <span>RAG SYSTEMS</span> <span className="dot">•</span>
          <span>AUTOMATION</span> <span className="dot">•</span>
          <span>FRONTEND DEVELOPMENT</span> <span className="dot">•</span>
          <span>BACKEND DEVELOPMENT</span> <span className="dot">•</span>
          <span>AI INTEGRATION</span> <span className="dot">•</span>
          <span>RAG SYSTEMS</span> <span className="dot">•</span>
          <span>AUTOMATION</span> <span className="dot">•</span>
        </div>
      </div>
    </>
  );
};

export default About;
