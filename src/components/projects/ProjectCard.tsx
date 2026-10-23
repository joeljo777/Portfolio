import React from 'react';
import { Project } from '../../types/portfolio';
import { Badge } from '../ui/Badge';
import { ArrowUpRight, Cpu, Radio, Shield, Wrench } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Automotive / V2X':
        return <Radio className="w-4 h-4 text-lime" />;
      case 'Real-Time / Safety-Critical':
        return <Shield className="w-4 h-4 text-telemetry-cyan" />;
      case 'Biomedical / Wearable':
        return <Cpu className="w-4 h-4 text-telemetry-amber" />;
      case 'Power Electronics':
        return <Wrench className="w-4 h-4 text-editorial-muted" />;
    }
  };

  return (
    <div className="bg-command-surface border border-command-border rounded-xs p-6 hover:border-lime/40 transition-all duration-200 flex flex-col justify-between group corner-bracket-tl">
      <div>
        {/* Category & Status Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-editorial-muted">
            {getCategoryIcon(project.category)}
            <span className="uppercase tracking-wider">{project.category}</span>
          </div>
          <Badge
            variant={
              project.status === 'National Podium'
                ? 'lime'
                : project.status === 'Validated System'
                ? 'cyan'
                : 'muted'
            }
          >
            {project.status}
          </Badge>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-editorial-white group-hover:text-lime transition-colors mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-telemetry-cyan mb-4">
          Target MCU: {project.mcu}
        </p>

        {/* Summary */}
        <p className="text-editorial-muted text-sm font-sans leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Hardware & Protocols Chips */}
        <div className="space-y-3 mb-6 font-mono text-xs">
          <div>
            <div className="text-[10px] text-editorial-subtle uppercase tracking-widest mb-1.5">
              COMMUNICATION BUSES & PROTOCOLS
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.protocols.map((protocol, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-command-bg border border-command-border text-editorial-grey rounded-xs text-[11px]"
                >
                  {protocol}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] text-editorial-subtle uppercase tracking-widest mb-1.5">
              FIRMWARE STACK
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.firmwareStack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-command-bg border border-command-border text-editorial-muted rounded-xs text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-command-border/60 flex items-center justify-between font-mono text-xs">
        <span className="text-editorial-subtle">{project.timeline}</span>
        
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center space-x-1.5 text-lime hover:text-editorial-white transition-colors cursor-pointer"
        >
          <span>View Architecture Spec</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
