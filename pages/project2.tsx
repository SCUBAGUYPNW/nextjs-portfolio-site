import Image from "next/image";
import rpgTurnTracker from "../public/assets/projects/RPGTurnTracker.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import React from "react";

const project2 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={rpgTurnTracker}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">RPG Turn Tracker</h2>
          <h3>React JS / Tailwind / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 text-black ">
          <p>RPG Turn Tracker</p>
          <h2>Overview</h2>
          <p>
            This is a turn tracker for use while playing Table Top RPG. During
            encounters it is necessary to track who's turn it is so I created
            this prototype to have an LED light up to indicate who's turrn it
            is. In the future I will impliment a timer so after a set number of
            time the color of the LED will change.
          </p>
          <a
            href="https://github.com/SCUBAGUYPNW/Physical-Turn-tracker"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://youtu.be/yTIztTn4niA"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-700  rounded-xl py-4">
          <div className="p-2">
            <p className="text-gray-100 underline text-center font-bold pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> C++
              </p>
              <p className="text-gray-200  py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Arduino
              </p>
              <p className="text-gray-200  py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Platform I/O
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-green-500 ">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default project2;
