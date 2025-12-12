import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

// This is a mock user for demonstration. In a real app, this would come from a database.
const MOCK_USER = {
  username: 'admin',
  password: 'password',
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    // This is a highly insecure, mock authentication for demonstration purposes.
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      setIsAuthenticated(true);
      return true; // Indicate success
    }
    return false; // Indicate failure
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context easily in other components
export const useAuth = () => {
  return useContext(AuthContext);
};
