import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import './index.css';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const animationClasses = ['.fade-in-up', '.fade-in', '.slide-in-left', '.slide-in-right'];
    const elementsToAnimate = document.querySelectorAll(animationClasses.join(', '));
    const aboutSection = document.querySelector('.about-trigger-class');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Trigger SVG draw if needed
                if (entry.target.classList.contains('about-trigger-class') || entry.target.closest('.about-trigger-class')) {
                    if (aboutSection) aboutSection.classList.add('is-visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => observer.observe(el));
    if(aboutSection) observer.observe(aboutSection);

    // Give it a small delay for load animations
    setTimeout(() => {
        document.querySelectorAll('.hero-fade, .hero-fade-up').forEach(el => {
            el.classList.add('is-visible');
        });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider"></div>
        <About />
        <Skills />
        <Projects />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
