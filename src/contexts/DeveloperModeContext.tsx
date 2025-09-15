import React, { createContext, useContext, useEffect, useState } from 'react';
import type { DeveloperModeContextType } from '../types/index';

// Create the developer mode context
const DeveloperModeContext = createContext<DeveloperModeContextType | undefined>(undefined);

// Custom hook to use the developer mode context
export const useDeveloperMode = (): DeveloperModeContextType => {
  const context = useContext(DeveloperModeContext);
  if (context === undefined) {
    throw new Error('useDeveloperMode must be used within a DeveloperModeProvider');
  }
  return context;
};

// Developer mode provider component
interface DeveloperModeProviderProps {
  children: React.ReactNode;
}

export const DeveloperModeProvider: React.FC<DeveloperModeProviderProps> = ({ children }) => {
  // Initialize developer mode state - check localStorage first
  const [isDeveloperMode, setIsDeveloperMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false; // Default to normal mode on server
    }
    
    const savedMode = localStorage.getItem('developerMode');
    return savedMode === 'true';
  });

  // Additional developer mode features
  const [showTerminal, setShowTerminal] = useState<boolean>(false);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);
  const [showCodeRain, setShowCodeRain] = useState<boolean>(false);
  const [showGlitch, setShowGlitch] = useState<boolean>(false);

  // Toggle developer mode function
  const toggleDeveloperMode = (): void => {
    setIsDeveloperMode(prev => {
      const newMode = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('developerMode', newMode.toString());
        
        // Apply developer mode styles to document
        if (newMode) {
          document.documentElement.classList.add('developer-mode');
          // Enable all effects by default when entering developer mode
          setShowTerminal(true);
          setShowMatrix(true);
          setShowCodeRain(true);
          setShowGlitch(true);
        } else {
          document.documentElement.classList.remove('developer-mode');
          // Disable all effects when exiting developer mode
          setShowTerminal(false);
          setShowMatrix(false);
          setShowCodeRain(false);
          setShowGlitch(false);
        }
      }
      return newMode;
    });
  };

  // Toggle individual effects
  const toggleTerminal = (): void => {
    setShowTerminal(prev => !prev);
  };

  const toggleMatrix = (): void => {
    setShowMatrix(prev => !prev);
  };

  const toggleCodeRain = (): void => {
    setShowCodeRain(prev => !prev);
  };

  const toggleGlitch = (): void => {
    setShowGlitch(prev => !prev);
  };

  // Apply initial developer mode on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('developerMode');
      const shouldBeDeveloperMode = savedMode === 'true';
      
      if (shouldBeDeveloperMode) {
        document.documentElement.classList.add('developer-mode');
        // Enable all effects by default
        setShowTerminal(true);
        setShowMatrix(true);
        setShowCodeRain(true);
        setShowGlitch(true);
      } else {
        document.documentElement.classList.remove('developer-mode');
      }
    }
  }, []);

  // Sync DOM with state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDeveloperMode) {
        document.documentElement.classList.add('developer-mode');
      } else {
        document.documentElement.classList.remove('developer-mode');
      }
    }
  }, [isDeveloperMode]);

  const value: DeveloperModeContextType = {
    isDeveloperMode,
    toggleDeveloperMode,
    showTerminal,
    toggleTerminal,
    showMatrix,
    toggleMatrix,
    showCodeRain,
    toggleCodeRain,
    showGlitch,
    toggleGlitch
  };

  return (
    <DeveloperModeContext.Provider value={value}>
      {children}
    </DeveloperModeContext.Provider>
  );
};
