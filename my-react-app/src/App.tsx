import React, { lazy, Suspense } from 'react';
import { useLenis } from './hooks/useLenis';
import CustomCursor from './components/Cursor/CustomCursor';
import Background from './components/Background/Background';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Below-the-fold components lazy loaded for ultra-fast initial page load
const Skills = lazy(() => import('./components/Skills/Skills'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Certifications = lazy(() => import('./components/Certifications/Certifications'));
const Contact = lazy(() => import('./components/Contact/Contact'));

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#050816] text-[#F8FAFC] font-body selection:bg-violet/30 selection:text-white">
      {/* Interactive desktop cursor */}
      <CustomCursor />

      {/* Persistence 5-layer animated living background */}
      <Background />

      {/* Header bar */}
      <Nav />

      {/* Core sections layout */}
      <main className="relative z-10 w-full overflow-x-hidden pt-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <Hero />
        <About />

        <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center opacity-40"><div className="w-8 h-8 rounded-full border-2 border-violet border-t-transparent animate-spin" /></div>}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center opacity-40"><div className="w-8 h-8 rounded-full border-2 border-violet border-t-transparent animate-spin" /></div>}>
          <Experience />
        </Suspense>

        <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center opacity-40"><div className="w-8 h-8 rounded-full border-2 border-violet border-t-transparent animate-spin" /></div>}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center opacity-40"><div className="w-8 h-8 rounded-full border-2 border-violet border-t-transparent animate-spin" /></div>}>
          <Certifications />
        </Suspense>

        <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center opacity-40"><div className="w-8 h-8 rounded-full border-2 border-violet border-t-transparent animate-spin" /></div>}>
          <Contact />
        </Suspense>

        {/* Bottom Banner (Quote & Socials) */}
        <div className="relative z-10 w-full rounded-2xl bg-[#090b15]/60 backdrop-blur-xl border border-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-4 text-left">
            <span className="text-3xl font-serif text-violet leading-none select-none">“</span>
            <p className="font-body text-sm md:text-base text-text-secondary">
              Building real-world solutions with clean code, scalable systems, and AI that delivers impact.
            </p>
          </div>
          
          <div className="flex items-center gap-5 text-text-secondary">
            <a 
              href="https://github.com/GANESH14-CSE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-electric-blue text-xl transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/ganesh-kutty-s-10a103295/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-electric-blue text-xl transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:ganeshkutty859@gmail.com" 
              className="hover:text-violet text-xl transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-12 py-8 text-center text-xs font-mono text-text-muted select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ganesh Kutty S. All rights reserved.</p>
          <p className="text-text-muted">Designed & built with clean code and high performance.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
