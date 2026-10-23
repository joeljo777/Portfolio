# Major Engineering & Design Decisions
## Joel Jo — Personal Engineering Portfolio
*Document Owner: Joel Jo*  
*Maintained by: Antigravity Pair Programmer*  
*Last Updated: 2026-10-22*

> This document permanently records the foundational architectural, design, content, and technology decisions established throughout the planning and development phases.

---

## 1. Repository & Workspace Location
- **Decision**: The entire portfolio application will be constructed inside `c:\Users\josab\davinci media\Portfolio\Portfolio`.
- **Context & Rationale**: This directory already contains the active `.git` repository, the initial `README.md`, and the authentic `images/achievments/` folder. Building here keeps version control and assets unified without unnecessary file migrations.

---

## 2. Visual Direction & Aesthetic Language
- **Decision**: Adopt a **Dark Technical Editorial** design language fused with an **Engineering Command Center** motif.
- **Key Visual Elements**:
  - **Color Palette**: Deep command charcoal (`#121212`), elevated surface panels (`#1a1a1a`), crisp warm white (`#f5f4f0`), technical grey dividers (`#d9d9d5`), and sharp pale lime accents (`#ddf5ce`) for active states and primary CTAs.
  - **Structural Grid**: High-contrast, fine 1px structural grid lines and subtle corner bracket accents `[ + ]`.
  - **Typography Roles**:
    - *Space Grotesk* for bold, oversized display typography.
    - *Inter* for clear, modern technical body reading.
    - *JetBrains Mono* for telemetry badges, pinouts, and the interactive terminal console.
  - **Authenticity Rule**: Avoid fake live telemetry or generic AI circuit graphics; all graphics and schematics must directly reflect Joel's verified hardware (STM32, ESP32, LoRa, FreeRTOS).

---

## 3. Technology Stack & Framework Selection
- **Decision**: **React 18 + TypeScript + Vite + Tailwind CSS + Lucide Icons + Motion for React**.
- **Rationale**:
  - **Vite**: Sub-second Hot Module Replacement (HMR) and optimized Rollup production bundling.
  - **React 18 + TypeScript**: Guarantees strict type safety across engineering schemas (hardware pins, communication buses, sensor models) and provides frictionless state management for the interactive terminal drawer and achievement lightbox modal.
  - **Tailwind CSS**: Direct token implementation of custom colors, fine borders, and responsive grid layouts.
  - **Motion for React**: Hardware-accelerated, restrained micro-interactions that strictly comply with `prefers-reduced-motion`.
  - **Lucide Icons**: Crisp, lightweight technical SVG iconography.

---

## 4. Interactive Engineering Command Terminal (CLI Drawer)
- **Decision**: Build an interactive, command-center terminal accessible via the navigation bar (`[>_ CLI]`), hero button, or the keyboard shortcut (`` ` `` or `/`).
- **Rationale**: Elevates the portfolio above generic templates, providing recruiters and technical visitors with an intuitive, memorable way to explore Joel's hardware stack, RTOS concepts, projects, and credentials.
- **Engineered Commands**: `help`, `bio`, `skills`, `projects`, `project <id>`, `awards`, `pub`, `edu`, `resume`, `contact`, `clear`, `neofetch`.
- **Keyboard Features**: History recall (Up/Down arrow keys) and Tab auto-completion.

---

## 5. Single Source of Truth & Zero-Invention Content Policy
- **Decision**: All information is verified directly from Joel Jo's official resume, IEEE publication, and event documentation. No details or metrics are assumed or invented.
- **Persistent Reference File**: Maintained at `verified_portfolio_data.md` and decoupled into typed data files in `src/data/portfolioData.ts`.
- **Verified Core Identity**:
  - **Name**: Joel Jo
  - **Title**: Embedded Systems & Firmware Engineer | Automotive Electronics & Real-Time Systems
  - **Academics**: B.Tech in Electronics & Communication Engineering, REVA University (CGPA 8.7/10, Expected 2027)
  - **Leadership**: Vice President – SCOPE Club, REVA University (30%+ membership growth, 20+ juniors mentored)
  - **IEEE Publication**: CONIT 2026 IEEE paper on V2X Communication & Smart Traffic Management.

---

## 6. Skills Classification & Proficiency Tiers
- **Decision**: Classify all technical skills into three transparent proficiency tiers:
  1. **Proficient**: C, Embedded C, Python, STM32, STM32CubeIDE, ESP32, FreeRTOS, Hardware Interrupts, UART, SPI, I2C, LoRa.
  2. **Familiar**: C++, Real-Time Embedded Systems, GPS Interfacing, MATLAB, Simulink, TINA-TI, KiCad.
  3. **Exploring**: Data Structures fundamentals, CAN Bus Protocols, QNX RTOS Concepts, LabVIEW.
- **Rationale**: Distinguishes demonstrated project competence from theoretical or emerging knowledge, protecting Joel's technical credibility during technical interviews.

---

## 7. Verified Achievements Gallery with High-Resolution Lightbox
- **Decision**: Implement a dedicated visual achievements gallery powered by an interactive modal lightbox using authentic event photos located at `images/achievments/`:
  1. `ElectroXcape.JPG`: 1st Prize at Ramaiah University of Applied Sciences (RUAS) Pravrutti 2.0 (Team AstroDevs, ₹7,000 cash prize).
  2. `Anveshan_IEEE.png`: 1st Prize Winner at IEEE ANVESHAN State-Level Hackathon by IEEE Bangalore Section & Acharya (Parkinson's Monitoring System, ₹15,000 cash prize).
  3. `CMTI.jpeg`: 1st Runner-Up at Central Manufacturing Technology Institute (CMTI) Design & Innovation Clinic 2026 for Asthma Guard.
  4. `QUIZ.jpg`: 1st Place at Technical Quiz by School of ECE with IEEE AP-S & IEEE SPS REVA University.
- **Modal Behavior**: Clicking any card opens an edge-to-edge lightbox with full event citations, zoom capability, and `ESC` dismissal.

---

## 8. Asset Optimization Strategy
- **Decision**: Maintain the original high-resolution master images (`ElectroXcape.JPG` at 27.2MB and `Anveshan_IEEE.png` at 11.1MB) in `public/images/achievments/` for uncompressed lightbox inspection, while generating lightweight web-optimized thumbnails (<300KB) with `loading="lazy"` for initial grid rendering.
- **Rationale**: Ensures initial page load is sub-second (under 1000ms) without sacrificing high-resolution clarity when an image is clicked.

---

## 9. Resume Access Architecture
- **Decision**: Dual-action resume integration:
  1. Primary CTA: Direct hyperlink to Joel's official [Google Drive View Link](https://drive.google.com/file/d/1TGS5SRY794NPwbgRr_TQ4EBOv1Pkj3dM/view?usp=sharing).
  2. Secondary / Fallback: Direct local PDF download button from `public/resume.pdf`.

---

## 10. Deployment Strategy
- **Decision**: Deploy on **Vercel** via GitHub integration.
- **Rationale**: Zero-config deployment for Vite/React applications, instant global CDN delivery, preview environments for testing, and seamless custom domain mapping.

---

## 11. Component Architecture — Local State, No Global Store
- **Decision**: Manage all interactive state (`useState`, `useCallback`, custom hooks) at the component level. No Redux, Zustand, or Context API is used.
- **Rationale**: The portfolio is read-only with three isolated interaction surfaces (terminal drawer, project modal, achievement lightbox). Each is fully self-contained with no shared state requirements. A global store would add unnecessary complexity.

---

## 12. Terminal CLI — Custom Hook Architecture (`useTerminal.ts`)
- **Decision**: Encapsulate the entire CLI engine (history navigation, Tab autocomplete, command parsing, output rendering) inside a single `useTerminal` custom hook.
- **Commands implemented (12 total)**: `help`, `bio`, `skills`, `projects`, `project <id>`, `awards`, `pub`, `edu`, `leadership`, `resume`, `contact`, `neofetch`, `clear`.
- **Keyboard UX**: ArrowUp/ArrowDown for command history recall; Tab for autocomplete against the verified command registry.
- **Rationale**: Keeps `TerminalDrawer.tsx` purely presentational and fully testable via the hook API.

---

## 13. Achievement Card — Image-First Layout with Metadata Overlay
- **Decision**: Each `AchievementCard.tsx` renders the authentic event photo as the primary visual element, with a hover-triggered overlay revealing the prize tier, event name, and date. Clicking opens a full-screen `ImageLightbox.tsx`.
- **Photo-to-Achievement Mapping**:
  - `ElectroXcape.JPG` → ElectroXcape 1st Prize (Pravrutti 2.0, RUAS, ₹7,000)
  - `Anveshan_IEEE.png` → IEEE ANVESHAN State Hackathon 1st Prize (₹15,000)
  - `CMTI.jpeg` → CMTI Design & Innovation Clinic 1st Runner-Up (Asthma Guard)
  - `QUIZ.jpg` → IEEE AP-S / SPS Technical Quiz 1st Place
- **Rationale**: Photo-first layout is far more credible and memorable than icon-only cards, and directly proves the award authenticity.

---

## 14. Image Lightbox — ESC + Overlay Dismissal + Navigation
- **Decision**: `ImageLightbox.tsx` opens on a `<dialog>`-style overlay with:
  - `ESC` keyboard dismissal via `useEffect` listener.
  - Click-outside (overlay backdrop) dismissal.
  - Prev/Next navigation arrows between all achievements.
  - Full event citation (title, organizer, date, description, prize) below the image.
- **Rationale**: Provides recruiter-grade image inspection without requiring a third-party lightbox library.

---

## 15. Project Case Study Modal — Specification-Grade Technical Detail
- **Decision**: Each `ProjectModal.tsx` renders:
  - System overview, hardware block diagram (text-based), and communication bus topology.
  - Firmware architecture details (FreeRTOS task scheduling, ISR patterns, UART/SPI/I2C protocols).
  - Verified performance metrics and outcomes.
  - GitHub repository link (or placeholder for private repos).
- **Rationale**: Technical recruiters and engineering hiring managers expect specification-level depth, not marketing summaries. The modal format prevents cluttering the main project grid.

---

## 16. Build Verification — Zero-Error Production Build Confirmed
- **Decision**: All implementation milestones (1–9) were verified via a successful `npm run build` run with zero TypeScript compilation errors and zero bundler warnings.
- **Bundle outputs**: `index.js` (main chunk), `vendor.js` (React + Motion), plus hashed asset files for all images.
- **Date of last successful build**: 2026-10-22.
- **Status**: ✅ Deployment-ready.
