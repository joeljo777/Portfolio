import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../../data/portfolioData';
import { Achievement } from '../../types/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { AchievementCard } from './AchievementCard';
import { ImageLightbox } from './ImageLightbox';

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="py-20 sm:py-28 border-b border-command-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="06 // AWARDS"
          title="VERIFIED ACHIEVEMENTS & PODIUMS"
          subtitle="Documented state and national hackathon victories, engineering clinics, and technical quiz championships."
        />

        {/* 4-Card Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {ACHIEVEMENTS.map((item) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              onOpenLightbox={(a) => setSelectedAchievement(a)}
            />
          ))}
        </div>

      </div>

      {/* High-Resolution Modal Lightbox */}
      <ImageLightbox
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
};
