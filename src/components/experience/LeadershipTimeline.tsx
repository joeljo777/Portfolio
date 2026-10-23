import React from 'react';
import { LEADERSHIP_DATA } from '../../data/portfolioData';
import { Users, CheckCircle, Calendar, MapPin } from 'lucide-react';

export const LeadershipTimeline: React.FC = () => {
  return (
    <div className="bg-command-surface border border-command-border rounded-xs p-6 sm:p-8 corner-bracket-tl flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-2 text-lime font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
          <Users className="w-4 h-4" />
          <span>LEADERSHIP & MENTORSHIP</span>
        </div>

        <h3 className="font-display font-bold text-2xl text-editorial-white mb-1">
          {LEADERSHIP_DATA.role}
        </h3>
        <p className="font-mono text-xs text-telemetry-cyan mb-4">
          {LEADERSHIP_DATA.organization}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-editorial-muted mb-6 pb-4 border-b border-command-border">
          <span className="flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5 text-lime" />
            <span>{LEADERSHIP_DATA.timeline}</span>
          </span>
          <span className="flex items-center space-x-1">
            <MapPin className="w-3.5 h-3.5 text-editorial-subtle" />
            <span>{LEADERSHIP_DATA.location}</span>
          </span>
        </div>

        <ul className="space-y-3 font-sans text-editorial-grey text-sm">
          {LEADERSHIP_DATA.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle className="w-4 h-4 text-lime shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4 border-t border-command-border/60 font-mono text-xs text-editorial-muted flex items-center justify-between">
        <span>IMPACT: 30%+ Membership Growth</span>
        <span className="text-lime">20+ Juniors Mentored</span>
      </div>
    </div>
  );
};
