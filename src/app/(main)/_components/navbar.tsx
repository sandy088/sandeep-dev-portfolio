import React from "react";
import { navbarOptions } from "../_constants/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative z-50 max-w-[1200px] w-full max-h-fit py-4 flex">
      <nav className=" rounded-full flex flex-grow bg-[#242424]">
        {navbarOptions.map((option) => {
          return (
            <div
              key={option.id}
              className=" cursor-pointer flex items-center justify-center w-24 h-10 m-2   rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in"
            >
              <Link href={option.href} className=" text-white">
                {option.name}
              </Link>
            </div>
          );
        })}
      </nav>
      
    </div>
  );
};

export default Navbar;
