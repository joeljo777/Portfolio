import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Mail, Phone, Linkedin, Github, FileText, Check, Copy, Terminal } from 'lucide-react';

interface ContactSectionProps {
  onOpenTerminal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenTerminal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="08 // SIGNAL"
          title="GET IN TOUCH"
          subtitle="Open to embedded systems, real-time firmware, and automotive electronics engineering opportunities."
        />

        <div className="bg-command-surface border border-command-border rounded-xs p-6 sm:p-12 corner-bracket-tl corner-bracket-br">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-lime mb-2">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
                <span>COMMUNICATION CHANNELS ACTIVE</span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-editorial-white tracking-tight">
                Let&apos;s build resilient hardware &amp; firmware.
              </h3>

              <p className="text-editorial-muted text-sm sm:text-base font-sans leading-relaxed max-w-xl">
                Whether you have an embedded systems internship, automotive telemetry project, or want to discuss FreeRTOS architecture, my inbox and terminal are always open.
              </p>

              {/* One-Click Copy Email Pill */}
              <div className="pt-2">
                <div className="inline-flex items-center space-x-3 p-3 bg-command-bg border border-command-border rounded-xs font-mono text-xs">
                  <Mail className="w-4 h-4 text-lime shrink-0" />
                  <span className="text-editorial-white select-all">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-editorial-muted hover:text-lime transition-colors ml-2"
                    title="Copy email to clipboard"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-lime" /> : <Copy className="w-4 h-4" />}
                  </button>
                  {copied && <span className="text-[10px] text-lime">Copied!</span>}
                </div>
              </div>
            </div>

            {/* Right Action Channels Column */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-command-bg border border-command-border rounded-xs hover:border-lime/40 hover:bg-command-hover transition-all flex items-center space-x-3 group"
              >
                <Github className="w-5 h-5 text-editorial-white group-hover:text-lime transition-colors" />
                <div>
                  <div className="text-editorial-white font-medium">GitHub</div>
                  <div className="text-[11px] text-editorial-muted">@joeljo777</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-command-bg border border-command-border rounded-xs hover:border-lime/40 hover:bg-command-hover transition-all flex items-center space-x-3 group"
              >
                <Linkedin className="w-5 h-5 text-editorial-white group-hover:text-lime transition-colors" />
                <div>
                  <div className="text-editorial-white font-medium">LinkedIn</div>
                  <div className="text-[11px] text-editorial-muted">in/joel-jo</div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-4 bg-command-bg border border-command-border rounded-xs hover:border-lime/40 hover:bg-command-hover transition-all flex items-center space-x-3 group"
              >
                <Phone className="w-5 h-5 text-editorial-white group-hover:text-lime transition-colors" />
                <div>
                  <div className="text-editorial-white font-medium">Phone</div>
                  <div className="text-[11px] text-editorial-muted">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <button
                onClick={onOpenTerminal}
                className="p-4 bg-command-bg border border-telemetry-cyan/30 rounded-xs hover:border-telemetry-cyan hover:bg-command-hover transition-all flex items-center space-x-3 group text-left"
              >
                <Terminal className="w-5 h-5 text-telemetry-cyan group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-telemetry-cyan font-medium">CLI Terminal</div>
                  <div className="text-[11px] text-editorial-muted">Run commands</div>
                </div>
              </button>

              <div className="sm:col-span-2 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  href={PERSONAL_INFO.resumeDriveUrl}
                  target="_blank"
                  icon={<FileText className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  View Official Resume (Google Drive) ↗
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
