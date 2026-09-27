import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../About/ProfileCard';
import { Button } from '../ui/Button';
import ScrambleText from '../ui/ScrambleText';
import { Send, Eye } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-10 pb-12 overflow-hidden"
    >
      {/* Sci-Fi Ambient Glow & Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Left Side: Glowing Orb + Cyber Grid Ring */}
        <div className="absolute left-[-10%] top-[10%] w-[45%] h-[75%] hidden lg:block opacity-35">
          <div className="absolute inset-0 rounded-full bg-radial from-electric-blue/20 to-transparent blur-[90px] animate-pulse" style={{ animationDuration: '8s' }} />
          
          <svg className="w-full h-full text-electric-blue/20" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
            <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" strokeDasharray="16 8" />
            <circle cx="200" cy="200" r="160" stroke="#8B5CF6" strokeWidth="0.5" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="200" y1="200" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Right Side: Glowing Orb */}
        <div className="absolute right-[-10%] top-[10%] w-[45%] h-[75%] hidden lg:block opacity-35">
          <div className="absolute inset-0 rounded-full bg-radial from-neon-cyan/20 to-transparent blur-[90px] animate-pulse" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-14 items-center">
        
        {/* Left Column: Hero Text (order-1 on mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-start-1 lg:col-span-7 flex flex-col text-left items-start order-1 lg:pb-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-xs font-mono text-emerald-300 font-semibold tracking-wide">
              Available for Opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-[4.2rem] text-white leading-[1.08] tracking-tight mb-3">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-violet via-electric-blue to-neon-cyan bg-clip-text text-transparent animate-gradient-x inline-block pb-2">
              Ganesh Kutty S
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-neon-cyan mb-4 font-mono">
            <ScrambleText text="> Backend & AI Developer · Full Stack Specialist" delay={800} duration={2000} />
          </p>

          {/* Tagline */}
          <p className="font-body text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-0">
            Building scalable backend architectures, intelligent APIs, and production-grade machine learning solutions with clean code.
          </p>
        </motion.div>

        {/* Profile Card (order-2 on mobile, spans 2 rows on desktop) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-start-8 lg:col-span-5 lg:row-span-2 flex justify-center items-center relative py-2 lg:py-6 order-2"
        >
          <ProfileCard />
        </motion.div>

        {/* Actions & Social Links (order-3 on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-start-1 lg:col-span-7 flex flex-col items-center sm:items-start w-full order-3"
        >

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button
              variant="primary"
              magnetic={true}
              onClick={() => {
                const contact = document.querySelector('#contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3 rounded-full flex items-center gap-2 bg-gradient-to-r from-violet via-indigo-600 to-electric-blue text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              <Send size={14} className="rotate-45" />
              <span>Let's Talk</span>
            </Button>

            <button
              onClick={() => {
                const projects = document.querySelector('#projects');
                if (projects) projects.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full border border-white/10 hover:border-violet/40 bg-white/[0.03] hover:bg-violet/10 text-sm font-body font-medium text-text-secondary hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <Eye size={15} />
              <span>View Projects</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider mr-1">Find me on</span>
            
            {/* GitHub */}
            <a
              href="https://github.com/GANESH14-CSE"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-electric-blue hover:bg-electric-blue/15 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-200"
              title="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ganesh-kutty-s-10a103295/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-violet hover:bg-violet/15 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:-translate-y-1 transition-all duration-200"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:ganeshkutty859@gmail.com"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-soft-pink hover:bg-soft-pink/15 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:-translate-y-1 transition-all duration-200"
              title="Send Email"
            >
              <FaEnvelope size={16} />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
