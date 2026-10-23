import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-command-bg border-t border-command-border/80 py-10 font-mono text-xs text-editorial-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Brand Metadata */}
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <span className="text-lime font-bold">&gt;</span>
            <span className="text-editorial-white font-medium">JOEL JO</span>
            <span className="text-editorial-subtle">|</span>
            <span>{PERSONAL_INFO.location}</span>
            <span className="text-editorial-subtle">|</span>
            <span className="text-lime font-semibold">B.Tech ECE (CGPA 8.7)</span>
          </div>

          {/* Right Action Anchors */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenTerminal}
              className="hover:text-telemetry-cyan flex items-center space-x-1"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>&gt;_ Terminal</span>
            </button>

            <span className="text-editorial-subtle">•</span>

            <button
              onClick={scrollToTop}
              className="hover:text-lime flex items-center space-x-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-command-border/40 text-center sm:text-left text-[11px] text-editorial-subtle flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Built with React, TypeScript, Tailwind CSS &amp; FreeRTOS-inspired design tokens.
          </div>
          <div>
            &copy; {new Date().getFullYear()} Joel Jo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
