import React from "react";
import { FaReact } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { VscGithubAction } from "react-icons/vsc";

interface projectsProps{
  title: string
  description: string,
  href: string,
  imgUrl: string,
  skills: string[]
}   

interface navbarOptionsProps{
  id: number,
  name: string,
  link: string

}

export const navbarOptions:navbarOptionsProps[] = [
  {
    id:1,
    name: "Home",
    link: "#"
  },
  {
    id:2,
    name: "About",
    link: "#"
  },
  {
    id:3,
    name: "Skills",
    link: "#"
  },
  {
    id:4,
    name: "Projects",
    link: "#"
  },
  {
    id:5,
    name: "Contact",
    link: "#"
  
  }
]
export const aboutContent = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];
export const about = {
  words1: `
    I'm a tech enthusiast and B.Tech student based in India.`,
    words2: `Since 2020, I've been delving into intricate tech challenges, transforming them into elegant and efficient solutions. When not coding, you'll catch me immersed in tech literature or sparring with coding challenges.`,
    words3: `I'm a tech enthusiast and B.Tech student based in India.`,
    words4: `Looking beyond the screen, I find solace in reading📚, exploring new tech trends🚀, and spending quality time with my loyal coding companion.`
};

export const projects:projectsProps[] = [
  {
    title: "Otion- Full Stack Notion Clone",
    description: "Realtime Sync, Rich Text Editior, Dark Mode, User Authentication, and more.",
    href: "https://otion-documentation-app.vercel.app/",
    imgUrl: "https://private-user-images.githubusercontent.com/90024312/302348507-43fc4c76-e234-4554-9b39-318949efd506.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc4NDA4OTQsIm5iZiI6MTcwNzg0MDU5NCwicGF0aCI6Ii85MDAyNDMxMi8zMDIzNDg1MDctNDNmYzRjNzYtZTIzNC00NTU0LTliMzktMzE4OTQ5ZWZkNTA2LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjEzVDE2MDk1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk3YzA0YTg2YjY3M2Y2M2IzOGMxYWY4ZmUzNGM5YjdjNGI4Zjk1YTk0YTJjYTBlZGRjZTUxYWQwODk1ZThjMWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9VjGaAKpMI0S3Ylxf8PFuKg9mkUqchrJ1J0F-Ihaw4M",
    skills:['nextjs14','convex','tailwindcss','typsecript','react']
  },
  {
    title: "StudyNotion- An Ed-tech Platform",
    description: "A Full-Stack Edtech Platform for everyone, Sell & Consume Courses",
    href: "https://studynotion-sepia.vercel.app/",
    imgUrl: "https://res.cloudinary.com/daqa5apjj/image/upload/v1707841340/248786666-86f7fd32-2a33-4f2e-93d6-4034fe5e741d_s8z73o.jpg",
    skills:['Reactjs','Expressjs','Nodejs','MongoDB','tailwindcss']
  },
  {
    title: "Sendyy -Bulk E-mail Sender",
    description:
      "A Robust & free bulk emial sender for everyone",
    skills: ["React", "Express.js", "MongoDB", "Tailwind", "Nodejs"],
    imgUrl: 'https://res.cloudinary.com/daqa5apjj/image/upload/v1708356731/Screenshot_2023-11-22_163611_lkp8uw.jpg',
    href: "https://sendyy-bulk-email-sender.vercel.app/"
  },
  
  {
    title: "Youtube Clone",
    description:
      "Youtube UI Clone with Search, Live videos, trending,etc.",
    skills: ["React", "Youtube API","Tailwind", "Context API"],
    imgUrl: 'https://res.cloudinary.com/daqa5apjj/image/upload/v1708356733/Screenshot_2023-11-22_170909_m1rqyy.jpg',
    href: "https://youtube-clone-react-indol.vercel.app/"
  },
  {
    title: "Discord Generative Ai- bot",
    description:
      "A Generative-Ai Discord bot Which can generate Images",
    skills: ["Nodejs", "AI Image Generator Model", "Discord.js"," Typsecript"],
    imgUrl: 'https://res.cloudinary.com/daqa5apjj/image/upload/v1708356731/Code_Ai_fep9hs.png',
    href: "https://github.com/sandy088/Discord-Ai-Art-Generator-bot"
  },
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Nextjs",
  "Java",
  "C++",
  "React",
  "Node.js",
  "Express.js",
  "Git & Github",
  "Tailwind",
  "Convex",
  "Firebase",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Docker",
  "Figma",
  "Canva",
  "Go(Learning)"
  
] as const;

export const experiencesData = [
  {
    title: "Open Source Contributor",
    location: "@Hactoberfest 2023",
    description:
      `Participated in Hacktoberfest 2023, earned swags & goodies for submitting four successful pull requests to diverse open source projects. Developed valuable skills in open source development, including contributing to codebases, writing documentation, and collaborating with other developers. Among the first 40,000 contributors awarded with swags and goodies.`,
    icon: React.createElement(VscGithubAction),
    date: "2023",
  },
  {
    title: "Open Source Contributor ",
    location: "GSSOC 2023",
    description:
      "Participated in GSSOC 2023, and Gained lots of learning about open source projects and collborate with developers worldwide",
    icon: React.createElement(FaProjectDiagram),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelancer",
    description:
      "I'm a full-stack developer working as a freelancer. My stack includes React, Redux, TypeScript, Tailwind, Nodejs, Express.js, GraphQL, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;