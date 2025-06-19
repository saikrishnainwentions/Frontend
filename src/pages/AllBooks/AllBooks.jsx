import React, { useState, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Star, 
  Calendar,
  User,
  Grid,
  List,
  SlidersHorizontal
} from 'lucide-react';
import { mockBooks, genres } from '../../data/mockData';
import './AllBooks.css';

const AllBooks = () => {
  const { isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBooks = useMemo(() => {
    return mockBooks.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
      
      const matchesAvailability = availabilityFilter === 'All' ||
                                 (availabilityFilter === 'Available' && book.available) ||
                                 (availabilityFilter === 'Borrowed' && !book.available);
      
      return matchesSearch && matchesGenre && matchesAvailability;
    });
  }, [searchTerm, selectedGenre, availabilityFilter]);

  const handleBorrow = (bookId) => {
    if (!isAuthenticated) {
      // Redirect to login or show login modal
      alert('Please login to borrow books');
      return;
    }
    
    // Handle borrow logic
    alert(`Borrowing book with ID: ${bookId}`);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="all-books">
      <div className="container">
        {/* Header */}
        <div className="books-header fade-in">
          <div className="header-content">
            <h1 className="books-title">All Books</h1>
            <p className="books-subtitle">
              Discover your next favorite read from our extensive collection
            </p>
          </div>
          <div className="results-count">
            <span>{filteredBooks.length} books found</span>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="search-controls slide-in-up">
          <div className="search-bar">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search by title, author, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="controls-right">
            <button 
              className="filter-toggle-btn"
              onClick={toggleFilters}
            >
              <SlidersHorizontal size={20} />
              Filters
            </button>
            
            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={18} />
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        <div className={`filters-panel ${showFilters ? 'open' : ''}`}>
          <div className="filter-group">
            <h3 className="filter-title">
              <Filter size={16} />
              Genre
            </h3>
            <div className="filter-options">
              {genres.map((genre) => (
                <button
                  key={genre}
                  className={`filter-option ${selectedGenre === genre ? 'active' : ''}`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-title">Availability</h3>
            <div className="filter-options">
              {['All', 'Available', 'Borrowed'].map((option) => (
                <button
                  key={option}
                  className={`filter-option ${availabilityFilter === option ? 'active' : ''}`}
                  onClick={() => setAvailabilityFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-actions">
            <button 
              className="clear-filters-btn"
              onClick={() => {
                setSelectedGenre('All');
                setAvailabilityFilter('All');
                setSearchTerm('');
              }}
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Books Grid/List */}
        <div className={`books-container ${viewMode}`}>
          {filteredBooks.length > 0 ? (
            <div className={`books-${viewMode}`}>
              {filteredBooks.map((book, index) => (
                <div 
                  key={book.id} 
                  className={`book-card ${viewMode} scale-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
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
                    <div className="book-header">
                      <h3 className="book-title">{book.title}</h3>
                      <div className="book-meta">
                        <div className="book-author">
                          <User size={14} />
                          <span>by {book.author}</span>
                        </div>
                        <div className="book-date">
                          <Calendar size={14} />
                          <span>{book.addedDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="book-description">{book.description}</p>
                    
                    <div className="book-footer">
                      <div className="book-tags">
                        <span className="book-genre">{book.genre}</span>
                      </div>
                      
                      <div className="book-actions">
                        {book.available ? (
                          <button 
                            className="btn btn-primary btn-small"
                            onClick={() => handleBorrow(book.id)}
                          >
                            <BookOpen size={16} />
                            {isAuthenticated ? 'Borrow' : 'Login to Borrow'}
                          </button>
                        ) : (
                          <button className="btn btn-outline btn-small" disabled>
                            Currently Borrowed
                          </button>
                        )}
                        
                        <button className="btn btn-secondary btn-small">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <BookOpen size={64} className="no-results-icon" />
              <h3>No books found</h3>
              <p>Try adjusting your search criteria or filters</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedGenre('All');
                  setAvailabilityFilter('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination placeholder */}
        {filteredBooks.length > 0 && (
          <div className="pagination">
            <button className="pagination-btn" disabled>Previous</button>
            <span className="pagination-info">Page 1 of 1</span>
            <button className="pagination-btn" disabled>Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;