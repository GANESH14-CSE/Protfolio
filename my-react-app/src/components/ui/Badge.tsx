import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'violet' | 'pink' | 'green';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className = '',
  ...props
}) => {
  const colorMap = {
    blue: 'border-electric-blue/35 text-electric-blue bg-electric-blue/5 shadow-[0_0_10px_rgba(59,130,246,0.1)]',
    cyan: 'border-neon-cyan/35 text-neon-cyan bg-neon-cyan/5 shadow-[0_0_10px_rgba(6,182,212,0.1)]',
    violet: 'border-violet/35 text-violet bg-violet/5 shadow-[0_0_10px_rgba(139,92,246,0.1)]',
    pink: 'border-soft-pink/35 text-soft-pink bg-soft-pink/5 shadow-[0_0_10px_rgba(236,72,153,0.1)]',
    green: 'border-emerald-500/35 text-emerald-400 bg-emerald-500/5 shadow-[0_0_10px_rgba(16,185,129,0.1)]',
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-mono font-medium rounded-full border ${colorMap[variant]} transition-all duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
export type { BadgeProps as BadgePropsType };
