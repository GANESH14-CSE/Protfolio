import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);
  const hoveredRef = useRef(false);
  const clickedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isHoverable = window.matchMedia('(hover: hover)').matches;
    if (prefersReducedMotion || !isHoverable || window.innerWidth < 1024) return;

    ringPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
      }
    };

    const onMouseDown = () => {
      clickedRef.current = true;
    };

    const onMouseUp = () => {
      clickedRef.current = false;
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
    };

    // Use event delegation on document instead of querying and rebinding to elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, input, select, textarea, [role="button"], .project-card, .hover-interactive');
      if (interactive) {
        if (!hoveredRef.current) {
          hoveredRef.current = true;
          setHovered(true);
        }
      } else {
        if (hoveredRef.current) {
          hoveredRef.current = false;
          setHovered(false);
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    let animId: number;
    const render = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        const ringScale = hoveredRef.current ? 1.5 : clickedRef.current ? 0.7 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px, 0) scale(${ringScale})`;
        ringRef.current.style.opacity = isVisibleRef.current ? '1' : '0';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x - 3}px, ${mousePos.current.y - 3}px, 0)`;
        dotRef.current.style.opacity = isVisibleRef.current ? '1' : '0';
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-9 h-9 border-[1.5px] border-[#3B82F6] rounded-full pointer-events-none z-[9999] transition-colors duration-200 hidden lg:block ${
          hovered ? 'bg-[#3b82f6]/15 border-[#8b5cf6]' : 'bg-transparent'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform',
          opacity: 0,
        }}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full pointer-events-none z-[9999] hidden lg:block transition-all duration-100"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform',
          opacity: 0,
        }}
      />
    </>
  );
};
export default CustomCursor;
