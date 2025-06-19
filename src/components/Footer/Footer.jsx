import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Mail, Phone, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <Book className="footer-logo-icon" />
              <span className="footer-logo-text">Inwentions Book Hub</span>
            </div>
            <p className="footer-description">
              Your gateway to endless knowledge and stories. Connect, share, and discover 
              books that inspire minds and touch hearts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/books" className="footer-link">All Books</Link>
              <a href="#about" className="footer-link">About</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h3 className="footer-title">Legal</h3>
            <div className="footer-links">
              <a href="#terms" className="footer-link">Terms of Service</a>
              <a href="#privacy" className="footer-link">Privacy Policy</a>
              <a href="#cookies" className="footer-link">Cookie Policy</a>
              <a href="#disclaimer" className="footer-link">Disclaimer</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>info@inwentionsbookhub.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91-9876543210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Inwentions Book Hub. All rights reserved.
            </p>
            <p className="made-with-love">
              Made with <Heart size={16} className="heart-icon" /> for book lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;