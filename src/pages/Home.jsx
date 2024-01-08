import React from "react";
import "./home.css";
import MyButton from "../component/MyButton"

export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-primary flex px-4">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <p className="text-primary_purple">Hi, I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-300 ">
          Aung Pyae Kyaw 🖐️
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-slate-500 mt-2">
          Full Stack Developer
        </h2>
        <p className="text-slate-300 py-4 max-w-[700px]">
          I'm creative developer based in Yangon, and I'm <br />
          very passionate and dedicated to my work.
        </p>

        <div>
          <button className="text-white border-2 px-6 py-2 my-2 flex items-center gap-2 rounded-lg">
            Say Hello
            
            <MyButton iconName={"invader"} />
          </button>
        </div>
      </div>
    </div>
  );
}
