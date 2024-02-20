"use client";
import dynamic from "next/dynamic";
const AboutSection = dynamic(()=>import ("./_components/about.section"),{ ssr: false });
const BackgroundBoxes = dynamic(()=>import ("./_components/boxes.section"),{ ssr: false });
const Experience = dynamic(()=>import ("./_components/experience"),{ ssr: false });
const HeroSection = dynamic(()=>import ("./_components/hero.section"),{ ssr: false });
const ProjectsSection = dynamic(()=>import ("./_components/projects.section"),{ ssr: false });
const Skills = dynamic(()=>import ("./_components/skills"),{ ssr: false });
const TestimonialSection = dynamic(()=>import ("./_components/testimonial.section") ,{ ssr: false });

export default function Home() {
  if (window.innerWidth <= 768) {
    window.location.href = "https://sandeepdev.engineer";
  } else {
    return (
      <div className=" overflow-x-hidden">
        {/* <FloatingNav navItems={navbarOptions} /> */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Skills />
        <Experience />
        <TestimonialSection />
        <BackgroundBoxes />
      </div>
    );
  }
}
