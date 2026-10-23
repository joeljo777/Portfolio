import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  badge,
  className = ''
}) => {
  return (
    <div className={`mb-10 sm:mb-14 ${className}`}>
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-lime tracking-widest">
        <span>[{number}]</span>
        <span className="w-8 h-[1px] bg-lime/40"></span>
        {badge && <span className="text-telemetry-cyan uppercase">{badge}</span>}
      </div>
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-editorial-white uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-editorial-muted text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
