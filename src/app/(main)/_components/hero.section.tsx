import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import React from "react";

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
export const HeroSection = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" flex flex-col gap-2 items-center ">
        <AnimatedTooltip imgHeight={140} imgWidth={140} items={profile} />
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-5">
          Sandeeep Singh
        </p>
        
       <TypewriterEffectSmooth words={words}/>
      </div>
    </div>
  );
};
