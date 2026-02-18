import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => { success: boolean; message: string };
  signup: (name: string, email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('smartbite_session');
    if (session) {
      setCurrentUser(JSON.parse(session));
    }
  }, []);

  const signup = (name: string, email: string, password: string) => {
    const users: User[] = JSON.parse(localStorage.getItem('smartbite_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email already registered!' };
    }
    const role: 'user' | 'admin' = email.endsWith('@admin.com') ? 'admin' : 'user';
    const newUser: User = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem('smartbite_users', JSON.stringify(users));
    return { success: true, message: 'Account created successfully!' };
  };

  const login = (email: string, password: string) => {
    const users: User[] = JSON.parse(localStorage.getItem('smartbite_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return { success: false, message: 'Invalid email or password!' };
    }
    setCurrentUser(user);
    localStorage.setItem('smartbite_session', JSON.stringify(user));
    return { success: true, message: 'Login successful!' };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('smartbite_session');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout, isAuthenticated: !!currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
