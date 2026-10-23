import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'cyan' | 'amber' | 'muted' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'muted',
  size = 'sm',
  className = ''
}) => {
  const variantStyles = {
    lime: 'bg-lime-dim text-lime border-lime/30',
    cyan: 'bg-telemetry-cyan/10 text-telemetry-cyan border-telemetry-cyan/30',
    amber: 'bg-telemetry-amber/10 text-telemetry-amber border-telemetry-amber/30',
    muted: 'bg-command-surface text-editorial-muted border-command-border',
    outline: 'border-editorial-subtle/40 text-editorial-grey'
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wide'
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium border rounded-xs uppercase select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
