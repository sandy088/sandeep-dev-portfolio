"use client";
import React from "react";
import skillsIco from "@/../../public/Skills-icon.svg";
import profile from "@/../../public/Group.svg";
import Image from "next/image";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
const myProfile = [
  {
    id: 1,
    name: "Sandeeep Singh",
    designation: "Full Stack Developer",
    image: profile,
  },
];
const HeroHeading = () => {
  return (
    <div className="mx-auto">
      <p className=" text-7xl font-bold">
        <span className=" text-8xl mr-2">{"{"}</span>
        {"Ingenious &"}
      </p>
      <div className=" flex items-center gap-2 mt-3 ml-3">
        <Image src={skillsIco} alt="skills" width={150} height={150} />
        <p className="text-7xl font-bold text-end my-2 ml-3">Full-Stack </p>
      </div>
      <div className="flex items-center gap-2 ml-2">
        <p className="text-7xl font-bold text-end my-2">Web Developer </p>

        <div className=" -translate-y-3 mx-3">
          <AnimatedTooltip imgHeight={150} imgWidth={150} items={myProfile} />
        </div>

        <span className="text-8xl font-bold ml-3">{"}"}</span>
      </div>
    </div>
  );
};

export default HeroHeading;
