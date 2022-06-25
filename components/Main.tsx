import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w- full h-screen text-center">
      <div className="max-w-{1240px} w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-blue-400">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700 ">
            Hello, I am <span className="text-[#515be5]"> Mitch</span>.
          </h1>
          <h1 className="py-2 text-gray-700 ">A fullstack web developer.</h1>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto">
            I am a fullstack web developer currently looking for new
            opportunities to showcase what I can do.
          </p>
          <div className="flex items-center justify-between m-w-[330px] m-auto py-4">
            <div className="ml-3 mr-2 rounded-full bg-zinc-500 shadow-md shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://www.linkedin.com/in/mitchel-hall-software-dev/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="ml-2 rounded-full bg-zinc-500 shadow-md shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/SCUBAGUYPNW">
                <FaGithub />
              </a>
            </div>
            <div className="ml-4 rounded-full bg-zinc-500 shadow-md shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail
                onClick={() =>
                  window.open("mailto:mitch.hall@artificerdevsolutions.com")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
