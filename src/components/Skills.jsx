import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <div className="section-header fade-in-up">
          <span className="section-tag">🛠️ Expertise</span>
          <h2 className="section-title">My Technical toolkit</h2>
          <p className="section-subtitle">Crafting digital experiences using modern tools and robust architectures.</p>
        </div>

        <div className="skills-grid">
          <div className="skill-category fade-in-up" style={{ transitionDelay: '0.1s' }}>
            <div className="skill-header">
              <div className="skill-icon-wrapper">
                <i className="ri-terminal-box-line"></i>
              </div>
              <h3>Languages</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag interactive">Python</span>
              <span className="skill-tag interactive">Java</span>
              <span className="skill-tag interactive">JavaScript</span>
              <span className="skill-tag interactive">HTML5</span>
              <span className="skill-tag interactive">CSS3</span>
            </div>
          </div>
          
          <div className="skill-category fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="skill-header">
              <div className="skill-icon-wrapper">
                <i className="ri-settings-4-line"></i>
              </div>
              <h3>Tools & Frameworks</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag interactive">FastAPI</span>
              <span className="skill-tag interactive">Firebase</span>
              <span className="skill-tag interactive">React</span>
              <span className="skill-tag interactive">Vite</span>
            </div>
          </div>
          
          <div className="skill-category fade-in-up" style={{ transitionDelay: '0.3s' }}>
            <div className="skill-header">
              <div className="skill-icon-wrapper">
                <i className="ri-brain-line"></i>
              </div>
              <h3>AI & Specialities</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag interactive">RAG Systems</span>
              <span className="skill-tag interactive">LLM Integration</span>
              <span className="skill-tag interactive">Automation</span>
              <span className="skill-tag interactive">Scalable Backends</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
