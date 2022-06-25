import Image from "next/image";
import Link from "next/link";
import React from "react";
import projectOne from "../public/assets/projects/Project1.png";
import rpgTurnTracker from "../public/assets/projects/RPGTurnTracker.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-width-[1240] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#515be5]">
          Projects
        </p>
        <h2 className="py-4 text-black-500">What I have built</h2>
        <div className="grid md: grid-cols-2 gap-8">
          <ProjectItem
            title="Project 1"
            backgroundImg={projectOne}
            technologies="JavaScript MERN CRUD"
            projectUrl="/project1"
          />
          <ProjectItem
            title="RPG Turn Tracker"
            backgroundImg={rpgTurnTracker}
            technologies="C++ Arduino Platform I/O"
            projectUrl="/project2"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
