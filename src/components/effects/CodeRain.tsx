import React, { useEffect, useRef } from 'react';

interface CodeRainProps {
  isActive: boolean;
}

const CodeRain: React.FC<CodeRainProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const columns: HTMLDivElement[] = [];
    
    // Programming-related characters and symbols
    const codeChars = '{}[]();,.<>?/\\|`~!@#$%^&*-_=+0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const keywords = ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'class', 'import', 'export', 'async', 'await', 'try', 'catch', 'finally'];
    
    // Create code rain columns
    const createColumn = (x: number) => {
      const column = document.createElement('div');
      column.className = 'binary-digit';
      column.style.left = `${x}px`;
      column.style.animationDuration = `${Math.random() * 4 + 3}s`;
      column.style.animationDelay = `${Math.random() * 2}s`;
      
      // Generate random code content
      const content = Array.from({ length: 15 }, () => {
        const isKeyword = Math.random() < 0.3;
        if (isKeyword) {
          return keywords[Math.floor(Math.random() * keywords.length)];
        }
        return codeChars[Math.floor(Math.random() * codeChars.length)];
      }).join('\n');
      
      column.textContent = content;
      column.style.fontSize = '10px';
      column.style.lineHeight = '1.2';
      column.style.color = '#00ff00';
      column.style.opacity = '0.2'; // Reduced opacity for better readability
      
      container.appendChild(column);
      columns.push(column);
    };

    // Create columns across the screen width
    const columnWidth = 25;
    const numColumns = Math.floor(window.innerWidth / columnWidth);
    
    for (let i = 0; i < numColumns; i++) {
      createColumn(i * columnWidth);
    }

    // Add new columns periodically
    const interval = setInterval(() => {
      if (columns.length < numColumns * 1.5) {
        createColumn(Math.random() * window.innerWidth);
      }
    }, 3000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      columns.forEach(column => {
        if (column.parentNode) {
          column.parentNode.removeChild(column);
        }
      });
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div 
      ref={containerRef}
      className="binary-rain"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden'
      }}
    />
  );
};

export default CodeRain;
