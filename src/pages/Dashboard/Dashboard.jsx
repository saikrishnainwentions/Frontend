import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  BookOpen, 
  Settings, 
  LogOut, 
  User, 
  TrendingUp, 
  Clock, 
  Star,
  Menu,
  X
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    logout();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'mybooks', label: 'My Books', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const recentActivity = [
    { id: 1, action: 'Borrowed', book: 'The Great Entrepreneur', date: '2024-01-20' },
    { id: 2, action: 'Returned', book: 'Digital Innovation', date: '2024-01-18' },
    { id: 3, action: 'Lent', book: 'Creative Problem Solving', date: '2024-01-15' },
  ];

  const recommendations = [
    { id: 1, title: 'Mindful Leadership', author: 'Michael Brown', rating: 4.8 },
    { id: 2, title: 'Data Science Mastery', author: 'Emma Taylor', rating: 4.7 },
    { id: 3, title: 'Financial Wisdom', author: 'Jennifer Martinez', rating: 4.5 },
  ];

  return (
    <div className="dashboard">
      {/* Mobile Header */}
      <div className="dashboard-mobile-header">
        <button className="mobile-sidebar-toggle" onClick={toggleSidebar}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="mobile-dashboard-title">Dashboard</h1>
        <div className="mobile-user-info">
          <User size={24} />
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <BookOpen className="sidebar-logo-icon" />
            <span className="sidebar-logo-text">Book Hub</span>
          </div>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">
            <User size={32} />
          </div>
          <div className="user-info">
            <h3 className="user-name">{user?.firstName} {user?.lastName}</h3>
            <p className="user-email">{user?.email}</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <button className="sidebar-logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-overview fade-in">
              {/* Welcome Section */}
              <div className="welcome-section">
                <h1 className="welcome-title">
                  Welcome back, {user?.firstName}! 📚
                </h1>
                <p className="welcome-subtitle">
                  Here's what's happening with your reading journey
                </p>
              </div>

              {/* Stats Cards */}
              <div className="stats-grid">
                <div className="stat-card slide-in-up">
                  <div className="stat-icon books-borrowed">
                    <BookOpen size={24} />
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">{user?.booksBorrowed || 0}</h3>
                    <p className="stat-label">Books Borrowed</p>
                    <div className="stat-trend positive">
                      <TrendingUp size={16} />
                      <span>+2 this month</span>
                    </div>
                  </div>
                </div>

                <div className="stat-card slide-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="stat-icon books-lent">
                    <User size={24} />
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">{user?.booksLent || 0}</h3>
                    <p className="stat-label">Books Lent</p>
                    <div className="stat-trend positive">
                      <TrendingUp size={16} />
                      <span>+1 this week</span>
                    </div>
                  </div>
                </div>

                <div className="stat-card slide-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="stat-icon reading-streak">
                    <Clock size={24} />
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">15</h3>
                    <p className="stat-label">Day Streak</p>
                    <div className="stat-trend positive">
                      <TrendingUp size={16} />
                      <span>Keep it up!</span>
                    </div>
                  </div>
                </div>

                <div className="stat-card slide-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="stat-icon total-points">
                    <Star size={24} />
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">1,250</h3>
                    <p className="stat-label">Points Earned</p>
                    <div className="stat-trend positive">
                      <TrendingUp size={16} />
                      <span>+50 today</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="content-grid">
                {/* Recent Activity */}
                <div className="activity-card card scale-in">
                  <h2 className="card-title">Recent Activity</h2>
                  <div className="activity-list">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="activity-item">
                        <div className="activity-icon">
                          <BookOpen size={16} />
                        </div>
                        <div className="activity-content">
                          <p className="activity-text">
                            <span className="activity-action">{activity.action}</span> "{activity.book}"
                          </p>
                          <p className="activity-date">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="view-all-btn">View All Activity</button>
                </div>

                {/* Recommendations */}
                <div className="recommendations-card card scale-in" style={{ animationDelay: '0.2s' }}>
                  <h2 className="card-title">Recommended for You</h2>
                  <div className="recommendations-list">
                    {recommendations.map((book) => (
                      <div key={book.id} className="recommendation-item">
                        <div className="recommendation-content">
                          <h4 className="recommendation-title">{book.title}</h4>
                          <p className="recommendation-author">by {book.author}</p>
                          <div className="recommendation-rating">
                            <Star size={14} className="star-icon" />
                            <span>{book.rating}</span>
                          </div>
                        </div>
                        <button className="recommendation-btn">View</button>
                      </div>
                    ))}
                  </div>
                  <button className="view-all-btn">Browse All Books</button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions card scale-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="card-title">Quick Actions</h2>
                <div className="actions-grid">
                  <button className="action-btn">
                    <BookOpen size={20} />
                    <span>Browse Books</span>
                  </button>
                  <button className="action-btn">
                    <User size={20} />
                    <span>My Profile</span>
                  </button>
                  <button className="action-btn">
                    <Settings size={20} />
                    <span>Settings</span>
                  </button>
                  <button className="action-btn">
                    <Star size={20} />
                    <span>Rate Books</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mybooks' && (
            <div className="my-books-content fade-in">
              <h1 className="page-title">My Books</h1>
              <p className="page-subtitle">Manage your borrowed and lent books</p>
              
              <div className="books-tabs">
                <button className="books-tab active">Borrowed Books</button>
                <button className="books-tab">Lent Books</button>
                <button className="books-tab">Reading History</button>
              </div>

              <div className="empty-state">
                <BookOpen size={64} className="empty-icon" />
                <h3>No books yet</h3>
                <p>Start borrowing books to see them here</p>
                <button className="btn btn-primary">Browse Books</button>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-content fade-in">
              <h1 className="page-title">Settings</h1>
              <p className="page-subtitle">Manage your account preferences</p>
              
              <div className="settings-sections">
                <div className="settings-section card">
                  <h3>Profile Information</h3>
                  <div className="settings-form">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-input" value={user?.firstName} readOnly />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-input" value={user?.lastName} readOnly />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-input" value={user?.email} readOnly />
                    </div>
                    <button className="btn btn-primary">Update Profile</button>
                  </div>
                </div>

                <div className="settings-section card">
                  <h3>Notifications</h3>
                  <div className="settings-options">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" defaultChecked />
                      <span>Email notifications for new books</span>
                    </label>
                    <label className="checkbox-wrapper">
                      <input type="checkbox" defaultChecked />
                      <span>Reminder for book returns</span>
                    </label>
                    <label className="checkbox-wrapper">
                      <input type="checkbox" />
                      <span>Weekly reading digest</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
};

export default Dashboard;