import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { Download, Github, Linkedin } from 'lucide-react'
import React from 'react'

const HeroAbout = () => {
  return (
    <div className=' flex flex-col w-full'>
        <div className=' h-[1px] bg-gradient-to-r from-black via-white opacity-65 to-black w-full '></div>
        <div className=' flex w-full justify-between mt-4'>
          
            <TextGenerateEffect className=' max-w-[400px]' words='Hey 👋, I am Sandeep and I am a full-stack developer specialized in MERN , Typsecript & Nextjs based in India'/>
         
          
          <div className=' flex items-center gap-3'>
          <div className=' bg-black p-3 border rounded-full'>
              <Linkedin size={20} className=' '/>
            </div>
            <div className=' bg-black p-3 border rounded-full'>
              <Github size={20} className=' '/>
            </div>
            <button className=' px-6 py-1 bg-black border text-[18px] h-12 font-semibold rounded-full'>Resume <Download className='inline-block ml-2'/></button>
            <button className=' px-6 py-1 bg-[#4C67F9] text-[18px] h-12 font-semibold rounded-full'>Let&apos;s Talk</button>
          </div>
        </div>
    </div>
  )
}

export default HeroAbout