import { FloatingNav } from "../components/ui/floating-navbar";
import {AboutSection } from "./_components/about.section";
import { HeroSection } from "./_components/hero.section";
import { ProjectsSection } from "./_components/projects.section";
import { navbarOptions } from "./_constants/data";

export default function Home() {
  return (
    <div>
      {/* <FloatingNav navItems={navbarOptions} /> */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection/>
    </div>
  );
}
