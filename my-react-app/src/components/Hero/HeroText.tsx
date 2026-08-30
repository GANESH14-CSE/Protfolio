import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Send, Download } from 'lucide-react';

export const HeroText: React.FC = () => {
  return (
    <>
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
        <span className="text-xs font-mono text-text-secondary">Available for Opportunities</span>
      </motion.div>

      {/* Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[1.05] tracking-tight mb-4"
      >
        Hi, I'm{' '}
        <span className="bg-gradient-to-r from-violet via-electric-blue to-neon-cyan bg-clip-text text-transparent">
          Ganesh Kutty S
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-lg md:text-xl font-body text-text-secondary max-w-2xl mb-8"
      >
        Backend & AI Developer crafting scalable systems, intelligent APIs, and production-grade machine learning solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap items-center gap-4 justify-center"
      >
        <Button 
          onClick={() => {
            const contact = document.querySelector('#contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Send size={14} />
          <span>Let's Talk</span>
        </Button>

        <button
          onClick={() => {
            const projects = document.querySelector('#projects');
            if (projects) projects.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-5 py-2.5 rounded-full border border-white/10 hover:border-violet/40 bg-white/[0.02] hover:bg-violet/5 text-sm font-body text-text-secondary hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <Download size={14} />
          <span>View Projects</span>
        </button>
      </motion.div>
    </>
  );
};

export default HeroText;
