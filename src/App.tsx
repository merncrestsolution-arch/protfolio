import { useGlobalMouse } from './hooks/useGlobalMouse';
import { SmoothScroll } from './components/common/SmoothScroll';
import { MouseGlow } from './components/common/MouseGlow';
import { Navbar } from './components/common/Navbar';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AWSSection } from './components/sections/AWSSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CompanySection } from './components/sections/CompanySection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  useGlobalMouse();

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-bg text-white perspective-container">
        <MouseGlow />
        <Navbar />
        <ScrollToTop />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AWSSection />
          <AchievementsSection />
          <ServicesSection />
          <CompanySection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
