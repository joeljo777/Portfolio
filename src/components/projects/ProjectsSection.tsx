import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Automotive / V2X',
    'Real-Time / Safety-Critical',
    'Biomedical / Wearable',
    'Power Electronics'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-command-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <SectionHeading
            number="03 // PROJECTS"
            title="FEATURED ENGINEERING WORK"
            subtitle="Architected from low-level registers up to real-time wireless telemetry."
            className="mb-0"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xs transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-lime text-command-bg font-bold shadow-[0_0_10px_rgba(221,245,206,0.3)]'
                    : 'bg-command-surface text-editorial-muted hover:text-editorial-white hover:bg-command-hover border border-command-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Deep Case-Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
