import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { LeadershipTimeline } from './LeadershipTimeline';
import { EducationCard } from './EducationCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-command-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="07 // LEADERSHIP & ACADEMICS"
          title="EXPERIENCE & EDUCATION"
          subtitle="Student leadership impact, technical workshop mentoring, and academic credentials at REVA University."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <LeadershipTimeline />
          <EducationCard />
        </div>

      </div>
    </section>
  );
};
