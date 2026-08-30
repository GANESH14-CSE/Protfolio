import React from 'react';

export const GridOverlay: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-[2] overflow-hidden"
      style={{
        transform: 'perspective(800px) rotateX(8deg)',
        transformOrigin: 'top center',
      }}
    >
      <div 
        className="w-[200%] h-[200%] absolute -left-[50%] -top-[50%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial overlay to dim the grid on the edges */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, transparent 20%, #050816 85%)'
        }}
      />
    </div>
  );
};
export default GridOverlay;
