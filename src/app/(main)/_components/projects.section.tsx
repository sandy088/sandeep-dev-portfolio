import { PinContainer } from "@/app/components/ui/3d-pin";
import Image from "next/image";
import React from "react";
import { projects } from "../_constants/data";

const ProjectsSection = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto p-4 relative max-h-fit mt-20">
      <div className=" md:h-[50px] h-[40px]"></div>
      <h2 className=" text-center text-3xl font-bold mt-5">My Projects</h2>

      <div className="max-h-fit w-full  flex flex-wrap gap-y-24 items-center justify-center py-7 mt-4">
        {projects.map((project, index) => (
          <PinContainer key={index} title={project.title} href={project.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                {project.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">{project.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <Image
                  src={project.imgUrl}
                  width={300}
                  height={300}
                  alt="Project Image"
                  className=" max-h-[300px]"
                />
              </div>
              <div className="flex flex-1 flex-wrap gap-2 w-full mt-4">
                {project.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center  rounded-full bg-white px-2 py-1"
                  >
                    <span className="text-xs font-bold text-black">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
