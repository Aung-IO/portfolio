import React from "react";
import Profile from "../assets/me.jpg";
import "./about.css";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-primary_purple">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div >
            <p className="sm:text-wrap mb-2 text-4xl font-bold">
              Hi. I'm Aung Pyae, nice to meet you. Please take a look around.
            </p>
            <p>
              I am passionate about building excellent software that imporves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-business all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
          <div>
            <figure className="mx-36 md:mt-12">
              <img src={Profile} className="profile_img"></img>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
