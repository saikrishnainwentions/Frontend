import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app load
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - in real app, this would come from API
      const mockUser = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: email,
        joinDate: '2024-01-01',
        booksLent: 5,
        booksBorrowed: 3
      };
      
      // Mock authentication logic - in real app, verify credentials with backend
      if (email && password.length >= 6) {
        const token = 'mock-jwt-token-' + Date.now();
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        setUser(mockUser);
        setIsAuthenticated(true);
        
        return { success: true };
      } else {
        return { success: false, error: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, error: 'An error occurred during login' };
    }
  };

  const register = async (userData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const { firstName, lastName, email, password, confirmPassword } = userData;
      
      // Validation
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return { success: false, error: 'All fields are required' };
      }
      
      if (password !== confirmPassword) {
        return { success: false, error: 'Passwords do not match' };
      }
      
      if (password.length < 6) {
        return { success: false, error: 'Password must be at least 6 characters' };
      }
      
      if (!email.includes('@')) {
        return { success: false, error: 'Please enter a valid email address' };
      }
      
      // Mock user creation
      const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        joinDate: new Date().toISOString().split('T')[0],
        booksLent: 0,
        booksBorrowed: 0
      };
      
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: 'An error occurred during registration' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};