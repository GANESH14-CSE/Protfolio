import React, { useEffect, useRef } from 'react';
import { experiences } from '../../data/experience';
import { TimelineCard } from './TimelineCard';
import { gsap } from '../../lib/gsapPlugins';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { fadeInUp } from '../../lib/framerVariants';
import { Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [sectionRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    // Use total length or fallback to container height
    const pathLength = path.getTotalLength() || 2000;

    // Initialize line offset to full length (hidden)
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const scrollAnim = gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: 1.0, // smooth scrolling catch-up
      },
    });

    return () => {
      scrollAnim.scrollTrigger?.kill();
      scrollAnim.kill();
    };
  }, []);

  return (
    <section 
      id="experience" 
      className="relative py-4"
    >
      <motion.div 
        ref={sectionRef} 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp(0.6)}
        className="relative z-10 w-full"
      >
        {/* Header section */}
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="w-6 h-6 text-violet" />
          <h3 className="text-2xl font-display font-black text-white">
            Professional Experience
          </h3>
        </div>

        {/* Timeline wrapper container */}
        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto mt-4 px-2 md:px-6">
            
            {/* Vertical Timeline spine drawing path */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 -translate-x-[2px] w-[4px] z-10">
              <svg 
                className="w-full h-full filter drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" 
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="spine-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                {/* Static background spine */}
                <line 
                  x1="2" y1="0" x2="2" y2="100%" 
                  stroke="rgba(255, 255, 255, 0.05)" 
                  strokeWidth="4" 
                />
                {/* Dynamic animated foreground spine */}
                <path
                  ref={pathRef}
                  d="M 2 0 L 2 5000"
                  stroke="url(#spine-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Cards mapping */}
            <div className="relative z-20 flex flex-col w-full">
              {experiences.map((exp, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <TimelineCard 
                    key={idx} 
                    item={exp} 
                    isLeft={isLeft} 
                    index={idx}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
  );
};
export default Experience;
