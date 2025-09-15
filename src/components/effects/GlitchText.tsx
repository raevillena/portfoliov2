import React from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  children, 
  isActive, 
  className = '' 
}) => {
  if (!isActive) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span 
      className={`glitch-text ${className}`}
      data-text={children}
    >
      {children}
    </span>
  );
};

export default GlitchText;
