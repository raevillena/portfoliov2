import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  isActive: boolean;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const columns: HTMLDivElement[] = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Create matrix columns
    const createColumn = (x: number) => {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${x}px`;
      column.style.animationDuration = `${Math.random() * 3 + 2}s`;
      column.style.animationDelay = `${Math.random() * 2}s`;
      column.style.opacity = '0.3'; // Reduced opacity for better readability
      
      // Generate random characters for this column
      const text = Array.from({ length: 20 }, () => 
        characters[Math.floor(Math.random() * characters.length)]
      ).join('\n');
      
      column.textContent = text;
      container.appendChild(column);
      columns.push(column);
    };

    // Create columns across the screen width
    const columnWidth = 20;
    const numColumns = Math.floor(window.innerWidth / columnWidth);
    
    for (let i = 0; i < numColumns; i++) {
      createColumn(i * columnWidth);
    }

    // Cleanup function
    return () => {
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
      className="matrix-rain"
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

export default MatrixRain;
