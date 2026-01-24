/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// --- Types ---
interface User {
  username: string;
  role: 'admin' | 'user';
  lastActive: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; requiresMFA?: boolean; error?: string }>;
  verifyMFA: (code: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Constants ---
const AUTH_KEY = 'chroma_v2_session';
const MFA_PENDING_KEY = 'chroma_v2_temp_mfa';
const SALT = 'CHROMA_ENT_SECURE_SALT_v9_REACT';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing session
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) {
      try {
        const decrypted = JSON.parse(atob(stored)); // Simple base64 decode for now, matching logic
        if (decrypted && decrypted.expiry > Date.now()) {
          setUser(decrypted.user);
        } else {
          logout();
        }
      } catch (e) {
        logout();
      }
    }
  }, []);

  const login = async (username: string, password: string) => {
    // Simulated Backend Delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (username === 'admin' && password === 'password') {
      // Create temp MFG session
      const tempSession = {
        stage: 'MFA_PENDING',
        username,
        expiry: Date.now() + 60000 // 1 min to enter code
      };
      localStorage.setItem(MFA_PENDING_KEY, btoa(JSON.stringify(tempSession)));
      return { success: true, requiresMFA: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const verifyMFA = async (code: string) => {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const pending = localStorage.getItem(MFA_PENDING_KEY);
    if (!pending) return false;

    if (code === '123456') {
      const { username } = JSON.parse(atob(pending));
      
      const sessionUser: User = { 
        username, 
        role: 'admin', 
        lastActive: Date.now() 
      };

      // Create full session
      const sessionData = {
        user: sessionUser,
        token: `ENT_${Math.random().toString(36).substr(2)}_${SALT}`,
        expiry: Date.now() + (30 * 60 * 1000) // 30 mins
      };
      
      localStorage.setItem(AUTH_KEY, btoa(JSON.stringify(sessionData)));
      localStorage.removeItem(MFA_PENDING_KEY);
      setUser(sessionUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(MFA_PENDING_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, verifyMFA, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
