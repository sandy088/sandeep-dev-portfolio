'use client';
import React from "react";
import { navbarOptions } from "../_constants/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { DialogCloseButton } from "./contactButton";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[99999] max-w-[1200px] md:bg-transparent bg-black justify-center w-full max-h-fit py-4 gap-x-4 flex">
      <motion.nav
       className=" rounded-full w-full backdrop-blur-md flex flex-wrap justify-center flex-grow md:max-w-fit bg-transparent md:border-2 border-gray-700">
        {navbarOptions.map((option) => {
          return (
            <div
              key={option.id}
              className=" cursor-pointer flex items-center justify-center w-24 h-10 m-2   rounded-full hover:bg-[#242424] hover:text-white transition-all duration-300 ease-in"
            >
              <ScrollLink to={option.link} smooth duration={300} className=" text-white">
                {option.name}
              </ScrollLink>
            </div>
          );
        })}
        <div className=" cursor-pointer flex items-center justify-center w-24 h-10 m-2 bg-[#4C67F9]  rounded-full hover:bg-[#5b72f7] hover:text-white transition-all duration-300 ease-in">
          <DialogCloseButton />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
