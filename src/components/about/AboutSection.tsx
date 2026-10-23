import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Cpu, Terminal, Shield, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Terminal className="w-5 h-5 text-lime" />,
      title: "Bare-Metal & RTOS Determinism",
      description: "Writing predictable low-level C firmware. Designing interrupt-driven architectures, preemption schemes, and FreeRTOS task graphs with zero priority inversion."
    },
    {
      icon: <Cpu className="w-5 h-5 text-telemetry-cyan" />,
      title: "Target Architectures",
      description: "Hands-on engineering across STM32 (ARM Cortex-M) and ESP32 (Xtensa Dual-Core). Deep familiarity with hardware registers, clock trees, DMA, and low-power modes."
    },
    {
      icon: <Shield className="w-5 h-5 text-telemetry-amber" />,
      title: "Automotive & Safety-Critical",
      description: "Passionate about vehicular systems, V2V/V2X wireless collision avoidance, and passive safety controllers where fail-safe determinism is non-negotiable."
    },
    {
      icon: <Zap className="w-5 h-5 text-lime" />,
      title: "Hardware-Software Co-Design",
      description: "Validating sensor front-ends, logic signal transitions with oscilloscopes and analyzers, and implementing digital filters to eliminate real-world noise."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-command-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="02 // ABOUT"
          title="ENGINEERING PHILOSOPHY"
          subtitle="Grounded in low-level registers, real-time safety, and practical hardware prototyping."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-editorial-grey text-base sm:text-lg leading-relaxed font-sans">
            <p className="text-editorial-white font-medium text-lg sm:text-xl leading-snug">
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </p>

            <p>
              I am an Electronics and Communication Engineering undergraduate at REVA University (CGPA 8.7/10) with an intense focus on embedded systems and firmware engineering. While software often assumes infinite resources, embedded development demands absolute accountability for every CPU cycle, microsecond of latency, and milliwatt of power.
            </p>

            <p>
              My work spans from safety-critical FreeRTOS airbag deployment logic and dual-core ESP32 vehicle-to-vehicle collision avoidance systems, to wearable biosignal monitors that classify pathological tremors in real time. As Vice President of the SCOPE Club, I actively lead workshops teaching hardware prototyping, PCB fundamentals, and microcontroller programming.
            </p>

            <div className="p-4 bg-command-surface border-l-2 border-lime font-mono text-xs text-editorial-muted">
              <span className="text-lime font-semibold uppercase block mb-1">CURRENT INVESTIGATION:</span>
              {PERSONAL_INFO.currentFocus}
            </div>
          </div>

          {/* Core Technical Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 font-mono">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 bg-command-surface border border-command-border rounded-xs hover:border-command-borderStrong transition-all corner-bracket-tl"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-1.5 bg-command-bg rounded border border-command-border">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-editorial-white uppercase tracking-wide">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-editorial-muted font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
