import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CareerBoost</h3>
            <p>
              Empowering careers through innovative job matching technology.
              Join thousands of professionals who found their dream jobs with us.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><a href="/">Browse Jobs</a></p>
            <p><a href="/admin">Admin Dashboard</a></p>
            <p><a href="#about">About Us</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <p><a href="#help">Help Center</a></p>
            <p><a href="#privacy">Privacy Policy</a></p>
            <p><a href="#terms">Terms of Service</a></p>
            <p><a href="#faq">FAQ</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <p><a href="#linkedin">LinkedIn</a></p>
            <p><a href="#twitter">Twitter</a></p>
            <p><a href="#github">GitHub</a></p>
            <p><a href="#blog">Blog</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 CareerBoost. All rights reserved. Built with ❤️ for the future of work.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
