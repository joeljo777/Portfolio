import React from 'react';
import { Achievement } from '../../types/portfolio';
import { Badge } from '../ui/Badge';
import { Maximize2, Trophy } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
  onOpenLightbox: (achievement: Achievement) => void;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  onOpenLightbox
}) => {
  return (
    <div
      onClick={() => onOpenLightbox(achievement)}
      className="bg-command-surface border border-command-border rounded-xs overflow-hidden hover:border-lime/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between corner-bracket-tl shadow-lg"
    >
      <div>
        {/* Photo Container */}
        <div className="relative aspect-[16/10] bg-command-bg overflow-hidden border-b border-command-border">
          <img
            src={achievement.thumbnail ?? achievement.image}
            alt={achievement.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-command-surface via-transparent to-transparent opacity-60"></div>

          {/* Expand Icon Badge */}
          <div className="absolute top-3 right-3 p-2 bg-command-bg/90 backdrop-blur-sm border border-command-border text-editorial-white rounded-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1.5 font-mono text-[11px]">
            <Maximize2 className="w-3.5 h-3.5 text-lime" />
            <span className="hidden sm:inline">Inspect Photo</span>
          </div>

          {/* Prize Pill */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-1 bg-command-bg/95 backdrop-blur-sm border border-lime text-lime font-mono text-[11px] font-bold rounded-xs flex items-center space-x-1 shadow-md">
              <Trophy className="w-3.5 h-3.5 text-lime" />
              <span>{achievement.prize.split('•')[0].trim()}</span>
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <div className="flex items-center justify-between text-xs font-mono text-editorial-muted mb-2">
            <span className="text-telemetry-cyan font-medium">{achievement.date}</span>
            <span className="text-editorial-subtle truncate max-w-[180px]">
              {achievement.organizer}
            </span>
          </div>

          <h3 className="font-display font-bold text-lg sm:text-xl text-editorial-white group-hover:text-lime transition-colors mb-2 leading-snug">
            {achievement.title}
          </h3>

          <p className="text-editorial-muted text-xs sm:text-sm font-sans line-clamp-3 mb-4 leading-relaxed">
            {achievement.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
            {achievement.tags.map((tag, idx) => (
              <Badge key={idx} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-3 bg-command-bg border-t border-command-border/60 flex items-center justify-between font-mono text-[11px] text-editorial-subtle">
        <span>{achievement.team || 'Joel Jo'}</span>
        <span className="text-lime group-hover:underline flex items-center space-x-1">
          <span>Click to View Full Photo</span>
          <span>&rarr;</span>
        </span>
      </div>
    </div>
  );
};
