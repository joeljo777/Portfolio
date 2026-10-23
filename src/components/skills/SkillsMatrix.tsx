import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Code, Cpu, Clock, Network, Wrench } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-4 h-4 text-lime" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-telemetry-cyan" />;
      case 'Clock':
        return <Clock className="w-4 h-4 text-telemetry-amber" />;
      case 'Network':
        return <Network className="w-4 h-4 text-lime" />;
      default:
        return <Wrench className="w-4 h-4 text-editorial-muted" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-command-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="04 // TOOLKIT"
          title="TECHNICAL SKILLS MATRIX"
          subtitle="Tiered categorization distinguishing production competence, working familiarity, and emerging research."
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-10 p-3 bg-command-surface border border-command-border rounded-xs font-mono text-xs">
          <span className="text-editorial-muted uppercase tracking-wider text-[10px]">PROFICIENCY TIERS:</span>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-lime"></span>
            <span className="text-editorial-white font-medium">Proficient</span>
            <span className="text-editorial-subtle text-[11px]">(Real hardware projects)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-telemetry-cyan"></span>
            <span className="text-editorial-white font-medium">Familiar</span>
            <span className="text-editorial-subtle text-[11px]">(Working competence)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-editorial-subtle"></span>
            <span className="text-editorial-white font-medium">Exploring</span>
            <span className="text-editorial-subtle text-[11px]">(Theoretical & lab study)</span>
          </div>
        </div>

        {/* 5-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-command-surface border border-command-border rounded-xs p-6 hover:border-command-borderStrong transition-all corner-bracket-tl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-command-border/60">
                  <div className="p-1.5 bg-command-bg rounded border border-command-border">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-display font-semibold text-base text-editorial-white uppercase tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 bg-command-bg border border-command-border/50 rounded-xs flex items-center justify-between"
                    >
                      <div>
                        <div className="text-editorial-white font-medium">
                          {skill.name}
                        </div>
                        {skill.note && (
                          <div className="text-[10px] text-editorial-muted font-sans mt-0.5">
                            {skill.note}
                          </div>
                        )}
                      </div>

                      <Badge
                        variant={
                          skill.level === 'Proficient'
                            ? 'lime'
                            : skill.level === 'Familiar'
                            ? 'cyan'
                            : 'outline'
                        }
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
