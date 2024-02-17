import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { CalendarIcon, Download, Github, Lightbulb, Linkedin } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroAbout = () => {
  return (
    <div className="relative z-10 flex flex-col w-full mt-8">
      <div className=" h-[0.8px] bg-gradient-to-r from-black via-neutral-400 opacity-55 to-black w-full "></div>
      <div className=" flex w-full justify-between mt-4">
        <TextGenerateEffect
          className=" max-w-[400px]"
          words="Hey 👋, I am Sandeep and I am a full-stack developer specialized in MERN , Typsecript & Nextjs based in India"
        />

        <div className=" flex items-center gap-3">
          <HoverCard>
            <HoverCardTrigger>
              <div className=" bg-black p-3 border-2 border-neutral-600 rounded-full">
              <Github size={20} className=" cursor-pointer" />
                
              </div>
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
              <div className=" bg-black p-3 border-2 border-neutral-600 rounded-full">
              <Linkedin size={20} className=" cursor-pointer" />
                
              </div>
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
                  @Google Developers Group Chandigarh | Top Computer Science Voice | JavaScript | React | Node.js | MERN | Full Stack Developer
                  </p>
                  <div className=" text-xs bg-[#fce3bc] px-2 py-1 text-[#9b6517] rounded-full max-w-fit"><Lightbulb size={14} className="inline-block text-[#9b6517]"/> Top Computer Science Voice</div>
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
          <button className=" px-6 py-1 bg-black border-2 border-neutral-600 text-[18px] h-12 font-semibold rounded-full">
            Resume <Download className="inline-block ml-2" />
          </button>
          <button className=" px-6 py-1 bg-[#4C67F9] text-[18px] h-12 font-semibold rounded-full">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
