import { FloatingNav } from "../components/ui/floating-navbar";
import {AboutSection } from "./_components/about.section";
import { BackgroundBoxes } from "./_components/boxes.section";
import Experience from "./_components/experience";
import { HeroSection } from "./_components/hero.section";
import { ProjectsSection } from "./_components/projects.section";
import Skills from "./_components/skills";
import { TestimonialSection } from "./_components/testimonial.section";

export default function Home() {
  return (
    <div className="">
      {/* <FloatingNav navItems={navbarOptions} /> */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection/>
      <Skills/>
      <Experience/>
      <TestimonialSection/>
      <BackgroundBoxes/>
    </div>
  );
}
