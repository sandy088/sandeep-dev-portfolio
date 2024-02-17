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
  href: string

}

export const navbarOptions:navbarOptionsProps[] = [
  {
    id:1,
    name: "Home",
    href: "#"
  },
  {
    id:2,
    name: "Projects",
    href: "#"
  },
  {
    id:3,
    name: "Contact",
    href: "#"
  
  }
]

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
    title: "StudyNotion- Full Stack Ed-tech Platform",
    description: "Edtech Platform for everyone, Sell & Consume Courses",
    href: "https://studynotion-sepia.vercel.app/",
    imgUrl: "https://res.cloudinary.com/daqa5apjj/image/upload/v1707841340/248786666-86f7fd32-2a33-4f2e-93d6-4034fe5e741d_s8z73o.jpg",
    skills:['Reactjs','Expressjs','Nodejs','MongoDB','tailwindcss']
  },
];
