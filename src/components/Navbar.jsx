import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Theme setup
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-theme');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <i className="ri-code-s-slash-line"></i> GV
        </a>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Me</a>
          <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
          {/* WhatsApp Button for Mobile Menu */}
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="nav-btn mobile-only">
            Let's Talk <i className="ri-whatsapp-line"></i>
          </a>
        </div>

        <div className="right-section">
          <button 
            className="theme-toggle interactive" 
            onClick={toggleTheme} 
            aria-label="Toggle dark mode"
          >
            {isDark ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>}
          </button>
          
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="nav-btn interactive desktop-only">
            Let's Talk <i className="ri-whatsapp-line"></i>
          </a>

          <button 
            className="mobile-menu-toggle interactive" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
