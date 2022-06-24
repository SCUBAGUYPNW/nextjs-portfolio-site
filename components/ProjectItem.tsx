import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({
  title,
  backgroundImg,
  technologies,
  projectUrl,
}: any) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-yellow-100 rounded-xl p-4 group hover:bg-gradient-to-r from-gray-700 to-gray-300">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="Project1"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text lg text-white text-bold tracking-wider text-center lg:pb-20 lg:text-6xl">
          {title}
        </h3>
        <p className="text-black text-bold pt-2 text-center lg:text-4xl lg:pb-40">
          {technologies}
        </p>
        <Link href={projectUrl}>
          <p className="text-black-500 tracking-widest text-center py-3 rounded-lg bg-zinc-300 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
