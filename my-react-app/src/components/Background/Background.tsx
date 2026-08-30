import React, { useRef, useEffect } from 'react';
import ParticleCanvas from './ParticleCanvas';
import AuroraBlobs from './AuroraBlobs';
import GridOverlay from './GridOverlay';

export const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
          containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-[#050816] z-[-1] overflow-hidden select-none pointer-events-none"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '30%',
      } as React.CSSProperties}
    >
      <style>{`
        .spotlight {
          background: radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(99, 102, 241, 0.08), transparent 80%);
        }
        @keyframes float-shape-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
        }
        @keyframes float-shape-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(30px) rotate(-120deg); }
        }
      `}</style>

      {/* Layers */}
      <AuroraBlobs />
      <ParticleCanvas />
      <GridOverlay />

      {/* Mouse Spotlight */}
      <div className="absolute inset-0 spotlight z-[3]" />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden z-[4] opacity-[0.04]">
        {/* Hexagon */}
        <svg 
          className="absolute top-[15%] left-[10%] w-[100px] h-[100px] text-electric-blue fill-none stroke-current stroke-2"
          viewBox="0 0 100 100"
          style={{ animation: 'float-shape-1 25s infinite ease-in-out' }}
        >
          <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
        </svg>

        {/* Triangle */}
        <svg 
          className="absolute top-[60%] left-[8%] w-[60px] h-[60px] text-violet fill-none stroke-current stroke-2"
          viewBox="0 0 100 100"
          style={{ animation: 'float-shape-2 20s infinite ease-in-out' }}
        >
          <polygon points="50,15 90,85 10,85" />
        </svg>

        {/* Diamond */}
        <svg 
          className="absolute top-[25%] right-[15%] w-[80px] h-[80px] text-neon-cyan fill-none stroke-current stroke-2"
          viewBox="0 0 100 100"
          style={{ animation: 'float-shape-2 30s infinite ease-in-out' }}
        >
          <polygon points="50,5 95,50 50,95 5,50" />
        </svg>

        {/* Triangle Small */}
        <svg 
          className="absolute bottom-[20%] right-[10%] w-[50px] h-[50px] text-soft-pink fill-none stroke-current stroke-2"
          viewBox="0 0 100 100"
          style={{ animation: 'float-shape-1 18s infinite ease-in-out' }}
        >
          <polygon points="50,15 90,85 10,85" />
        </svg>

        {/* Hexagon Small */}
        <svg 
          className="absolute top-[45%] left-[45%] w-[70px] h-[70px] text-electric-blue fill-none stroke-current stroke-2"
          viewBox="0 0 100 100"
          style={{ animation: 'float-shape-1 28s infinite ease-in-out' }}
        >
          <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
        </svg>

        {/* Diamond Small */}
        <svg 
          className="absolute bottom-[35%] left-[25%] w-[45px] h-[45px] text-violet fill-none stroke-current stroke-2"
          viewBox="0 0 100 100"
          style={{ animation: 'float-shape-2 22s infinite ease-in-out' }}
        >
          <polygon points="50,5 95,50 50,95 5,50" />
        </svg>
      </div>
    </div>
  );
};
export default Background;
