import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { SkillsMatrix } from './components/skills/SkillsMatrix';
import { PublicationSection } from './components/research/PublicationSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { AchievementsSection } from './components/achievements/AchievementsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { TerminalDrawer } from './components/terminal/TerminalDrawer';
import { useTerminal } from './components/terminal/useTerminal';

export default function App() {
  const terminal = useTerminal();

  return (
    <div className="min-h-screen bg-command-bg text-editorial-white font-sans selection:bg-lime selection:text-command-bg flex flex-col">
      {/* Top Header Navigation */}
      <Header onOpenTerminal={terminal.openTerminal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenTerminal={terminal.openTerminal} />
        <AboutSection />
        <ProjectsSection />
        <SkillsMatrix />
        <PublicationSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection onOpenTerminal={terminal.openTerminal} />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={terminal.openTerminal} />

      {/* Interactive Command Terminal Drawer */}
      <TerminalDrawer terminal={terminal} />
    </div>
  );
}
