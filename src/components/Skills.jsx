import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <div className="section-header fade-in-up">
          <span className="section-tag">🛠️ Expertise</span>
          <h2 className="section-title">My Technical Toolkit</h2>
          <p className="section-subtitle">Backend-first engineering stack — from API design to database optimization and AI integration.</p>
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
              <span className="skill-tag interactive" title="Backend logic, OOP, Spring Boot basics">Java</span>
              <span className="skill-tag interactive" title="Scripting, FastAPI, automation pipelines">Python</span>
              <span className="skill-tag interactive" title="Schema design, queries, joins, indexing">SQL</span>
              <span className="skill-tag interactive" title="DOM manipulation, async/await, APIs">JavaScript</span>
              <span className="skill-tag interactive" title="Semantic markup, accessibility">HTML5</span>
              <span className="skill-tag interactive" title="Responsive layouts, animations">CSS3</span>
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
              <span className="skill-tag interactive" title="Auth, Firestore, real-time databases">Firebase</span>
              <span className="skill-tag interactive" title="Express.js, REST API development">Node.js</span>
              <span className="skill-tag interactive" title="High-performance Python APIs">FastAPI</span>
              <span className="skill-tag interactive" title="Component-based UI development">React</span>
              <span className="skill-tag interactive" title="Fast builds, HMR, modern bundling">Vite</span>
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
              <span className="skill-tag interactive" title="Document Q&A with vector search">RAG Systems</span>
              <span className="skill-tag interactive" title="OpenAI, Gemini API orchestration">LLM Integration</span>
              <span className="skill-tag interactive" title="n8n workflows, scheduled pipelines">Automation</span>
              <span className="skill-tag interactive" title="API design, caching, load handling">Scalable Backends</span>
            </div>
          </div>

          <div className="skill-category fade-in-up" style={{ transitionDelay: '0.4s' }}>
            <div className="skill-header">
              <div className="skill-icon-wrapper">
                <i className="ri-seedling-line"></i>
              </div>
              <h3>Currently Exploring</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag interactive" title="Exploring workflow automation and AI agent integration">n8n</span>
              <span className="skill-tag interactive" title="Learning to build basic task automation via LLM workflows">AI Agents</span>
              <span className="skill-tag interactive" title="Exploring core concepts and beginner implementations">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
