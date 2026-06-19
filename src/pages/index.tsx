import { lazy, Suspense } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';

const AboutSection = lazy(() =>
  import('@/components/sections/AboutSection').then((m) => ({
    default: m.AboutSection,
  }))
);
const SkillsSection = lazy(() =>
  import('@/components/sections/SkillsSection').then((m) => ({
    default: m.SkillsSection,
  }))
);
const ProjectsSection = lazy(() =>
  import('@/components/sections/ProjectsSection').then((m) => ({
    default: m.ProjectsSection,
  }))
);
const AWSSection = lazy(() =>
  import('@/components/sections/AWSSection').then((m) => ({
    default: m.AWSSection,
  }))
);
const AchievementsSection = lazy(() =>
  import('@/components/sections/AchievementsSection').then((m) => ({
    default: m.AchievementsSection,
  }))
);
const ServicesSection = lazy(() =>
  import('@/components/sections/ServicesSection').then((m) => ({
    default: m.ServicesSection,
  }))
);
const CompanySection = lazy(() =>
  import('@/components/sections/CompanySection').then((m) => ({
    default: m.CompanySection,
  }))
);
const ContactSection = lazy(() =>
  import('@/components/sections/ContactSection').then((m) => ({
    default: m.ContactSection,
  }))
);

function SectionFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
    </div>
  );
}

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AWSSection />
        <AchievementsSection />
        <ServicesSection />
        <CompanySection />
        <ContactSection />
      </Suspense>
    </main>
  );
}
