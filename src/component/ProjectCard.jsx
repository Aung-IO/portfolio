import React from "react";
import "../../src/index.css";

export default function ProjectCard({
  backgroundImage,
  cardName,
  demoLink,
  codeLink,
}) {
  return (
    <div
      style={{ backgroundImage: ` url(${backgroundImage})` }}
      className="shadow-lg shadow-shadow_dark group container rounded-lg flex justify-center items-center mx-auto content-div "
    >
      {/* hover effects */}
      <div className="opacity-0 group-hover:opacity-80 ">
        <span className="text-2xl font-bold text-white tracking-wider">
          {cardName}
        </span>

        <div className="pt-8 text-center">
          <a href={demoLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={codeLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
