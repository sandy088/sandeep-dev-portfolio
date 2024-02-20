import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import React from "react";
import HeroHeading from "./hero_heading";
import HeroAbout from "./HeroAbout";
import Navbar from "./navbar";
import { ChevronUp } from "lucide-react";

const profile = [
  {
    id: 1,
    name: "Sandeeep Singh",
    designation: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/90024312?v=4",
  },
];
const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "a",
    },
    {
      text: "full-stack",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
const HeroSection = () => {
  return (
    <div id="home" className="h-[50rem]  w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" flex flex-col gap-2 w-[1200px] justify-center md:justify-between  h-full">
       <Navbar/>
       <div className="h-[60px] md:h-[50px]"></div>
       <HeroHeading/>
       <HeroAbout/>
       <div></div>
       <div className=" absolute bottom-7 md:bottom-20 left-[45%] md:left-[50%] animate-bounce"><ChevronUp className=" h-8 w-8 text-white"/></div>
      </div>
    </div>
  );
};

export default HeroSection;
