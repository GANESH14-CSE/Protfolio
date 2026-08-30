import React, { useState, lazy, Suspense } from 'react';
import { projects, ProjectType } from '../../data/projects';
import ProjectCard from './ProjectCard';
import { Sparkles } from 'lucide-react';

const ProjectModal = lazy(() => import('./ProjectModal'));

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="relative py-12 text-left">
      {/* Header section */}
      <div className="space-y-2 mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-violet font-mono text-xs uppercase tracking-widest font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Featured Work</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-none">
          Production & AI Projects
        </h3>
        <p className="text-sm md:text-base text-text-secondary max-w-2xl font-body mt-3">
          A selection of production-ready systems, scalable backends, and intelligent machine learning applications.
        </p>
      </div>

      {/* Projects 2-column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Detailed Modal on Project Card Click */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Projects;
