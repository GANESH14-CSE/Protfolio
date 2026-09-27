import React from 'react';
import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const email = 'ganeshkutty859@gmail.com';
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent('Hello Ganesh — Project / Opportunity Inquiry')}&body=${encodeURIComponent('Hi Ganesh,\n\nI came across your portfolio and wanted to connect with you regarding...\n\nBest regards,')}`;

  return (
    <section 
      id="contact" 
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 sm:px-12 my-12 rounded-[32px] bg-slate-900/40 border border-white/10 text-white overflow-hidden text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
    >
      {/* Ambient Neon Backing Glows (Matching Dark Theme) */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-violet/20 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-electric-blue/20 blur-[100px] pointer-events-none" />

      {/* Floating Animated Geometric Doodles */}
      <svg className="absolute top-[12%] left-[6%] w-14 h-14 text-white/10 pointer-events-none animate-float-1" viewBox="0 0 60 60" fill="none">
        <path d="M30 5L35.5 21H53L39.25 31.5L44.75 48L30 37.5L15.25 48L20.75 31.5L7 21H24.5L30 5Z" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      
      <svg className="absolute top-[16%] right-[8%] w-12 h-12 text-white/10 pointer-events-none animate-float-2" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 5" />
      </svg>
      
      <svg className="absolute bottom-[16%] left-[8%] w-10 h-10 text-white/10 pointer-events-none animate-float-1" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="8" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(20 20 20)" />
      </svg>
      
      <svg className="absolute bottom-[14%] right-[6%] w-12 h-9 text-white/10 pointer-events-none animate-float-2" viewBox="0 0 50 36" fill="none">
        <path d="M5 30 C15 8, 35 8, 45 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M40 26 L45 30 L41 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.15] mb-5">
          Let's create <br className="hidden sm:inline" />
          something <br className="hidden sm:inline" />
          meaningful together
        </h2>

        {/* Subtitle */}
        <p className="text-text-secondary text-sm sm:text-base md:text-lg font-body leading-relaxed max-w-2xl mx-auto mb-9">
          Whether you're looking to hire a passionate Backend, AI-developer, have a freelance project, or just want to say hello — my inbox is always open.
        </p>

        {/* Two Main Centered Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-9">
          {/* Let's Talk Button */}
          <a
            href={mailtoUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet via-electric-blue to-neon-cyan text-white font-display font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.65)] hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <span>✉️</span>
            <span>Let's Talk</span>
          </a>

          {/* View Resume Button */}
          <a
            href="/Ganesh_Kutty_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-body text-sm sm:text-base font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            <FileText className="w-4 h-4 text-neon-cyan" />
            <span>View Resume</span>
          </a>
        </div>

        {/* Circular Social Buttons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/ganesh-kutty-s-10a103295/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary text-lg hover:text-electric-blue hover:bg-white/10 hover:border-electric-blue/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-200"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/GANESH14-CSE"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary text-lg hover:text-white hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-200"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
