import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS, SKILL_CATEGORIES, EDUCATION_DATA, LEADERSHIP_DATA, PUBLICATION_DATA } from './portfolioData';

export interface TerminalOutputLine {
  type: 'input' | 'output' | 'error' | 'success' | 'system' | 'ascii';
  content: string;
}

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: "Display list of available engineering console commands",
  bio: "Display engineering philosophy, background & identity",
  skills: "Inspect categorized hardware, MCU & firmware toolkit",
  projects: "List all 5 projects with architecture IDs and status",
  "project <id>": "Inspect deep technical specifications for a project (e.g. 'project v2v')",
  awards: "Display 4 verified hackathon championships & competition wins",
  pub: "Show IEEE CONIT 2026 conference publication record",
  edu: "Inspect academic records at REVA University (CGPA 8.7/10)",
  leadership: "Show SCOPE Club Vice Presidency leadership highlights",
  resume: "Open Joel's official Google Drive resume link",
  contact: "Output direct email, phone, LinkedIn, and GitHub links",
  neofetch: "Render retro ASCII hardware specs & telemetry readout",
  clear: "Clear current terminal console buffer"
};

export function executeCommand(inputRaw: string): TerminalOutputLine[] {
  const input = inputRaw.trim();
  const [cmd, ...args] = input.split(/\s+/);
  const command = cmd.toLowerCase();

  switch (command) {
    case 'help':
      return [
        { type: 'system', content: 'JOEL_JO // FIRMWARE COMMAND CENTER v1.0.4' },
        { type: 'system', content: 'Available commands:' },
        ...Object.entries(TERMINAL_COMMANDS).map(([c, desc]) => ({
          type: 'output' as const,
          content: `  ${c.padEnd(14)} - ${desc}`
        })),
        { type: 'system', content: "Tip: Press 'Tab' for autocomplete, Up/Down arrows for command history." }
      ];

    case 'bio':
    case 'about':
      return [
        { type: 'success', content: `[IDENTITY] ${PERSONAL_INFO.name}` },
        { type: 'system', content: `[ROLE]     ${PERSONAL_INFO.title}` },
        { type: 'system', content: `[FOCUS]    ${PERSONAL_INFO.currentFocus}` },
        { type: 'output', content: '' },
        { type: 'output', content: PERSONAL_INFO.summary },
        { type: 'output', content: '' },
        { type: 'system', content: `PHILOSOPHY: "${PERSONAL_INFO.tagline}"` }
      ];

    case 'skills':
      return [
        { type: 'system', content: '=== HARDWARE & FIRMWARE TECHNICAL TOOLKIT ===' },
        ...SKILL_CATEGORIES.flatMap(category => [
          { type: 'success' as const, content: `\n[ ${category.title.toUpperCase()} ]` },
          ...category.skills.map(s => {
            const badge = s.level === 'Proficient' ? '[CORE]' : s.level === 'Familiar' ? '[WORK]' : '[LEARN]';
            return {
              type: 'output' as const,
              content: `  ${badge.padEnd(8)} ${s.name.padEnd(26)} :: ${s.note || ''}`
            };
          })
        ])
      ];

    case 'projects':
      return [
        { type: 'system', content: '=== VERIFIED ENGINEERING PROJECTS ===' },
        ...PROJECTS.map(p => ({
          type: 'output' as const,
          content: `  ID: ${p.id.padEnd(28)} | ${p.mcu.padEnd(22)} | ${p.status}`
        })),
        { type: 'system', content: "\nType 'project <id>' (e.g. 'project v2v-collision-avoidance') for full architecture details." }
      ];

    case 'project': {
      if (args.length === 0) {
        return [
          { type: 'error', content: "Usage: project <id>" },
          { type: 'system', content: "Available IDs: v2v-collision-avoidance, airbag-management-system, asthma-guard, parkinsons-monitoring-system, square-wave-inverter" }
        ];
      }
      const targetId = args[0].toLowerCase();
      const p = PROJECTS.find(proj => proj.id.toLowerCase().includes(targetId) || proj.slug.toLowerCase().includes(targetId));
      if (!p) {
        return [
          { type: 'error', content: `Project '${args[0]}' not found.` },
          { type: 'system', content: "Type 'projects' to list all valid project IDs." }
        ];
      }
      return [
        { type: 'success', content: `[PROJECT] ${p.title}` },
        { type: 'system', content: `Category: ${p.category} | Timeline: ${p.timeline} | Status: ${p.status}` },
        { type: 'system', content: `Target MCU: ${p.mcu}` },
        { type: 'system', content: `Protocols:  ${p.protocols.join(', ')}` },
        { type: 'system', content: `Stack:      ${p.firmwareStack.join(', ')}` },
        { type: 'output', content: '' },
        { type: 'output', content: `SUMMARY:\n${p.summary}` },
        { type: 'output', content: '' },
        { type: 'success', content: 'ARCHITECTURE SPECIFICATION:' },
        ...p.architectureDetails.map(item => ({ type: 'output' as const, content: `  • ${item}` })),
        { type: 'output', content: '' },
        { type: 'success', content: 'KEY VALIDATION RESULTS:' },
        ...p.resultsAndValidation.map(item => ({ type: 'output' as const, content: `  ✓ ${item}` }))
      ];
    }

    case 'awards':
    case 'achievements':
      return [
        { type: 'system', content: '=== VERIFIED AWARDS & COMPETITION PODIUMS ===' },
        ...ACHIEVEMENTS.flatMap(a => [
          { type: 'success' as const, content: `\n🏆 ${a.title}` },
          { type: 'system' as const, content: `   Event:     ${a.event}` },
          { type: 'system' as const, content: `   Date:      ${a.date} | Organizer: ${a.organizer}` },
          { type: 'system' as const, content: `   Prize:     ${a.prize}` },
          { type: 'output' as const, content: `   Summary:   ${a.description}` },
          { type: 'output' as const, content: `   Image:     ${a.image}` }
        ])
      ];

    case 'pub':
    case 'publication':
      return [
        { type: 'system', content: '=== IEEE CONFERENCE PUBLICATION ===' },
        { type: 'success', content: `Title:     ${PUBLICATION_DATA.title}` },
        { type: 'system', content: `Venue:     ${PUBLICATION_DATA.conference}` },
        { type: 'system', content: `Publisher: ${PUBLICATION_DATA.publisher} (${PUBLICATION_DATA.year})` },
        { type: 'output', content: `Authors:   ${PUBLICATION_DATA.authors.join(', ')}` },
        { type: 'output', content: '' },
        { type: 'output', content: `ABSTRACT:\n${PUBLICATION_DATA.abstract}` }
      ];

    case 'edu':
    case 'education':
      return [
        { type: 'system', content: '=== ACADEMIC RECORD ===' },
        { type: 'success', content: EDUCATION_DATA.degree },
        { type: 'system', content: `Institution: ${EDUCATION_DATA.institution}, ${EDUCATION_DATA.location}` },
        { type: 'system', content: `Standing:    CGPA ${EDUCATION_DATA.cgpa} (${EDUCATION_DATA.expectedGraduation})` },
        { type: 'output', content: '\nKey Coursework:' },
        ...EDUCATION_DATA.coursework.map(c => ({ type: 'output' as const, content: `  • ${c}` }))
      ];

    case 'leadership':
    case 'exp':
      return [
        { type: 'system', content: '=== LEADERSHIP & TECHNICAL INITIATIVES ===' },
        { type: 'success', content: `${LEADERSHIP_DATA.role} @ ${LEADERSHIP_DATA.organization}` },
        { type: 'system', content: `Duration: ${LEADERSHIP_DATA.timeline} | ${LEADERSHIP_DATA.location}` },
        { type: 'output', content: '' },
        ...LEADERSHIP_DATA.highlights.map(h => ({ type: 'output' as const, content: `  • ${h}` }))
      ];

    case 'resume':
      if (typeof window !== 'undefined') {
        window.open(PERSONAL_INFO.resumeDriveUrl, '_blank');
      }
      return [
        { type: 'success', content: "Opening Joel's Google Drive Resume in a new browser tab..." },
        { type: 'output', content: `Direct URL: ${PERSONAL_INFO.resumeDriveUrl}` }
      ];

    case 'contact':
      return [
        { type: 'system', content: '=== DIRECT COMMUNICATION CHANNELS ===' },
        { type: 'output', content: `  Email:    ${PERSONAL_INFO.email}` },
        { type: 'output', content: `  Phone:    ${PERSONAL_INFO.phone}` },
        { type: 'output', content: `  LinkedIn: ${PERSONAL_INFO.linkedin}` },
        { type: 'output', content: `  GitHub:   ${PERSONAL_INFO.github}` },
        { type: 'output', content: `  Location: ${PERSONAL_INFO.location}` }
      ];

    case 'neofetch':
      return [
        { type: 'ascii', content: `
    ____  ______  __  __
   / __ \\/ ____/ / / / /   Joel Jo @ REVA-ECE-WS
  / /_/ / __/   / / / /    ---------------------
 / ____/ /___  / /_/ /     OS: FreeRTOS Preemptive / Baremetal
/_/   /_____/  \\____/      HOST: STM32F401 / ESP32 Dual-Core
                           KERNEL: ARM Cortex-M4 / Xtensa LX6
                           CLOCK: 240 MHz (ESP32) / 84 MHz (STM32)
                           BUSES: UART / SPI / I2C / LoRa RF
                           ACADEMIC: B.Tech ECE (CGPA 8.7/10)
                           PODIUMS: 4 State & National Awards
                           STATUS: SYS_NOMINAL // CAN ACTIVE
` },
        { type: 'system', content: "Ready for embedded systems & firmware engineering opportunities." }
      ];

    case 'clear':
      return [];

    default:
      return [
        { type: 'error', content: `command not found: ${command}` },
        { type: 'system', content: "Type 'help' for a list of available commands." }
      ];
  }
}
