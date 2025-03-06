'use client';
import { createContext, useContext, ReactNode, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const themeValue = useTheme();

  // Apply theme to body for consistent background color
  useEffect(() => {
    document.body.style.backgroundColor = 'var(--background-color)';
    document.body.style.color = 'var(--text-color)';
  }, [themeValue.theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);