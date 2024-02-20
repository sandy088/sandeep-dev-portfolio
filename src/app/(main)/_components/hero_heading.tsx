"use client";
import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your requirement
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isMobile) {
    return (
      <div className="relative z-10 mx-auto">
        <p className=" text-3xl font-bold">
          <div className=" flex items-center gap-2 mt-5 mb-3">
            <p className="text-3xl font-bold text-center ">Full Stack </p>
            <Image src={skillsIco} alt="skills" width={70} height={70} />
          </div>
          {"Web Developer with"}
        </p>

        <div className="flex items-center gap-2">
          <p className="text-3xl font-bold text-start ">
            Ingenous Skills{" "}
            <div className=" inline-block translate-y-2  mx-3">
              <AnimatedTooltip imgHeight={70} imgWidth={70} items={myProfile} />
            </div>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative z-10 mx-auto">
      <p className=" text-2xl md:text-6xl font-bold">
        <span className="text-3xl md:text-7xl mr-2">{"{"}</span>
        {"Full Stack "}
      </p>
      <div className=" flex items-center gap-2 mt-3 ml-3">
        <Image src={skillsIco} alt="skills" width={150} height={150} />
        <p className="text-2xl md:text-6xl font-bold text-end my-2 ml-3">
          Web Developer{" "}
        </p>
      </div>
      <div className="flex items-center gap-2 ml-2">
        <p className="text-2xl md:text-6xl font-bold text-end my-2">
          with Ingenous Skills{" "}
        </p>

        <div className=" -translate-y-3 mx-3">
          <AnimatedTooltip imgHeight={150} imgWidth={150} items={myProfile} />
        </div>

        <span className="text-3xl md:text-8xl font-bold ml-3">{"}"}</span>
      </div>
    </div>
  );
};

export default HeroHeading;
