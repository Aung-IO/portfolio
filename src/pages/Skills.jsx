import React from "react";
import AWS from "../assets/aws.png";
import CSS from "../assets/css.png";
import Firebase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JS from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import Reactjs from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

export default function Skills() {
  const Skills = [
    { tag: HTML, name: "HTML" },
    { tag: CSS, name: "CSS" },
    { tag: Firebase, name: "Firebase" },
    { tag: GitHub, name: "GitHub" },
    { tag: JS, name: "JavaScript" },
    { tag: Mongo, name: "Mongo DB" },
    { tag: Node, name: "Node js" },
    { tag: Reactjs, name: "React js" },
    { tag: Tailwind, name: "Tailwind" },
    { tag: AWS, name: "AWS" },
  ];

  return (
    <div name="skills" className=" bg-primary text-gray-300 ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-primary_purple">
           Skills
          </p>
          <p className="py-4 text-xl">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          {Skills.map((skill, index) => (
            <div key={index}>
              <div className="shadow-md shadow-shadow_dark hover:scale-110 duration-500 py-3 rounded-lg">
                <img src={skill.tag} className="w-20 mx-auto" />
                <p className="mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
