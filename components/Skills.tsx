import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#515be5]">
          Technologies I can use to help your organization LVL up.
        </p>
        <p className="py-4 text-[#bfc0cb]">What I Can Do</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-md shadow-yellow-100 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-zinc-300">
                <Image
                  src="/../public/assets/skills/nodejs2.png"
                  alt="ADS"
                  width="70px"
                  height="70px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md shadow-yellow-100 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-zinc-300">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt="ADS"
                  width="70px"
                  height="70px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md shadow-yellow-100 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-zinc-300">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt="ADS"
                  width="70px"
                  height="70px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md shadow-yellow-100 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-zinc-300">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt="ADS"
                  width="70px"
                  height="70px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md shadow-yellow-100 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-zinc-300">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  alt="ADS"
                  width="70px"
                  height="70px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md shadow-yellow-100 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-zinc-300">
                <Image
                  src="/../public/assets/skills/mongodb.png"
                  alt="ADS"
                  width="70px"
                  height="70px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl shadow-yellow-100 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-zinc-300">
                <Image
                  src="/../public/assets/skills/github1.png"
                  alt="ADS"
                  width="70px"
                  height="70px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md shadow-yellow-100 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-zinc-300">
                <Image
                  src="/../public/assets/skills/nxtjs.png"
                  alt="ADS"
                  width="70px"
                  height="70px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
