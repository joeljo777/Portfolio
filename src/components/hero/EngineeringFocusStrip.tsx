import React from 'react';
import { Cpu, Clock, Network, Trophy } from 'lucide-react';

export const EngineeringFocusStrip: React.FC = () => {
  const metrics = [
    {
      icon: <Cpu className="w-5 h-5 text-lime" />,
      label: "TARGET ARCHITECTURES",
      value: "STM32 & ESP32",
      detail: "ARM Cortex-M4 & Xtensa Dual-Core"
    },
    {
      icon: <Clock className="w-5 h-5 text-telemetry-cyan" />,
      label: "REAL-TIME KERNEL",
      value: "FreeRTOS IPC",
      detail: "Preemptive tasks, queues & semaphores"
    },
    {
      icon: <Network className="w-5 h-5 text-telemetry-amber" />,
      label: "COMMUNICATION BUSES",
      value: "LoRa / UART / SPI / I2C",
      detail: "Automotive V2X & sensor telemetry"
    },
    {
      icon: <Trophy className="w-5 h-5 text-lime" />,
      label: "AWARDS & PODIUMS",
      value: "4 Verified Wins",
      detail: "State & National Hackathon 1st Prizes"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item, idx) => (
        <div
          key={idx}
          className="bg-command-surface/90 border border-command-border p-5 rounded-xs hover:border-command-borderStrong transition-all corner-bracket-tl"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="p-2 bg-command-bg rounded border border-command-border/50">
              {item.icon}
            </span>
            <span className="text-[10px] font-mono text-editorial-muted tracking-widest">
              TELEMETRY_0{idx + 1}
            </span>
          </div>
          <div className="text-[11px] font-mono text-editorial-muted tracking-wider uppercase mb-1">
            {item.label}
          </div>
          <div className="font-display font-bold text-lg text-editorial-white tracking-tight mb-1">
            {item.value}
          </div>
          <div className="text-xs text-editorial-muted font-sans">
            {item.detail}
          </div>
        </div>
      ))}
    </div>
  );
};
