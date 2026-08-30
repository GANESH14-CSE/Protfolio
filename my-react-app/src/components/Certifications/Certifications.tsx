import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../data/certifications';
import { Badge } from '../ui/Badge';
import { useInView } from '../../hooks/useInView';
import { fadeInUp } from '../../lib/framerVariants';
import { Award, Cpu, Database, GraduationCap } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.15, triggerOnce: true });

  const getIcon = (category: string) => {
    switch (category) {
      case 'Data Analytics':
        return <Database className="text-electric-blue w-5 h-5" />;
      case 'Python':
        return <Cpu className="text-violet w-5 h-5" />;
      case 'Data Science':
        return <GraduationCap className="text-neon-cyan w-5 h-5" />;
      default:
        return <Award className="text-soft-pink w-5 h-5" />;
    }
  };

  const getBadgeVariant = (category: string) => {
    switch (category) {
      case 'Data Analytics': return 'blue';
      case 'Python': return 'violet';
      case 'Data Science': return 'cyan';
      default: return 'pink';
    }
  };

  // Duplicate list to achieve continuous, seamless infinite loop
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section 
      id="certifications" 
      className="relative py-4"
    >
      {/* Inline styles for high-performance GPU scroll marquee animations */}
      <style>{`
        @keyframes marquee-loop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marquee-loop 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <motion.div 
        ref={sectionRef} 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp(0.6)}
        className="relative z-10 w-full"
      >
        {/* Header section */}
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-6 h-6 text-violet" />
          <h3 className="text-2xl font-display font-black text-white">
            Licenses & Certifications
          </h3>
        </div>

        {/* Infinite scrolling marquee track container */}
        <div className="relative w-full overflow-hidden select-none py-2 z-10">
          {/* Gradient overlays to fade out the edges for premium blending */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-[#050816] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-[#050816] to-transparent z-20 pointer-events-none" />
            
            {/* Horizontal scroll track */}
            <div className="marquee-track">
              {duplicatedCertifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[300px] shrink-0"
                >
                  <div className="h-full flex flex-col justify-between p-5 bg-white/[0.01] border border-white/5 rounded-2xl shadow-sm hover:border-violet/20 hover:bg-white/[0.02] transition-all duration-300">
                    <div>
                      {/* Category and Icon */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-white/5 border border-white/5 rounded-lg shadow-sm">
                          {getIcon(cert.category)}
                        </div>
                        <Badge variant={getBadgeVariant(cert.category)}>
                          {cert.category}
                        </Badge>
                      </div>

                      {/* Certification Name */}
                      <h4 className="font-display text-sm md:text-base font-black text-white mb-1.5 leading-snug whitespace-normal text-left">
                        {cert.name}
                      </h4>
                      
                      {/* Issuer */}
                      <p className="font-body text-xs text-text-secondary text-left">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Date issued */}
                    <div className="mt-6 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-text-muted">
                      <span>ISSUED</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
  );
};
export default Certifications;
