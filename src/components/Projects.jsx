import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'mithranGPT',
    description: 'Generic chatbots lack contextual depth. Built a custom conversational AI with LLM API integration, session memory, and streaming responses. Tech: JavaScript, LLM APIs. Handles multi-turn conversations with sub-second response latency.',
    tags: ['JavaScript', 'LLM API', 'Streaming'],
    link: 'https://github.com/GURUMITHRAN-15/mithranGPT'
  },
  {
    title: 'ai-news-automation-n8n',
    description: 'Manual news curation is time-intensive. Designed an automated pipeline using n8n that aggregates, filters, and delivers AI-curated news summaries on schedule. Tech: n8n, APIs, Webhooks. Processes 100+ articles daily with zero manual input.',
    tags: ['n8n', 'Automation', 'APIs'],
    link: 'https://github.com/GURUMITHRAN-15/ai-news-automation-n8n'
  },
  {
    title: 'ipl-auction',
    description: 'Managing fantasy league auctions manually causes disputes. Built a real-time auction platform with budget tracking, bid validation, and live player allocation. Tech: JavaScript, Firebase. Supports 10+ concurrent users with real-time sync.',
    tags: ['JavaScript', 'Firebase', 'Real-time'],
    link: 'https://github.com/GURUMITHRAN-15/ipl-auction'
  },
  {
    title: 'YT-DISTRACTION',
    description: 'YouTube\'s recommendation algorithm reduces productivity. Built a browser-level tool that blocks distracting elements and enforces focus sessions. Tech: JavaScript, Browser APIs. Reduces average distraction time by blocking feed and autoplay.',
    tags: ['JavaScript', 'Browser APIs', 'Productivity'],
    link: 'https://github.com/GURUMITHRAN-15/YT-DISTRACTION'
  },
  {
    title: 'moviesda-mcp',
    description: 'LLMs cannot access live movie databases natively. Built an MCP server that exposes structured movie data to AI models via the Model Context Protocol. Tech: Node.js, MCP SDK. Enables real-time data retrieval within AI conversations.',
    tags: ['Node.js', 'MCP', 'AI Integration'],
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
          <p className="section-subtitle">Production-oriented projects spanning backend systems, API integrations, and AI-powered automation.</p>
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
