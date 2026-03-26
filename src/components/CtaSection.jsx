import React from 'react';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        <h2 className="cta-title">Got a Vision? Let's Bring It to Life!</h2>
        <p className="cta-desc">I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea.</p>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="cta-btn interactive">
          Book a call <i className="ri-whatsapp-line"></i>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
