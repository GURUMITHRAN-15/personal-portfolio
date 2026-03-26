import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <i className="ri-code-s-slash-line"></i> GV
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-link">About Me</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="nav-btn interactive">
          Let's Talk <i className="ri-whatsapp-line"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
