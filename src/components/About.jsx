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
                Backend developer with hands-on experience in Java, Firebase, and SQL — focused on designing APIs, managing databases, and building server-side logic for production-grade applications. Currently expanding into AI-powered systems, combining retrieval-augmented generation with scalable backend architectures.
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
                  <h3>Currently Building</h3>
                  <p>REST APIs and AI-integrated backends using Java, Node.js, and Firebase.</p>
                </div>
              </div>
              <div className="interest-card interactive">
                <div className="interest-icon">🌱</div>
                <div className="interest-content">
                  <h3>Learning & Exploring</h3>
                  <p>RAG pipelines, LLM orchestration, and distributed system design patterns.</p>
                </div>
              </div>
              <div className="interest-card interactive">
                <div className="interest-icon">⚡</div>
                <div className="interest-content">
                  <h3>My Goal</h3>
                  <p>Shipping production-ready systems that are performant, maintainable, and built to scale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-divider">
        <div className="marquee-content">
          <span>JAVA</span> <span className="dot">•</span>
          <span>NODE.JS</span> <span className="dot">•</span>
          <span>REST APIs</span> <span className="dot">•</span>
          <span>SQL & DATABASES</span> <span className="dot">•</span>
          <span>AI INTEGRATION</span> <span className="dot">•</span>
          <span>JAVA</span> <span className="dot">•</span>
          <span>NODE.JS</span> <span className="dot">•</span>
          <span>REST APIs</span> <span className="dot">•</span>
          <span>SQL & DATABASES</span> <span className="dot">•</span>
          <span>AI INTEGRATION</span> <span className="dot">•</span>
        </div>
      </div>
    </>
  );
};

export default About;
