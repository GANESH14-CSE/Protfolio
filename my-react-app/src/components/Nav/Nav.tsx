import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Button } from '../ui/Button';
import { Menu, X, Send } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050816]/85 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-cyan via-violet to-electric-blue origin-left z-50 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          style={{ scaleX }}
        />
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="text-2xl font-display font-black tracking-wider cursor-pointer bg-gradient-to-r from-electric-blue via-violet to-neon-cyan bg-clip-text text-transparent select-none hover:scale-105 transition-transform"
          >
            GK<span className="text-neon-cyan">.</span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <div key={link.name} className="relative py-1">
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className={`font-body text-sm font-medium transition-colors hover:text-text-primary cursor-pointer ${
                      isActive ? 'text-white font-semibold' : 'text-text-secondary'
                    }`}
                  >
                    {link.name}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-electric-blue to-violet"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Let's Talk Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              magnetic={true}
              onClick={() => handleLinkClick('#contact')}
              className="px-5 py-2 text-xs rounded-full flex items-center gap-2 bg-gradient-to-r from-electric-blue via-indigo-600 to-violet text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              <Send size={13} className="rotate-45" />
              <span>Let's Talk</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-primary hover:text-electric-blue transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[70%] sm:w-[50%] max-w-[320px] bg-[#0A0F1C]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-40 flex flex-col pt-28 pb-8 px-8 pointer-events-auto md:hidden overflow-y-auto"
            >
              <nav className="flex flex-col gap-6 mb-10 w-full">
                {links.map((link, idx) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, ease: 'easeOut' }}
                    onClick={() => handleLinkClick(link.href)}
                    className="font-display text-xl font-bold text-text-secondary hover:text-white transition-colors cursor-pointer text-left w-full border-b border-white/5 pb-3"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + links.length * 0.05 }}
                className="w-full mt-auto"
              >
                <Button
                  variant="primary"
                  magnetic={false}
                  onClick={() => handleLinkClick('#contact')}
                  className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-electric-blue via-indigo-600 to-violet text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                >
                  <Send size={14} className="rotate-45" />
                  <span>Let's Talk</span>
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
