import React, { useEffect } from 'react';
import { Achievement } from '../../types/portfolio';
import { X, Trophy, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface ImageLightboxProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ achievement, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (achievement) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative w-full max-w-5xl bg-command-bg border border-command-borderStrong shadow-2xl rounded-sm my-auto z-10 max-h-[95vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Header */}
        <div className="px-5 py-4 bg-command-surface border-b border-command-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="p-1.5 bg-command-bg rounded border border-command-border text-lime">
              <Trophy className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-editorial-white leading-tight">
                {achievement.title}
              </h3>
              <p className="font-mono text-xs text-lime">
                {achievement.prize}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={achievement.image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-editorial-muted hover:text-editorial-white hover:bg-command-hover rounded border border-command-border text-xs font-mono hidden sm:flex items-center space-x-1"
              title="Open full uncompressed original in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full Image ↗</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-editorial-muted hover:text-editorial-white hover:bg-command-hover rounded border border-command-border"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-Resolution Image Canvas */}
        <div className="relative bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden max-h-[65vh]">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="max-h-[60vh] w-auto max-w-full object-contain rounded-xs shadow-2xl"
          />
        </div>

        {/* Context & Description Footer */}
        <div className="p-5 bg-command-surface border-t border-command-border space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-editorial-muted">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-telemetry-cyan" />
                <span>{achievement.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-editorial-subtle" />
                <span>{achievement.organizer}</span>
              </span>
            </div>

            {achievement.team && (
              <Badge variant="cyan">Team: {achievement.team}</Badge>
            )}
          </div>

          <p className="text-editorial-grey text-xs sm:text-sm font-sans leading-relaxed">
            {achievement.description}
          </p>
        </div>

        {/* Dismissal bar */}
        <div className="px-5 py-2 bg-command-bg border-t border-command-border/40 flex items-center justify-between text-[11px] font-mono text-editorial-subtle select-none">
          <span>Click anywhere outside or press &apos;ESC&apos; to close</span>
          <button onClick={onClose} className="text-lime hover:underline">
            Dismiss [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
