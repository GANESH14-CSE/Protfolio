import React, { useRef, useState } from 'react';

export interface MagneticWrapperProps {
  children: React.ReactNode;
  range?: number;
  strength?: number;
  className?: string;
}

export const MagneticWrapper: React.FC<MagneticWrapperProps> = ({
  children,
  range = 60,
  strength = 0.12, // 50px distance * 0.12 = 6px offset max
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < range) {
      const offsetX = Math.max(-6, Math.min(6, distanceX * strength));
      const offsetY = Math.max(-6, Math.min(6, distanceY * strength));
      setPosition({ x: offsetX, y: offsetY });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {children}
    </div>
  );
};
