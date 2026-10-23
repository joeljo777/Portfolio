import React from 'react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';

export const EducationCard: React.FC = () => {
  return (
    <div className="bg-command-surface border border-command-border rounded-xs p-6 sm:p-8 corner-bracket-tl flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-2 text-telemetry-cyan font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
          <GraduationCap className="w-4 h-4" />
          <span>ACADEMIC FOUNDATION</span>
        </div>

        <h3 className="font-display font-bold text-2xl text-editorial-white mb-1">
          {EDUCATION_DATA.degree}
        </h3>
        <p className="font-mono text-xs text-lime mb-4">
          {EDUCATION_DATA.institution}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-editorial-muted mb-6 pb-4 border-b border-command-border">
          <span className="flex items-center space-x-1">
            <Award className="w-3.5 h-3.5 text-lime" />
            <span className="text-editorial-white font-bold">CGPA: {EDUCATION_DATA.cgpa}</span>
          </span>
          <span className="text-editorial-subtle">|</span>
          <span className="text-telemetry-cyan">{EDUCATION_DATA.expectedGraduation}</span>
          <span className="text-editorial-subtle">|</span>
          <span className="flex items-center space-x-1">
            <MapPin className="w-3.5 h-3.5 text-editorial-subtle" />
            <span>{EDUCATION_DATA.location}</span>
          </span>
        </div>

        <div>
          <div className="flex items-center space-x-1.5 font-mono text-xs text-editorial-muted uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-lime" />
            <span>RELEVANT COURSEWORK</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
            {EDUCATION_DATA.coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-2 bg-command-bg border border-command-border/60 rounded-xs text-editorial-grey flex items-center space-x-2"
              >
                <span className="text-lime text-[10px]">•</span>
                <span className="truncate">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-command-border/60 font-mono text-xs text-editorial-muted flex items-center justify-between">
        <span>ELECTIVE: Real-Time Systems</span>
        <span className="text-lime">ACADEMIC EXCELLENCE</span>
      </div>
    </div>
  );
};
