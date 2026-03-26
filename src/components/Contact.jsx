import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    // Replace this URL with your Google Apps Script Web App URL
    const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
    
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    fetch(scriptURL, { method: 'POST', body: data })
      .then(response => {
        setStatus('Success! Message sent.');
        setFormData({ name: '', age: '', phone: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('Error!', error.message);
        setStatus('Failed to send. Please try again or check your Web App URL.');
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-header fade-in-up">
          <span className="section-tag">📬 Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Have a project in mind or just want to say hi? Feel free to reach out!</p>
        </div>

        <div className="contact-content fade-in-up">
          <div className="contact-info">
            <div className="contact-card interactive">
              <i className="ri-mail-send-line"></i>
              <h3>Email Me</h3>
              <p>your-email@example.com</p>
            </div>
            <div className="contact-card interactive">
              <i className="ri-map-pin-line"></i>
              <h3>Location</h3>
              <p>Your City, Country</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="interactive"
              />
            </div>
            <div className="form-group">
              <input 
                type="number" 
                name="age" 
                placeholder="Your Age" 
                value={formData.age} 
                onChange={handleChange} 
                required 
                className="interactive"
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="interactive"
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="interactive"
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message..." 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="interactive"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn interactive">
              Send Message <i className="ri-send-plane-fill"></i>
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
