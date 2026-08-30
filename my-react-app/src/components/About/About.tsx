import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import ProfileCard from './ProfileCard';
import StatCounter from './StatCounter';
import { fadeInUp } from '../../lib/framerVariants';
import { User } from 'lucide-react';

export const About: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.15, triggerOnce: true });

  return (
    <section 
      id="about" 
      className="relative py-16 text-left"
    >
      <motion.div 
        ref={sectionRef} 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp(0.6)}
        className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Column: Profile Card (col-span-4) */}
        <div className="lg:col-span-4 flex justify-center">
          <ProfileCard />
        </div>

        {/* Right Column: Bio & Stats (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          
          {/* Bio text block */}
          <div className="mb-8">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet/10 border border-violet/20 rounded-full text-xs text-violet font-semibold mb-4">
              <User size={13} />
              <span>About Me</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight mb-4 leading-tight">
              An engineer at heart,<br />
              problem solver by craft
            </h2>

            {/* Narrative text */}
            <div className="space-y-3 font-body text-text-secondary leading-relaxed text-sm sm:text-base max-w-3xl">
              <p>
                I am a <strong>Computer Science student</strong> at Vel Tech High Tech Engineering College with real production experience in backend architecture and AI engineering.
              </p>
              <p>
                I have engineered live systems including the <strong>Karur Municipal Corporation Public Grievance Portal</strong> with bilingual Tamil/English support, the <strong>Grace Service Charitable Trust</strong> platform processing live transactions and 80-G tax certificates, and an <strong>AI-Powered Smart Job Portal</strong> using <strong>BERT and spaCy</strong> for semantic resume matching.
              </p>
              <p>
                I care deeply about clean APIs, robust MySQL database design, and production-grade AI systems that deliver tangible value.
              </p>
            </div>

            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neon-cyan">
                🎓 B.E. CSE (Vel Tech High Tech)
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-electric-blue">
                ⚡ Full Stack & Backend
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-violet">
                🤖 AI & NLP Developer
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-emerald-400">
                🚀 Production Proven
              </span>
            </div>
          </div>

          {/* Counters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <StatCounter target={4} suffix="+" label="Projects Shipped" trigger={isInView} />
            <StatCounter target={2} label="Internships" trigger={isInView} />
            <StatCounter target={7.92} decimals={2} label="Vel Tech CGPA" trigger={isInView} />
            <StatCounter target={300} suffix="+" label="Problems Solved" trigger={isInView} />
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
