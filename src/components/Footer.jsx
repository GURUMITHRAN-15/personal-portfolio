import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-left">
          <a href="#home" className="logo footer-logo interactive">
            <i className="ri-code-s-slash-line"></i> GV
          </a>
          <p className="footer-tagline">Building functional and visually appealing digital experiences.</p>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="mailto:gurumithranvedhamani@gmail.com" className="social-link interactive" aria-label="Email">
              <i className="ri-mail-send-line"></i>
            </a>
            <a href="https://github.com/GURUMITHRAN-15" target="_blank" rel="noopener noreferrer" className="social-link interactive" aria-label="GitHub">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/gurumithran-v-b30b99357" target="_blank" rel="noopener noreferrer" className="social-link interactive" aria-label="LinkedIn">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://instagram.com/mithrannnn._" target="_blank" rel="noopener noreferrer" className="social-link interactive" aria-label="Instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="tel:6382435534" className="social-link interactive" aria-label="Phone">
              <i className="ri-phone-fill"></i>
            </a>
          </div>
          <div className="contact-details">
            <a href="mailto:gurumithranvedhamani@gmail.com" className="contact-item interactive">gurumithranvedhamani@gmail.com</a>
            <a href="tel:6382435534" className="contact-item interactive">+91 6382435534</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gurumithran V. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
