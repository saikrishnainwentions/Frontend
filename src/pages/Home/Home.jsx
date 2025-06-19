import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowRight, BookOpen, Users, Zap, Star, TrendingUp } from 'lucide-react';
import { featuredBooks } from '../../data/mockData';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">Inwentions Book Hub</span>
            </h1>
            <p className="hero-subtitle">
              Discover, share, and exchange knowledge through books. Connect with fellow readers 
              and build a community of lifelong learners.
            </p>
            <div className="hero-buttons">
              <Link to="/books" className="btn btn-primary btn-large">
                <BookOpen size={20} />
                Explore Books
                <ArrowRight size={18} />
              </Link>
              {!isAuthenticated && (
                <Link to="/register" className="btn btn-outline btn-large">
                  Join Community
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid slide-in-up">
            <div className="stat-card">
              <div className="stat-icon">
                <BookOpen size={32} />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">10,000+</h3>
                <p className="stat-label">Books Available</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">5,000+</h3>
                <p className="stat-label">Active Readers</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Zap size={32} />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">25,000+</h3>
                <p className="stat-label">Books Exchanged</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={32} />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">95%</h3>
                <p className="stat-label">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="featured-books">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Books</h2>
            <p className="section-subtitle">
              Discover our handpicked collection of amazing books
            </p>
          </div>
          
          <div className="books-grid">
            {featuredBooks.map((book, index) => (
              <div 
                key={book.id} 
                className="book-card scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="book-image">
                  <img src={book.image} alt={book.title} />
                  <div className="book-overlay">
                    <div className="book-rating">
                      <Star size={14} className="star-icon" />
                      <span>{book.rating}</span>
                    </div>
                    <div className={`availability-badge ${book.available ? 'available' : 'unavailable'}`}>
                      {book.available ? 'Available' : 'Borrowed'}
                    </div>
                  </div>
                </div>
                <div className="book-content">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  <p className="book-description">{book.description}</p>
                  <div className="book-actions">
                    {book.available && (
                      <button className="btn btn-primary btn-small">
                        {isAuthenticated ? 'Borrow' : 'Login to Borrow'}
                      </button>
                    )}
                    <span className="book-genre">{book.genre}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-footer">
            <Link to="/books" className="btn btn-secondary">
              View All Books
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Inwentions Book Hub?</h2>
            <p className="section-subtitle">
              Experience the future of book sharing and community learning
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen size={40} />
              </div>
              <h3 className="feature-title">Vast Library</h3>
              <p className="feature-description">
                Access thousands of books across various genres and categories, 
                from classics to contemporary bestsellers.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3 className="feature-title">Community Driven</h3>
              <p className="feature-description">
                Connect with like-minded readers, share recommendations, 
                and build lasting friendships through shared interests.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={40} />
              </div>
              <h3 className="feature-title">Easy Exchange</h3>
              <p className="feature-description">
                Simple and secure book borrowing system with real-time availability 
                updates and seamless transaction management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Reading Journey?</h2>
              <p className="cta-subtitle">
                Join thousands of book lovers and discover your next favorite read today.
              </p>
              <div className="cta-buttons">
                <Link to="/register" className="btn btn-primary btn-large">
                  Get Started Free
                  <ArrowRight size={18} />
                </Link>
                <Link to="/books" className="btn btn-outline btn-large">
                  Browse Books
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;