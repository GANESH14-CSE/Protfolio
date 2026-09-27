import React, { useState, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const chars = '!<>-_\\\\/[]{}—=+*^?#________';

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  delay = 0,
  duration = 1500,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const startAnimation = () => {
      setIsAnimating(true);
      let frame = 0;
      const totalFrames = Math.floor(duration / 30); // ~30ms per frame
      const length = text.length;

      interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        
        let newText = '';
        for (let i = 0; i < length; i++) {
          if (text[i] === ' ') {
            newText += ' ';
            continue;
          }
          
          // Reveal characters gradually from left to right
          const charRevealThreshold = i / length;
          
          if (progress >= charRevealThreshold + 0.1) {
            newText += text[i];
          } else if (progress >= charRevealThreshold) {
            newText += chars[Math.floor(Math.random() * chars.length)];
          } else {
            newText += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        setDisplayText(newText);

        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplayText(text);
          setIsAnimating(false);
        }
      }, 30);
    };

    timeout = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, duration]);

  return (
    <span className={`${className} ${isAnimating ? 'opacity-80' : 'opacity-100'}`}>
      {displayText}
    </span>
  );
};

export default ScrambleText;
