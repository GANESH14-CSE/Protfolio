import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ProjectType } from '../../data/projects';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { X, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export interface ProjectModalProps {
  project: ProjectType;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose
}) => {
  useEffect(() => {
    // Disable body scroll when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = originalOverflow || 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  // Custom Flow Diagram SVG Render based on project ID
  const renderFlowDiagram = () => {
    switch (project.id) {
      case 'job-portal':
        return (
          <svg className="w-full h-auto text-text-secondary py-4" viewBox="0 0 800 120" fill="none">
            <style>{`
              .step-text { font-family: var(--font-mono); font-size: 10px; fill: var(--text-secondary); text-anchor: middle; }
              .arrow-line { stroke: var(--border-glass); stroke-width: 1.5; marker-end: url(#arrow); }
            `}</style>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
              </marker>
            </defs>
            {/* Steps Nodes */}
            <rect x="10" y="35" width="90" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#3B82F6" strokeWidth="1" />
            <text x="55" y="58" className="step-text">PDF Upload</text>

            <line x1="100" y1="55" x2="135" y2="55" className="arrow-line" />

            <rect x="140" y="35" width="95" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#3B82F6" strokeWidth="1" />
            <text x="187.5" y="58" className="step-text">PyMuPDF Text</text>

            <line x1="235" y1="55" x2="270" y2="55" className="arrow-line" />

            <rect x="275" y="35" width="90" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#8B5CF6" strokeWidth="1" />
            <text x="320" y="58" className="step-text">spaCy NER</text>

            <line x1="365" y1="55" x2="400" y2="55" className="arrow-line" />

            <rect x="405" y="35" width="95" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#8B5CF6" strokeWidth="1" />
            <text x="452.5" y="58" className="step-text">BERT Embeddings</text>

            <line x1="500" y1="55" x2="535" y2="55" className="arrow-line" />

            <rect x="540" y="35" width="105" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#06B6D4" strokeWidth="1" />
            <text x="592.5" y="58" className="step-text">Similarity Match</text>

            <line x1="645" y1="55" x2="680" y2="55" className="arrow-line" />

            <rect x="685" y="35" width="105" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#10B981" strokeWidth="1" />
            <text x="737.5" y="58" className="step-text">Feedback Output</text>
          </svg>
        );
      case 'blockchain-cert':
        return (
          <svg className="w-full h-auto text-text-secondary py-4" viewBox="0 0 800 120" fill="none">
            <style>{`
              .step-text { font-family: var(--font-mono); font-size: 10px; fill: var(--text-secondary); text-anchor: middle; }
              .arrow-line { stroke: var(--border-glass); stroke-width: 1.5; marker-end: url(#arrow-cert); }
            `}</style>
            <defs>
              <marker id="arrow-cert" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#8B5CF6" />
              </marker>
            </defs>
            <rect x="10" y="35" width="100" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#8B5CF6" strokeWidth="1" />
            <text x="60" y="58" className="step-text">Cert Data</text>

            <line x1="110" y1="55" x2="145" y2="55" className="arrow-line" />

            <rect x="150" y="35" width="100" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#8B5CF6" strokeWidth="1" />
            <text x="200" y="58" className="step-text">IPFS Upload</text>

            <line x1="250" y1="55" x2="285" y2="55" className="arrow-line" />

            <rect x="290" y="35" width="100" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#EC4899" strokeWidth="1" />
            <text x="340" y="58" className="step-text">IPFS Hash Pin</text>

            <line x1="390" y1="55" x2="425" y2="55" className="arrow-line" />

            <rect x="430" y="35" width="110" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#EC4899" strokeWidth="1" />
            <text x="485" y="58" className="step-text">Polygon Chain Write</text>

            <line x1="540" y1="55" x2="575" y2="55" className="arrow-line" />

            <rect x="580" y="35" width="100" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#06B6D4" strokeWidth="1" />
            <text x="630" y="58" className="step-text">QR Encoded</text>

            <line x1="680" y1="55" x2="715" y2="55" className="arrow-line" />

            <rect x="720" y="35" width="70" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#10B981" strokeWidth="1" />
            <text x="755" y="58" className="step-text">Verified ✓</text>
          </svg>
        );
      case 'school-mgmt':
        return (
          <svg className="w-full h-auto text-text-secondary py-4" viewBox="0 0 800 120" fill="none">
            <style>{`
              .step-text { font-family: var(--font-mono); font-size: 10px; fill: var(--text-secondary); text-anchor: middle; }
              .arrow-line { stroke: var(--border-glass); stroke-width: 1.5; marker-end: url(#arrow-school); }
            `}</style>
            <defs>
              <marker id="arrow-school" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#06B6D4" />
              </marker>
            </defs>
            <rect x="20" y="35" width="130" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#06B6D4" strokeWidth="1" />
            <text x="85" y="58" className="step-text">Admin / Staff Role</text>

            <line x1="150" y1="55" x2="215" y2="55" className="arrow-line" />

            <rect x="220" y="35" width="130" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#06B6D4" strokeWidth="1" />
            <text x="285" y="58" className="step-text">Django View / Router</text>

            <line x1="350" y1="55" x2="415" y2="55" className="arrow-line" />

            <rect x="420" y="35" width="130" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#3B82F6" strokeWidth="1" />
            <text x="485" y="58" className="step-text">Django ORM Queries</text>

            <line x1="550" y1="55" x2="615" y2="55" className="arrow-line" />

            <rect x="620" y="35" width="140" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#10B981" strokeWidth="1" />
            <text x="690" y="58" className="step-text">MySQL Database Commit</text>
          </svg>
        );
      case 'grace-ngo':
        return (
          <svg className="w-full h-auto text-text-secondary py-4" viewBox="0 0 800 120" fill="none">
            <style>{`
              .step-text { font-family: var(--font-mono); font-size: 10px; fill: var(--text-secondary); text-anchor: middle; }
              .arrow-line { stroke: var(--border-glass); stroke-width: 1.5; marker-end: url(#arrow-ngo); }
            `}</style>
            <defs>
              <marker id="arrow-ngo" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#EC4899" />
              </marker>
            </defs>
            <rect x="10" y="35" width="90" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#EC4899" strokeWidth="1" />
            <text x="55" y="58" className="step-text">User / Donor</text>

            <line x1="100" y1="55" x2="135" y2="55" className="arrow-line" />

            <rect x="140" y="35" width="105" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#EC4899" strokeWidth="1" />
            <text x="192.5" y="58" className="step-text">Donation Input</text>

            <line x1="245" y1="55" x2="280" y2="55" className="arrow-line" />

            <rect x="285" y="35" width="115" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#8B5CF6" strokeWidth="1" />
            <text x="342.5" y="58" className="step-text">Razorpay Request</text>

            <line x1="400" y1="55" x2="435" y2="55" className="arrow-line" />

            <rect x="440" y="35" width="115" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#8B5CF6" strokeWidth="1" />
            <text x="497.5" y="58" className="step-text">Payment Check</text>

            <line x1="555" y1="55" x2="590" y2="55" className="arrow-line" />

            <rect x="595" y="35" width="115" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#06B6D4" strokeWidth="1" />
            <text x="652.5" y="58" className="step-text">80-G Generation</text>

            <line x1="710" y1="55" x2="745" y2="55" className="arrow-line" />

            <rect x="750" y="35" width="40" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="#10B981" strokeWidth="1" />
            <text x="770" y="58" className="step-text">Mail</text>
          </svg>
        );
      default:
        return null;
    }
  };

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case 'cyan': return 'cyan';
      case 'pink': return 'pink';
      case 'blue': return 'blue';
      case 'green': return 'green';
      default: return 'blue';
    }
  };

  return createPortal(
    <div 
      data-lenis-prevent
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050816]/90 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        layoutId={`project-container-${project.id}`}
        className="w-full max-w-4xl bg-bg-secondary border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative my-auto max-h-[85vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 220, damping: 25 }}
      >
        {/* Header/Banner Area */}
        <div 
          className={`min-h-[6rem] md:min-h-[9rem] h-auto shrink-0 bg-gradient-to-br ${project.gradient} p-5 md:p-6 flex flex-col justify-end relative`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer hover:scale-105 transition-all"
            aria-label="Close details"
          >
            <X size={20} />
          </button>
          
          <div className="flex gap-2.5 items-center mb-2">
            <Badge variant={getBadgeVariant(project.statusColor)}>
              {project.status}
            </Badge>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            
            {/* Quick Header Links */}
            <div className="flex items-center gap-2.5 shrink-0 md:mr-12">
              {project.github && (
                <Button 
                  variant="primary" 
                  className="px-3.5 py-1.5 text-xs gap-1.5 h-8.5 bg-black/30 hover:bg-black/50 border border-white/10 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  magnetic={false}
                >
                  <FaGithub size={14} /> Repo
                </Button>
              )}

              {project.live && (
                <Button 
                  variant="secondary" 
                  className="px-3.5 py-1.5 text-xs gap-1.5 h-8.5 bg-black/30 hover:bg-black/50 border border-white/10 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  magnetic={false}
                >
                  <ExternalLink size={14} /> Live
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Modal Core Contents */}
        <div data-lenis-prevent className="p-5 md:p-8 space-y-6 overflow-y-auto flex-grow no-scrollbar">
          
          {/* Overview */}
          <div>
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest font-bold mb-2">
              Project Overview
            </h4>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Core Features bullets */}
          <div>
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest font-bold mb-2">
              Key Features
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-sm text-text-secondary font-body">
                  <span className="text-electric-blue text-xs mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Flow Section */}
          <div className="bg-black/20 border border-border-glass rounded-xl p-4 overflow-x-auto no-scrollbar">
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest font-bold mb-1">
              Technical Architecture Flow
            </h4>
            <div className="min-w-[650px] md:min-w-0">
              {renderFlowDiagram()}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
              <h4 className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold mb-2">
                Challenge
              </h4>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold mb-2">
                Solution
              </h4>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Badges */}
          <div>
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest font-bold mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="blue">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-end gap-4 pt-4 border-t border-border-glass">
            <Button 
              variant="ghost" 
              onClick={onClose} 
              className="px-5 py-2.5 text-sm hover:bg-white/10 rounded-full border border-white/5 text-text-secondary hover:text-white"
            >
              Back to Projects
            </Button>
          </div>

        </div>
      </motion.div>
    </div>,
    document.body
  );
};
export default ProjectModal;
