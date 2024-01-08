import React from "react";
import RealEstate from "../assets/projects/realestate.jpg";
import WorkImg from "../assets/projects/workImg.jpeg";
import ProjectCard from "../component/ProjectCard";

export default function Work() {
  const Projects = [WorkImg, RealEstate];
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-primary">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-primary_purple">
            Work
          </p>
          <p className="p-6 text-xl">Here's my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Projects.map((proj, index) => (
            <div key={index}>
              <ProjectCard
                backgroundImage={proj}
                cardName="React Js Application"
                demoLink="http://demo-link.com"
                codeLink="http://code-link.com"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
