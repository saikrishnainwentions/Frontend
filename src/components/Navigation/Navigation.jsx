import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, Book, User, LogOut, Home, Info, Phone, BookOpen } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <div className="header-content">
            <div className="contact-info">
              <span>info@inwentionsbookhub.com</span>
              <span>+91-9876543210</span>
            </div>
            <div className="social-links">
              <span>Follow us: Facebook | Twitter | Instagram</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navigation">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <Link to="/" className="logo" onClick={closeMobileMenu}>
              <Book className="logo-icon" />
              <span className="logo-text">Inwentions Book Hub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              <div className="nav-links">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  <Home size={18} />
                  Home
                </Link>
                <Link 
                  to="/books" 
                  className={`nav-link ${isActive('/books') ? 'active' : ''}`}
                >
                  <BookOpen size={18} />
                  All Books
                </Link>
                <a href="#about" className="nav-link">
                  <Info size={18} />
                  About
                </a>
                <a href="#contact" className="nav-link">
                  <Phone size={18} />
                  Contact
                </a>
              </div>

              <div className="auth-buttons">
                {isAuthenticated ? (
                  <div className="user-menu">
                    <Link to="/dashboard" className="btn btn-outline">
                      <User size={18} />
                      Dashboard
                    </Link>
                    <button onClick={handleLogout} className="btn btn-accent">
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="auth-buttons-group">
                    <Link to="/login" className="btn btn-outline">
                      Login
                    </Link>
                    <Link to="/register" className="btn btn-primary">
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <Home size={20} />
              Home
            </Link>
            <Link 
              to="/books" 
              className={`mobile-nav-link ${isActive('/books') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <BookOpen size={20} />
              All Books
            </Link>
            <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
              <Info size={20} />
              About
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
              <Phone size={20} />
              Contact
            </a>

            <div className="mobile-auth-buttons">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="btn btn-outline mobile-btn"
                    onClick={closeMobileMenu}
                  >
                    <User size={18} />
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="btn btn-accent mobile-btn">
                    <LogOut size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="btn btn-outline mobile-btn"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn btn-primary mobile-btn"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;