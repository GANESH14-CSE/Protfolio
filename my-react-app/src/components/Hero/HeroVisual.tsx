import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiReact } from 'react-icons/si';
import { FaBrain, FaTerminal, FaCheckCircle } from 'react-icons/fa';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[460px] mx-auto select-none">
      {/* Background Ambient Glows */}
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-violet/25 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-electric-blue/25 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Main Glass Terminal IDE Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 bg-[#0B0F19]/90 border border-white/10 rounded-2xl backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        {/* Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
            <FaTerminal size={10} className="text-electric-blue" />
            <span>developer.py</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
            <FaCheckCircle size={10} />
            <span>Ready</span>
          </div>
        </div>

        {/* Code Body */}
        <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-left space-y-2 bg-[#060913]/60">
          <div>
            <span className="text-violet font-semibold">class</span>{' '}
            <span className="text-neon-cyan font-bold">Engineer</span>
            <span className="text-white">:</span>
          </div>

          <div className="pl-4">
            <span className="text-text-muted">name</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-[#34D399]">"Ganesh Kutty S"</span>
          </div>

          <div className="pl-4">
            <span className="text-text-muted">role</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-[#34D399]">"Backend & AI Developer"</span>
          </div>

          <div className="pl-4">
            <span className="text-text-muted">education</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-[#34D399]">"B.E. CSE (Vel Tech High Tech '26)"</span>
          </div>

          <div className="pl-4">
            <span className="text-text-muted">core_stack</span>{' '}
            <span className="text-white">= [</span>
            <span className="text-[#60A5FA]">"Python"</span>
            <span className="text-white">, </span>
            <span className="text-[#60A5FA]">"Django"</span>
            <span className="text-white">, </span>
            <span className="text-[#60A5FA]">"React"</span>
            <span className="text-white">, </span>
            <span className="text-[#60A5FA]">"BERT"</span>
            <span className="text-white">]</span>
          </div>

          <div className="pl-4 pt-1">
            <span className="text-violet font-semibold">def</span>{' '}
            <span className="text-[#FBBF24]">deliver_impact</span>
            <span className="text-white">(self):</span>
          </div>

          <div className="pl-8">
            <span className="text-violet">return</span>{' '}
            <span className="text-[#34D399]">"Production Systems with High Scalability"</span>
          </div>
        </div>

        {/* Live Status Footer */}
        <div className="px-5 py-2.5 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold">Live in Production</span>
          </div>
          <span>UTF-8 · Python 3.12</span>
        </div>
      </motion.div>

      {/* Floating Interactive Satellite Chips around IDE */}
      {/* Chip 1: Python & Django (Top Right) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-6 -right-2 sm:-right-4 z-20 bg-[#0F172A]/95 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-xl shadow-xl flex items-center gap-2.5 scale-90 sm:scale-100 origin-top-right"
      >
        <div className="p-1.5 bg-[#3776AB]/20 rounded-lg text-[#60A5FA]">
          <SiPython size={16} />
        </div>
        <div className="text-left">
          <div className="text-xs font-display font-bold text-white">Python & Django</div>
          <div className="text-[10px] font-mono text-text-muted">Backend Specialist</div>
        </div>
      </motion.div>

      {/* Chip 2: AI & BERT (Bottom Left) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-6 -left-2 sm:-left-4 z-20 bg-[#0F172A]/95 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-xl shadow-xl flex items-center gap-2.5 scale-90 sm:scale-100 origin-bottom-left"
      >
        <div className="p-1.5 bg-violet/20 rounded-lg text-violet">
          <FaBrain size={16} />
        </div>
        <div className="text-left">
          <div className="text-xs font-display font-bold text-white">BERT & NLP</div>
          <div className="text-[10px] font-mono text-text-muted">AI Model Matching</div>
        </div>
      </motion.div>

      {/* Chip 3: Full Stack Web & DB (Bottom Right) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-4 right-2 sm:right-6 z-20 flex bg-[#0F172A]/95 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xl shadow-xl items-center gap-2 scale-90 sm:scale-100 origin-bottom-right"
      >
        <SiReact size={14} className="text-[#61DAFB] animate-spin" style={{ animationDuration: '10s' }} />
        <span className="text-[11px] font-mono font-medium text-white">React.js + MySQL</span>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
