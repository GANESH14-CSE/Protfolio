import { useState, useEffect } from 'react';

export interface MousePos {
  x: number;
  y: number;
}

export const useMousePosition = (): MousePos => {
  const [mousePosition, setMousePosition] = useState<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};
export type { MousePos as MousePositionType };
