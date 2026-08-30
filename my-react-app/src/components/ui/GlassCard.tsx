import React from 'react';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverLift?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hoverLift = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`glass-card p-6 transition-all duration-300 ${
        hoverLift ? 'hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-white/15' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
