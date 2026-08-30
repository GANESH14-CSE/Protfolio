import { useState, useEffect } from 'react';

export const useCountUp = (
  target: number,
  decimals: number = 0,
  duration: number = 1500,
  trigger: boolean = false
): string => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }
    
    let startTimestamp: number | null = null;
    const startValue = 0;

    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + easeProgress * (target - startValue);
      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, trigger]);

  return count.toFixed(decimals);
};
