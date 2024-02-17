import React from "react";
import { navbarOptions } from "../_constants/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative z-50 max-w-[1200px] justify-center w-full max-h-fit py-4 gap-x-4 flex">
      <nav className=" rounded-full flex flex-grow max-w-fit bg-transparent border-2 border-gray-700">
        {navbarOptions.map((option) => {
          return (
            <div
              key={option.id}
              className=" cursor-pointer flex items-center justify-center w-24 h-10 m-2   rounded-full hover:bg-[#242424] hover:text-white transition-all duration-300 ease-in"
            >
              <Link href={option.link} className=" text-white">
                {option.name}
              </Link>
            </div>
          );
        })}
      </nav>
      <button className=" px-6 py-1 bg-[#4C67F9] text-[18px] font-semibold rounded-full">Lets&apos; Talk</button>
    </div>
  );
};

export default Navbar;
