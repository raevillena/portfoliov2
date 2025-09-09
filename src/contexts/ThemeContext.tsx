import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ThemeContextType } from '../types/index';

// Create the theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme state - check localStorage first, then system preference
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') {
      return false; // Default to light mode on server
    }
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference if no saved theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });


  // Toggle theme function
  const toggleTheme = (): void => {
    setIsDark(prev => {
      const newTheme = !prev;
      // Immediately apply the theme change
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        if (newTheme) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      return newTheme;
    });
  };

  // Apply initial theme on mount and sync with DOM
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
      
      // Update state if it doesn't match
      if (shouldBeDark !== isDark) {
        setIsDark(shouldBeDark);
      }
      
      // Apply theme to DOM
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Sync DOM with state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDark]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value: ThemeContextType = {
    isDark,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
