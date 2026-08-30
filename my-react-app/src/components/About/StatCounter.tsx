import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
  decimals?: number;
  trigger: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({ 
  target, 
  suffix = '', 
  label, 
  decimals = 0, 
  trigger 
}) => {
  const count = useCountUp(target, decimals, 1500, trigger);

  return (
    <div className="text-left p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet/20 hover:bg-violet/[0.03] transition-all duration-300 group">
      <div className="flex items-baseline gap-0.5 mb-1">
        <span className="text-2xl md:text-3xl font-display font-black text-white group-hover:text-violet transition-colors duration-300">
          {count}
        </span>
        {suffix && (
          <span className="text-lg font-display font-bold text-violet">
            {suffix}
          </span>
        )}
      </div>
      <span className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold">
        {label}
      </span>
    </div>
  );
};

export default StatCounter;
