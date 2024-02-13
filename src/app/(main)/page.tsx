import {AboutSection } from "./_components/about.section";
import { HeroSection } from "./_components/hero.section";
import { ProjectsSection } from "./_components/projects.section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection/>
    </div>
  );
}
