import React, { useEffect } from 'react';
import { Project } from '../../types/portfolio';
import { X, Cpu, GitBranch, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative w-full max-w-4xl bg-command-bg border border-command-borderStrong shadow-2xl rounded-sm my-auto z-10 max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-command-surface border-b border-command-border flex items-start justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="lime">{project.category}</Badge>
              <Badge variant="cyan">{project.mcu}</Badge>
              <Badge variant="muted">{project.timeline}</Badge>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-editorial-white">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-editorial-muted mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-editorial-muted hover:text-editorial-white hover:bg-command-hover rounded border border-command-border shrink-0 ml-4"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 font-sans text-editorial-grey text-sm sm:text-base leading-relaxed">
          
          {/* Problem Statement */}
          <div>
            <h3 className="font-mono text-xs text-lime uppercase tracking-widest mb-2 flex items-center space-x-2">
              <span>[01] PROBLEM STATEMENT & OBJECTIVES</span>
            </h3>
            <p className="p-4 bg-command-surface border-l-2 border-lime rounded-xs">
              {project.problemStatement}
            </p>
          </div>

          {/* Hardware & Protocols Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 bg-command-surface border border-command-border rounded-xs">
              <div className="text-lime uppercase tracking-wider mb-2 font-bold flex items-center space-x-1.5">
                <Cpu className="w-4 h-4" />
                <span>HARDWARE BILL OF MATERIALS</span>
              </div>
              <ul className="space-y-1 text-editorial-muted">
                {project.hardware.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-lime">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-command-surface border border-command-border rounded-xs">
              <div className="text-telemetry-cyan uppercase tracking-wider mb-2 font-bold flex items-center space-x-1.5">
                <GitBranch className="w-4 h-4" />
                <span>PROTOCOLS & FIRMWARE STACK</span>
              </div>
              <ul className="space-y-1 text-editorial-muted">
                {project.protocols.concat(project.firmwareStack).map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-telemetry-cyan">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architecture Details */}
          <div>
            <h3 className="font-mono text-xs text-lime uppercase tracking-widest mb-3">
              [02] SYSTEM ARCHITECTURE SPECIFICATION
            </h3>
            <div className="space-y-2">
              {project.architectureDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-command-surface border border-command-border/80 rounded-xs flex items-start space-x-3"
                >
                  <span className="font-mono text-xs text-telemetry-cyan shrink-0 pt-0.5">
                    SPEC_0{idx + 1}
                  </span>
                  <span className="text-editorial-grey text-sm font-sans">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges & Solutions */}
          <div>
            <h3 className="font-mono text-xs text-lime uppercase tracking-widest mb-3">
              [03] KEY TECHNICAL CHALLENGES & SOLUTIONS
            </h3>
            <div className="space-y-3">
              {project.challengesAndSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-command-surface border border-command-border rounded-xs space-y-2 font-sans"
                >
                  <div className="flex items-start space-x-2 text-telemetry-amber font-mono text-xs font-semibold">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>CHALLENGE: {item.challenge}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-editorial-white text-sm pl-6">
                    <span className="text-lime font-mono font-bold shrink-0">SOLUTION:</span>
                    <span>{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Validation */}
          <div>
            <h3 className="font-mono text-xs text-lime uppercase tracking-widest mb-3">
              [04] RESULTS & VALIDATION METRICS
            </h3>
            <div className="space-y-2 font-sans">
              {project.resultsAndValidation.map((result, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-command-surface border border-lime/20 rounded-xs flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                  <span className="text-editorial-white text-sm">{result}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-command-surface border-t border-command-border flex items-center justify-between font-mono text-xs">
          <span className="text-editorial-muted">STATUS: {project.status}</span>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="secondary"
              size="sm"
              href={project.githubUrl || 'https://github.com/joeljo777'}
              target="_blank"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              GitHub Repository ↗
            </Button>
            <Button variant="primary" size="sm" onClick={onClose}>
              Close Specification
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
