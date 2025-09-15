import React, { useEffect, useRef, useState } from 'react';

interface MouseTrailProps {
  isActive: boolean;
}

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

const MouseTrail: React.FC<MouseTrailProps> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const pointIdRef = useRef(0);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: pointIdRef.current++,
        timestamp: Date.now()
      };

      setTrailPoints(prev => {
        const updated = [...prev, newPoint];
        // Keep only recent points (last 2 seconds)
        return updated.filter(point => Date.now() - point.timestamp < 2000);
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trailPoints.forEach((point, index) => {
        const age = Date.now() - point.timestamp;
        const maxAge = 2000;
        const opacity = Math.max(0, 1 - (age / maxAge));
        const size = Math.max(1, 5 - (age / maxAge) * 4);

        // Create gradient effect
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size * 2
        );
        
        // Developer mode colors
        const colors = ['#00ff00', '#00ffff', '#ff00ff', '#ffff00'];
        const color = colors[point.id % colors.length];
        
        gradient.addColorStop(0, `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${color}00`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines
        if (index > 0) {
          const prevPoint = trailPoints[index - 1];
          const distance = Math.sqrt(
            Math.pow(point.x - prevPoint.x, 2) + Math.pow(point.y - prevPoint.y, 2)
          );

          if (distance < 100) {
            ctx.strokeStyle = `${color}${Math.floor(opacity * 100).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(prevPoint.x, prevPoint.y);
            ctx.lineTo(point.x, point.y);
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, trailPoints]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'transparent', zIndex: 10 }}
    />
  );
};

export default MouseTrail;
