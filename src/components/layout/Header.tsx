import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Button } from '../ui/Button';

interface HeaderProps {
  onOpenTerminal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-command-bg/95 backdrop-blur-md border-command-border py-3 shadow-lg'
          : 'bg-command-bg/80 backdrop-blur-sm border-command-border/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Telemetry Status */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <a
              href="#"
              className="font-display font-bold text-lg sm:text-xl tracking-tight text-editorial-white hover:text-lime transition-colors flex items-center space-x-2"
            >
              <span className="text-lime font-mono">&gt;</span>
              <span>JOEL JO</span>
            </a>

            <div className="hidden lg:flex items-center space-x-2 font-mono text-[11px] text-editorial-muted bg-command-surface px-2.5 py-1 rounded-xs border border-command-border">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse"></span>
              <span>SYS_OK // 240MHz // RTOS: ACTIVE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 font-mono text-xs text-editorial-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-editorial-white transition-colors py-1 hover:border-b hover:border-lime"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Terminal + Resume */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button
              variant="terminal"
              size="sm"
              onClick={onOpenTerminal}
              icon={<Terminal className="w-3.5 h-3.5" />}
              title="Launch interactive command console (`)"
            >
              Terminal
            </Button>

            <Button
              variant="primary"
              size="sm"
              href={PERSONAL_INFO.resumeDriveUrl}
              target="_blank"
              icon={<FileText className="w-3.5 h-3.5" />}
            >
              Resume ↗
            </Button>
          </div>

          {/* Mobile Menu & Terminal Toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 text-telemetry-cyan hover:bg-command-surface rounded border border-telemetry-cyan/30"
              title="Open Terminal"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-editorial-white hover:bg-command-surface rounded border border-command-border"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-command-surface border-b border-command-border px-4 py-6 mt-3 space-y-4 font-mono text-sm">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-command-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-editorial-muted hover:text-editorial-white p-2 hover:bg-command-hover rounded"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Button
              variant="primary"
              size="md"
              href={PERSONAL_INFO.resumeDriveUrl}
              target="_blank"
              icon={<FileText className="w-4 h-4" />}
            >
              View Official Resume (Drive) ↗
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
