import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'mithranGPT',
    description: 'A custom AI-powered chatbot application leveraging modern LLM capabilities.',
    tags: ['AI', 'LLM', 'Chatbot'],
    link: 'https://github.com/GURUMITHRAN-15/mithranGPT'
  },
  {
    title: 'ai-news-automation-n8n',
    description: 'An automated news aggregation and processing workflow built using n8n for efficient data pipelines.',
    tags: ['n8n', 'Automation', 'News'],
    link: 'https://github.com/GURUMITHRAN-15/ai-news-automation-n8n'
  },
  {
    title: 'ipl-auction',
    description: 'A comprehensive IPL auction simulation or tracking system.',
    tags: ['Web', 'Simulation'],
    link: 'https://github.com/GURUMITHRAN-15/ipl-auction'
  },
  {
    title: 'YT-DISTRACTION',
    description: 'A productivity tool designed to manage and reduce YouTube distractions for focused work.',
    tags: ['Productivity', 'Tool'],
    link: 'https://github.com/GURUMITHRAN-15/YT-DISTRACTION'
  },
  {
    title: 'moviesda-mcp',
    description: 'An MCP (Model Context Protocol) server integration for movie data.',
    tags: ['MCP', 'Integration'],
    link: 'https://github.com/GURUMITHRAN-15/moviesda-mcp'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="section-header fade-in-up">
          <span className="section-tag">💻 Latest Works</span>
          <h2 className="section-title">Open Source Projects</h2>
          <p className="section-subtitle">A collection of my recent GitHub repositories focusing on AI, automation, and web development.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="project-card fade-in-up" 
              style={{ transitionDelay: `${0.1 * (index % 3)}s` }}
            >
              <div className="project-content">
                <div className="project-header">
                  <i className="ri-github-fill project-icon"></i>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link interactive"
              >
                View Repository <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
