import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import profileImg from '../../assets/profile.png';

export const ProfileCard: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center text-center w-full max-w-[320px] mx-auto p-6 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-violet/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-electric-blue/20 blur-3xl pointer-events-none" />

      {/* Avatar Circle with Profile Image & Online Dot */}
      <div className="relative mb-4 group">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-violet/60 transition-all duration-500 shadow-[0_0_30px_rgba(139,92,246,0.3)] flex items-center justify-center bg-slate-800">
          <img
            src={profileImg}
            alt="Ganesh Kutty S"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
        </div>
        {/* Online Status Indicator */}
        <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#050816] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
      </div>

      {/* Name & Subtitle */}
      <h3 className="font-display font-bold text-xl text-white tracking-tight mb-1">
        Ganesh Kutty S
      </h3>
      {/* <p className="text-xs font-mono text-violet uppercase tracking-wider font-semibold mb-4">
        Vel Tech High Tech · B.E. CSE ('26)
      </p> */}

      {/* Highlight Quote Box */}
      <div className="w-full bg-white/[0.04] border-l-3 border-electric-blue rounded-xl p-3 mb-4 text-left backdrop-blur-sm">
        <p className="font-body text-xs italic text-text-secondary leading-snug">
          "Clean code. Scalable backend architectures. Real-world AI impact."
        </p>
      </div>

      {/* Tag Chips */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-5">
        <span className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-white/5 border border-white/10 text-text-secondary">
          Backend Dev
        </span>
        <span className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-white/5 border border-white/10 text-text-secondary">
          AI & NLP
        </span>
        <span className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-white/5 border border-white/10 text-text-secondary">
          Full Stack
        </span>
        <span className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-white/5 border border-white/10 text-text-secondary">
          REST & MySQL
        </span>
      </div>

      {/* Social Links */}
      {/* <div className="flex items-center gap-4 text-text-secondary border-t border-white/5 pt-4 w-full justify-center">
        <a 
          href="https://github.com/GANESH14-CSE" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-white text-base transition-all duration-300 hover:scale-110"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/ganesh-kutty-s-10a103295/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-electric-blue text-base transition-all duration-300 hover:scale-110"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="mailto:ganeshkutty859@gmail.com" 
          className="hover:text-violet text-base transition-all duration-300 hover:scale-110"
          title="Email"
        >
          <FaEnvelope />
        </a>
      </div> */}
    </div>
  );
};

export default ProfileCard;
