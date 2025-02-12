
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <h1 className="title animate-slide-in">Welcome to iNotebook</h1>
        <p className="description">
          iNotebook is your secure and efficient digital notebook.
          Designed for simplicity and security, it empowers you to capture ideas,
          organize tasks, and store important information effortlessly — all in one place.
        </p>

        <div className="features-container">
          <div className="feature-card animate-fade-in">
            <h2>🔐 Secure Note-Taking</h2>
            <p>Keep your notes protected with advanced security measures.</p>
          </div>
          <div className="feature-card animate-fade-in">
            <h2>🌐 Always Accessible</h2>
            <p>Access your notes anytime, from any device.</p>
          </div>
          <div className="feature-card animate-fade-in">
            <h2>⚡ User-Friendly Interface</h2>
            <p>Enjoy an intuitive design for hassle-free note-taking.</p>
          </div>
        </div>

        <footer className="footer-text animate-bounce">
          Stay productive, stay secure — with iNotebook.
        </footer>
      </div>
    </div>
  );
};

export default About;
