import React from 'react';
import { Terminal, ArrowDown, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { EngineeringFocusStrip } from './EngineeringFocusStrip';

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-command-border/60">
      {/* Background Accent Grids */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none"></div>
      
      {/* Subtle Hardware Schematic Watermark Accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Operational Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-command-surface border border-command-border rounded-xs text-xs font-mono text-editorial-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
          <span className="text-editorial-white font-medium">B.TECH ECE // REVA UNIVERSITY</span>
          <span className="text-editorial-subtle">|</span>
          <span className="text-lime">CGPA 8.7 / 10</span>
        </div>

        {/* Massive Bold Condensed Display Typography */}
        <div className="mb-6">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-editorial-white uppercase leading-[0.9]">
            JOEL JO
          </h1>
          <p className="font-mono text-base sm:text-xl lg:text-2xl text-lime mt-4 tracking-wide font-medium">
            EMBEDDED SYSTEMS & REAL-TIME FIRMWARE ENGINEER
          </p>
        </div>

        {/* Engineering Value Proposition */}
        <p className="text-editorial-muted text-base sm:text-lg max-w-3xl font-sans leading-relaxed mb-10">
          Specializing in bare-metal firmware, deterministic FreeRTOS task scheduling, and automotive electronics. Experienced in architecting dual-core ESP32 wireless safety systems, safety-critical interrupt routines, and biosignal processing on ARM Cortex-M and Xtensa architectures.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            icon={<ArrowDown className="w-4 h-4" />}
          >
            Explore Projects
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href={PERSONAL_INFO.resumeDriveUrl}
            target="_blank"
            icon={<ExternalLink className="w-4 h-4 text-lime" />}
          >
            Official Resume (Drive)
          </Button>

          <Button
            variant="terminal"
            size="lg"
            onClick={onOpenTerminal}
            icon={<Terminal className="w-4 h-4" />}
          >
            &gt;_ Launch Terminal
          </Button>
        </div>

        {/* 4-Column Metric Focus Strip */}
        <EngineeringFocusStrip />

      </div>
    </section>
  );
};
