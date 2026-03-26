import React from 'react';
import './Hero.css';
import profileImg from '../image.jpeg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-stats">
          <div className="stat-item hero-fade-up">
            <span className="stat-icon">🎓</span>
            <div className="stat-text">B.Tech<br />ECE Student</div>
          </div>
          <div className="stat-item hero-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="stat-icon">📍</span>
            <div className="stat-text">Based in<br />India</div>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title hero-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="hello-text">Hello</span><br />
            <span className="name-text">I'm Gurumithran V.</span>
          </h1>
          <p className="hero-subtitle hero-fade-up" style={{ animationDelay: '0.3s' }}>
            — Developer focused on AI, Web Development, and Automation
          </p>
        </div>

        <div className="hero-image-wrapper hero-fade" style={{ animationDelay: '0.4s' }}>
          <img src={profileImg} alt="Gurumithran V." className="hero-image interactive" />
        </div>
      </div>

      <a href="#about" className="scroll-down hero-fade interactive" style={{ animationDelay: '0.6s' }}>
        Scroll Down <i className="ri-arrow-down-line"></i>
      </a>
    </section>
  );
};

export default Hero;
