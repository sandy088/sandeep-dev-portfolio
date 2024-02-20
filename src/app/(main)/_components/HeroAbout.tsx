"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import {
  CalendarIcon,
  Download,
  Github,
  Lightbulb,
  Linkedin,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FollowerPointerCard } from "@/app/components/ui/following-pointer";
import { DialogCloseButton } from "./contactButton";

const HeroAbout = () => {
  return (
    <div id="about" className="relative z-10 flex flex-col w-full mt-8 px-5">
      <div className=" h-[0.8px] bg-gradient-to-r from-black via-neutral-400 opacity-55 to-black w-full "></div>
      <div className="flex flex-wrap gap-3 w-full justify-between mt-4 mb-6">
        <TextGenerateEffect
          className=" max-w-[500px] mb-4 md:mb-0"
          words="👋 Hey there! I&apos;m Sandeep, a dynamic full-stack developer hailing from India. Specialized in crafting seamless web experiences with expertise in MERN, TypeScript, and Next.js. Let&apos;s turn ideas into reality! 💻✨"
        />

        <div className=" flex flex-wrap items-center gap-3">
          <HoverCard>
            <HoverCardTrigger>
            <FollowerPointerCard title="@sandy088">
              <div onClick={()=>{
                window.open('https://github.com/sandy088','_blank')
              }} className=" bg-black p-2 md:p-3 border-[3px] border-neutral-600 rounded-full hover:scale-105 transition-transform duration-300 ease-in">
                <Github size={20} className="h-4 w-4 md:h-6 md:w-6  " />
              </div>
              </FollowerPointerCard>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 border-2 ">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/90024312?v=4" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <Github size={20} className=" absolute top-3 right-3" />
                  <h4 className="text-sm font-semibold">@sandy088</h4>
                  <p className="text-sm">
                    Hey 👋 Everyone, I am a 👨‍💻 Full-stack web developer with
                    expertise in MERN, Nextjs, Typescript + Still grabbing
                    skills 💻, Open to exciting opportunities🤝
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <FollowerPointerCard title="Sandeep Singh">
                <div onClick={()=>{
                  window.open('https://www.linkedin.com/in/sandeep-singh55/', '_blank')
                }} className=" cursor-none bg-black p-2 md:p-3 border-[3px] border-neutral-600 rounded-full hover:scale-105 transition-transform duration-300 ease-in">
                  <Linkedin className=" h-4 w-4 md:h-6 md:w-6 cursor-none" />
                </div>
              </FollowerPointerCard>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 border-2 ">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/90024312?v=4" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <Linkedin size={20} className=" absolute top-3 right-3" />
                  <h4 className="text-sm font-semibold">Sandeep Singh</h4>
                  <p className="text-sm">
                    @Google Developers Group Chandigarh | Top Computer Science
                    Voice | JavaScript | React | Node.js | MERN | Full Stack
                    Developer
                  </p>
                  <div className=" text-xs bg-[#fce3bc] px-2 py-1 text-[#9b6517] rounded-full max-w-fit">
                    <Lightbulb
                      size={14}
                      className="inline-block text-[#9b6517]"
                    />{" "}
                    Top Computer Science Voice
                  </div>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <button onClick={()=>{
            window.open('https://www.sandeepdev.engineer/CV.pdf', '_blank')
          }} className=" hover:scale-105 transition-transform duration-300 ease-in px-6 py-1 bg-black border-[3px] border-neutral-600 text-[14px] md:text-[18px] h-10 md:h-12 font-semibold rounded-full">
            Resume <Download className="inline-block ml-2 h-4 w-4 md:h-6 md:w-6" />
          </button>
          {/* <button className=" px-6 transition-all duration-300 ease-in py-1 bg-[#4C67F9] hover:bg-[#5f77ff] hover:scale-105 text-[14px] md:text-[18px] h-10 md:h-12 font-semibold rounded-full">
            Let&apos;s Talk
          </button> */}
          <DialogCloseButton textSize="18px"/>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
