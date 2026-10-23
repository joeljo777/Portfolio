import React from 'react';
import { PUBLICATION_DATA } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { BookOpen, Users, Award } from 'lucide-react';

export const PublicationSection: React.FC = () => {
  return (
    <section id="research" className="py-20 sm:py-28 border-b border-command-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="05 // RESEARCH"
          title="CONFERENCE PUBLICATION"
          subtitle="Peer-reviewed research exploring V2X communication frameworks and intelligent traffic systems."
        />

        <div className="bg-command-surface border border-command-border rounded-xs p-6 sm:p-10 corner-bracket-tl corner-bracket-br hover:border-lime/40 transition-all">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center space-x-2">
              <span className="p-2 bg-command-bg rounded border border-command-border text-lime">
                <BookOpen className="w-5 h-5" />
              </span>
              <span className="font-mono text-xs text-lime uppercase tracking-widest font-bold">
                IEEE CONFERENCE PROCEEDINGS
              </span>
            </div>

            <Badge variant="lime">CONIT 2026</Badge>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-editorial-white tracking-tight mb-4 leading-snug">
            &ldquo;{PUBLICATION_DATA.title}&rdquo;
          </h3>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-editorial-muted mb-6 pb-6 border-b border-command-border">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-telemetry-cyan" />
              <span className="text-editorial-white">{PUBLICATION_DATA.conference}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-editorial-muted" />
              <span>Authors: {PUBLICATION_DATA.authors.join(', ')}</span>
            </div>
            <div>
              Publisher: <span className="text-lime">{PUBLICATION_DATA.publisher} ({PUBLICATION_DATA.year})</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs text-telemetry-cyan uppercase tracking-wider">
              ABSTRACT & TECHNICAL SCOPE:
            </div>
            <p className="text-editorial-grey text-sm sm:text-base font-sans leading-relaxed">
              {PUBLICATION_DATA.abstract}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-command-border/60 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="text-editorial-muted">
              RELEVANCE: Direct theoretical foundation for the LoRa V2V Collision Avoidance Prototype.
            </span>
            <span className="text-lime flex items-center space-x-1">
              <span>IEEE CONIT 2026 ACCEPTED</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
