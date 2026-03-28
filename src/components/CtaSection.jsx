import React from 'react';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        <h2 className="cta-title">Looking for a Backend Developer?</h2>
        <p className="cta-desc">Available for full-time roles, contract work, and technical projects. Let's discuss how I can contribute to your engineering team.</p>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="cta-btn interactive">
          Book a call <i className="ri-whatsapp-line"></i>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
