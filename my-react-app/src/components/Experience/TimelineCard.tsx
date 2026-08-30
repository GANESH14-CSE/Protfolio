import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../../data/experience';
import { GlassCard } from '../ui/GlassCard';
import { FaPython, FaCode } from 'react-icons/fa';

export interface TimelineCardProps {
  item: ExperienceItem;
  isLeft: boolean;
  index: number;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  item,
  isLeft
}) => {
  const IconComponent = item.iconType === 'python' ? FaPython : FaCode;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const m = window.matchMedia('(max-width: 767px)');
    setIsMobile(m.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    m.addEventListener('change', listener);
    return () => m.removeEventListener('change', listener);
  }, []);

  const initialX = isMobile ? 30 : (isLeft ? -80 : 80);

  return (
    <div className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 w-full items-center relative my-12`}>
      {/* Card Wrapper Column */}
      <div className={`w-full pl-14 md:pl-0 ${isLeft ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'} order-2`}>
        <motion.div
          initial={{ opacity: 0, x: initialX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <GlassCard className="p-6 md:p-8 hover:-translate-y-2 hover:border-white/15 transition-all text-left">
            {/* Header */}
            <span className="font-mono text-xs font-semibold text-text-muted mb-2 block uppercase tracking-widest">
              {item.duration}
            </span>
            <h4 className="font-display text-xl md:text-2xl font-bold text-white mb-1">
              {item.role}
            </h4>
            <h5 className="font-body text-sm font-semibold bg-gradient-to-r from-electric-blue to-violet bg-clip-text text-transparent mb-4">
              {item.company} · {item.location}
            </h5>
            
            {/* Content List */}
            <ul className="space-y-2 text-sm text-text-secondary font-body">
              {item.details.map((bullet, idx) => (
                <li key={idx} className="flex gap-2.5 items-start">
                  <span className="text-electric-blue text-xs mt-1.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>

      {/* Timeline Node Point Column */}
      <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 -translate-x-[11px] md:-translate-x-1/2 flex items-center justify-center z-20 order-1">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.4, 1] }}
          viewport={{ once: true, margin: '-150px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-10 h-10 rounded-full bg-slate-900 border-2 flex items-center justify-center cursor-pointer shadow-lg"
          style={{ 
            borderColor: item.glowColor,
            boxShadow: `0 0 15px ${item.glowColor}50` 
          }}
        >
          <IconComponent style={{ color: item.glowColor }} size={16} />
        </motion.div>
      </div>

      {/* Empty space filler for layout grid on desktop */}
      <div className={`hidden md:block w-full ${isLeft ? 'order-2' : 'order-1'}`} />
    </div>
  );
};
export default TimelineCard;
