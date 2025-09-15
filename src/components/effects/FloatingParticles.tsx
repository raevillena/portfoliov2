import React, { useEffect, useRef } from 'react';

interface FloatingParticlesProps {
  isActive: boolean;
  particleCount?: number;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ 
  isActive, 
  particleCount = 50 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position and properties
      const size = Math.random() * 3 + 1;
      const startX = Math.random() * window.innerWidth;
      const animationDuration = Math.random() * 4 + 3;
      const delay = Math.random() * 2;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${startX}px`;
      particle.style.animationDuration = `${animationDuration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      // Random color from developer mode palette
      const colors = ['#00ff00', '#00ffff', '#ff00ff', '#ffff00'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = '0.4'; // Reduced opacity for better readability
      
      container.appendChild(particle);
      particles.push(particle);
    };

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    // Add new particles periodically
    const interval = setInterval(() => {
      if (particles.length < particleCount * 2) {
        createParticle();
      }
    }, 2000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [isActive, particleCount]);

  if (!isActive) return null;

  return (
    <div 
      ref={containerRef}
      className="floating-particles"
    />
  );
};

export default FloatingParticles;
