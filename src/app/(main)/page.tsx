"use client";
import { useOrigin } from "@/hooks/useOrigin";
import { Loader } from "lucide-react";
import dynamic from "next/dynamic";
const AboutSection = dynamic(() => import("./_components/about.section"), {
  ssr: false,
});
const BackgroundBoxes = dynamic(() => import("./_components/boxes.section"), {
  ssr: false,
});
const Experience = dynamic(() => import("./_components/experience"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("./_components/hero.section"), {
  ssr: false, loading: () => <div className=" flex h-screen w-screen justify-center items-center">
    <Loader className=" h-8 w-8 animate-spin"/>
  </div>
});
const ProjectsSection = dynamic(
  () => import("./_components/projects.section"),
  { ssr: false }
);
const Skills = dynamic(() => import("./_components/skills"), { ssr: false });
const TestimonialSection = dynamic(
  () => import("./_components/testimonial.section"),
  { ssr: false }
);

export default function Home() {
  const isMounted = useOrigin();

  if (!isMounted) return <div className=" flex h-screen w-screen justify-center items-center">
    <Loader className=" h-6 w-6 animate-spin"/>
  </div>;
  if(isMounted){
    if(window.screen.width < 768){
      window.location.href = "https://sandeepdev.engineer"
    }
  }
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
