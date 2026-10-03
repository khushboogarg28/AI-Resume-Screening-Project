import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const defaultDemoUser = {
  id: "usr-recruiter-1",
  name: "Alexandra Vance",
  email: "alexandra.vance@resumeiq.ai",
  role: "Lead Technical Recruiter",
  company: "Apex Talent Solutions",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  initials: "AV"
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('resumeiq_user');
    return saved ? JSON.parse(saved) : defaultDemoUser;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const saved = localStorage.getItem('resumeiq_auth');
    return saved !== null ? JSON.parse(saved) : true; // Default true so user can immediately test dashboard
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('resumeiq_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('resumeiq_user');
    }
    localStorage.setItem('resumeiq_auth', JSON.stringify(isAuthenticated));
  }, [user, isAuthenticated]);

  const login = (email, password, remember = true) => {
    // Local / Demo authentication validation
    const authenticatedUser = {
      ...defaultDemoUser,
      email: email || defaultDemoUser.email,
      name: email.split('@')[0].replace('.', ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()) || "Demo Recruiter"
    };
    setUser(authenticatedUser);
    setIsAuthenticated(true);
    return { success: true, user: authenticatedUser };
  };

  const signup = (name, email, company, password) => {
    const newUser = {
      id: 'usr-' + Date.now(),
      name,
      email,
      company: company || "Talent Tech Corp",
      role: "Talent Acquisition Manager",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      initials: name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    };
    setUser(newUser);
    setIsAuthenticated(true);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('resumeiq_auth');
  };

  const updateProfile = (updatedFields) => {
    setUser(prev => ({ ...prev, ...updatedFields }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
