import React from 'react';
import HeroSection from './sections/Hero/HeroContent';
import AboutSection from './sections/About';
import SkillsSection from './sections/Skills';
import ProjectsSection from './sections/Projects';
import GitHubSection from './sections/GitHub';
import ContactSection from './sections/Contact';

/**
 * Homepage — composes all portfolio sections.
 * Server component: Navbar and Footer are in the layout.
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] bg-grid pb-24 md:pb-0 lg:snap-y lg:snap-mandatory">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubSection />
      <ContactSection />
    </main>
  );
}
