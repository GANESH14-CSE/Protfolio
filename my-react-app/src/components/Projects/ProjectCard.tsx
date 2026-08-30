import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectType } from '../../data/projects';
import { Briefcase, Heart, Box, GraduationCap, ChevronRight } from 'lucide-react';

export interface ProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick
}) => {
  const [hovered, setHovered] = useState(false);

  // Map project ID to icon and gradient style
  const getProjectGraphic = () => {
    switch (project.id) {
      case 'karur-grievance-portal':
        return {
          icon: <Box className="w-6 h-6 text-white" />,
          gradient: 'bg-gradient-to-br from-cyan-600 to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
        };
      case 'job-portal':
        return {
          icon: <Briefcase className="w-6 h-6 text-white" />,
          gradient: 'bg-gradient-to-br from-blue-600 to-indigo-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
        };
      case 'grace-ngo':
        return {
          icon: <Heart className="w-6 h-6 text-white" />,
          gradient: 'bg-gradient-to-br from-pink-500 to-rose-500 shadow-[0_0_15px_rgba(236,72,153,0.3)]'
        };
      case 'lms':
        return {
          icon: <GraduationCap className="w-6 h-6 text-white" />,
          gradient: 'bg-gradient-to-br from-emerald-500 to-teal-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
        };
      default:
        return {
          icon: <Briefcase className="w-6 h-6 text-white" />,
          gradient: 'bg-gradient-to-br from-blue-600 to-indigo-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
        };
    }
  };

  const graphic = getProjectGraphic();

  // Map status labels to compact strings
  const getStatusText = (status: string) => {
    if (status.includes('LIVE')) return 'Live';
    if (status.includes('DEVELOPMENT')) return 'In Dev';
    return 'Done';
  };

  // Join top 3 stack technologies with middle-dot (Django · AI · NLP)
  const formattedTags = project.stack.slice(0, 3).join(' · ');

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex gap-5 p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-violet/20 hover:bg-white/[0.03] transition-all duration-300 h-full cursor-pointer select-none text-left shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
    >
      {/* Decorative Glow inside Card */}
      <div 
        className="absolute -right-12 -bottom-12 w-28 h-28 rounded-full opacity-[0.03] blur-xl pointer-events-none transition-all duration-500"
        style={{
          background: `radial-gradient(circle, ${project.accentColor || '#8B5CF6'}, transparent)`
        }}
      />

      {/* Left side: Icon inside gradient box */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${hovered ? 'scale-110' : ''} ${graphic.gradient}`}>
        {graphic.icon}
      </div>

      {/* Right side: details */}
      <div className="flex flex-col justify-between h-full w-full">
        <div>
          {/* Project Title */}
          <h4 className="font-display text-base md:text-lg font-black text-white mb-0.5 tracking-tight group-hover:text-electric-blue transition-colors">
            {project.title}
          </h4>

          {/* Tech tags */}
          <div className="text-[11px] font-mono text-text-muted font-bold mb-3 tracking-wide">
            {formattedTags}
          </div>

          {/* Description */}
          <p className="font-body text-xs text-text-secondary leading-relaxed mb-4">
            {project.shortDesc}
          </p>
        </div>

        {/* Card Footer row */}
        <div className="flex items-center justify-between mt-auto">
          {/* Action trigger */}
          <div className="inline-flex items-center gap-0.5 text-xs font-mono font-bold text-violet hover:text-electric-blue transition-colors">
            <span>View Project</span>
            <ChevronRight size={12} className={`transform transition-transform duration-200 ${hovered ? 'translate-x-1' : ''}`} />
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/5 px-2.5 py-1 rounded-full border border-emerald-500/10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-mono">{getStatusText(project.status)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
