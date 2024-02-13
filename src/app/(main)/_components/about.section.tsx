// import { cn } from "@/app/utils/cn";
// import React from "react";
// import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
// import {
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";
// import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
// import { about } from "../_constants/data";
// import Image from "next/image";

// export function AboutGrig() {
//   return (
//     <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//         //   title={item.title}
//         //   description={item.description}
//           header={item.header}
//           className={item.className}
//         //   icon={item.icon}
//         />
//       ))}
//     </BentoGrid>
//   );
// }
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
//     <TextGenerateEffect words={about.words1}/>
//   </div>
// );
// const Item2=()=>(
//     <div className="flex flex-1 w-full max-h-fit rounded-xl      border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
//     <TextGenerateEffect words={about.words2}/>
//   </div>
// )
// const ImageSection=()=>(
//     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
//     <Image src="https://res.cloudinary.com/daqa5apjj/image/upload/v1707837707/1707044349292_3_lrrrsi.jpg" alt="Sandeep Singh" className="object-fit" height={400} width={300}/>
//   </div>
// )
// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     className: "md:col-span-2",
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <ImageSection />,
//     className: "md:col-span-1",
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     className: "md:col-span-1",
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Item2 />,
//     className: "md:col-span-2",
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
// ];

import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import React from "react";
import { about } from "../_constants/data";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div>
      <div className=" max-w-[1200px]  flex mx-auto flex-col gap-3 items-center">
        <h2 className=" md:text-5xl font-bold">About Me</h2>
        <div className=" flex w-full gap-4 justify-between items-center my-10">
          <div className=" flex-grow my-2 text-sm max-w-[50%]">
            <TextGenerateEffect words={about.words1} />
            <TextGenerateEffect words={about.words2} />
            <TextGenerateEffect words={about.words4} />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/daqa5apjj/image/upload/v1707837707/1707044349292_3_lrrrsi.jpg"
              alt="Sandeep Singh"
              className="object-fit rounded-md"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
