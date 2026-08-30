import React, { useState, MouseEvent } from 'react';
import { MagneticWrapper } from './MagneticWrapper';

export interface Ripple {
  x: number;
  y: number;
  id: number;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'neon';
  magnetic?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  magnetic = true,
  className = '',
  onClick,
  href,
  target,
  rel,
  download,
  children,
  ...props
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<any>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    
    // Clean up ripples after 600ms
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    if (onClick) onClick(e);
  };

  const baseStyle = "relative overflow-hidden font-body font-medium rounded-full transition-all duration-200 cursor-pointer select-none active:scale-95 flex items-center justify-center gap-2 ";
  let variantStyle = "";
  
  if (variant === 'primary') {
    variantStyle = "bg-gradient-to-r from-electric-blue to-violet text-white px-6 py-3 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-transparent";
  } else if (variant === 'secondary') {
    variantStyle = "bg-white/5 hover:bg-white/10 text-electric-blue hover:text-neon-cyan border border-border-glass hover:border-border-glow hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] px-6 py-3";
  } else if (variant === 'ghost') {
    variantStyle = "bg-transparent text-text-secondary hover:text-text-primary px-4 py-2 hover:bg-white/5";
  } else if (variant === 'neon') {
    variantStyle = "border border-neon-cyan/40 text-neon-cyan px-6 py-3 hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] animate-pulse hover:animate-none";
  }

  const commonStyles = `${baseStyle} ${variantStyle} ${className}`;

  const renderRipplesAndContent = () => (
    <>
      {/* Ripple Animation CSS Styles Injector */}
      <style>{`
        @keyframes ripple-anim {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
      
      {/* Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/20 rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '150px',
            height: '150px',
            animation: 'ripple-anim 600ms ease-out forwards',
          }}
        />
      ))}
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const componentElement = href ? (
    <a
      href={href}
      target={target}
      rel={rel}
      download={download}
      onClick={handleClick}
      className={commonStyles}
      {...(props as any)}
    >
      {renderRipplesAndContent()}
    </a>
  ) : (
    <button
      onClick={handleClick}
      className={commonStyles}
      {...(props as any)}
    >
      {renderRipplesAndContent()}
    </button>
  );

  if (magnetic) {
    return <MagneticWrapper>{componentElement}</MagneticWrapper>;
  }

  return componentElement;
};
