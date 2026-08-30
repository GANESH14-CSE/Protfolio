import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiPython, SiDjango, SiFlask, SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiMysql, SiGithub, SiHuggingface, SiBootstrap
} from 'react-icons/si';
import { FaBrain, FaServer, FaCode, FaDatabase, FaJava, FaChartLine } from 'react-icons/fa';
import { Sparkles, Radio } from 'lucide-react';

interface SkillItem {
  name: string;
  pct: number;
  icon: React.ReactNode;
}

interface SkillGroup {
  id: string;
  category: string;
  desc: string;
  icon: React.ReactNode;
  colorHex: string;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    category: 'Languages & Backend',
    desc: 'Python, Java, Django, Flask & RESTful API Architecture',
    icon: <FaServer className="w-5 h-5 text-electric-blue" />,
    colorHex: '#3B82F6',
    skills: [
      { name: 'Python', pct: 95, icon: <SiPython className="text-[#3776AB]" /> },
      { name: 'Django & DRF', pct: 92, icon: <SiDjango className="text-[#44B78B]" /> },
      { name: 'REST APIs', pct: 90, icon: <FaServer className="text-electric-blue" /> },
      { name: 'Java', pct: 82, icon: <FaJava className="text-[#EA2D2E]" /> },
      { name: 'Flask', pct: 80, icon: <SiFlask className="text-[#F5F5F5]" /> },
    ],
  },
  {
    id: 'frontend',
    category: 'Web & Frameworks',
    desc: 'React.js, JavaScript, HTML, CSS, Tailwind & Bootstrap',
    icon: <SiReact className="w-5 h-5 text-[#61DAFB]" />,
    colorHex: '#06B6D4',
    skills: [
      { name: 'React.js', pct: 88, icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'JavaScript (ES6+)', pct: 86, icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'HTML & CSS', pct: 92, icon: <SiHtml5 className="text-[#EF4444]" /> },
      { name: 'Tailwind CSS', pct: 90, icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      { name: 'Bootstrap', pct: 85, icon: <SiBootstrap className="text-[#7952B3]" /> },
    ],
  },
  {
    id: 'ai-ml',
    category: 'AI & Machine Learning',
    desc: 'BERT, spaCy, NumPy, Pandas, Matplotlib, Seaborn & NLP',
    icon: <FaBrain className="w-5 h-5 text-violet" />,
    colorHex: '#8B5CF6',
    skills: [
      { name: 'BERT & Transformers', pct: 88, icon: <SiHuggingface className="text-[#FBBF24]" /> },
      { name: 'spaCy & NER', pct: 88, icon: <FaBrain className="text-violet" /> },
      { name: 'NumPy & Pandas', pct: 86, icon: <FaCode className="text-emerald-400" /> },
      { name: 'Matplotlib & Seaborn', pct: 84, icon: <FaChartLine className="text-[#38BDF8]" /> },
      { name: 'NLP & Resume Parsing', pct: 90, icon: <FaBrain className="text-soft-pink" /> },
    ],
  },
  {
    id: 'database-tools',
    category: 'Databases & Tools',
    desc: 'SQL, MySQL, Git, GitHub, VS Code, Jupyter, Livekit & Elevenlabs',
    icon: <FaDatabase className="w-5 h-5 text-emerald-400" />,
    colorHex: '#10B981',
    skills: [
      { name: 'SQL & MySQL', pct: 90, icon: <SiMysql className="text-[#60A5FA]" /> },
      { name: 'Git & GitHub', pct: 90, icon: <SiGithub className="text-white" /> },
      { name: 'VS Code & Jupyter', pct: 92, icon: <FaCode className="text-electric-blue" /> },
      { name: 'Livekit & SIP Protocol', pct: 80, icon: <Radio className="text-[#06B6D4] w-3.5 h-3.5" /> },
      { name: 'Elevenlabs AI Voice', pct: 82, icon: <FaBrain className="text-[#EC4899]" /> },
    ],
  },
];

export const SkillsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', name: 'All Skills' },
    { id: 'backend', name: 'Languages & Backend' },
    { id: 'frontend', name: 'Web & UI' },
    { id: 'ai-ml', name: 'AI & Data Science' },
    { id: 'database-tools', name: 'Databases & Tools' },
  ];

  const visibleGroups = activeFilter === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === activeFilter);

  return (
    <div className="w-full text-left relative z-20">
      {/* Header section */}
      <div className="space-y-2 mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-violet font-mono text-xs uppercase tracking-widest font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Expertise</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-none">
          Technical Skills
        </h3>
        <p className="text-sm md:text-base text-text-secondary max-w-2xl font-body mt-3">
          Proficient in Python, Java, SQL, Django, React.js, and modern AI/NLP tools.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-8">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setActiveFilter(opt.id)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 border cursor-pointer ${
              activeFilter === opt.id
                ? 'bg-gradient-to-r from-violet to-electric-blue text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                : 'bg-white/[0.03] text-text-secondary border-white/10 hover:border-white/20 hover:text-white'
            }`}
          >
            {opt.name}
          </button>
        ))}
      </div>

      {/* Clean 2x2 Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        <AnimatePresence mode="popLayout">
          {visibleGroups.map((group) => (
            <motion.div
              key={group.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0B0F19]/80 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl shadow-xl hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle Ambient Corner Glow */}
              <div 
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-20"
                style={{ backgroundColor: group.colorHex }}
              />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-2">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 shadow-sm"
                    style={{ backgroundColor: `${group.colorHex}15` }}
                  >
                    {group.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white">
                      {group.category}
                    </h4>
                    <p className="text-[11px] font-body text-text-muted">
                      {group.desc}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-white/5 my-4" />

                {/* Skill List with Progress Bars */}
                <div className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{skill.icon}</span>
                          <span className="font-medium text-text-secondary">{skill.name}</span>
                        </div>
                        <span 
                          className="font-mono font-bold text-[11px]"
                          style={{ color: group.colorHex }}
                        >
                          {skill.pct}%
                        </span>
                      </div>
                      
                      {/* Bar Track */}
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ 
                            backgroundColor: group.colorHex,
                            boxShadow: `0 0 8px ${group.colorHex}55`
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.pct}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SkillsGrid;
