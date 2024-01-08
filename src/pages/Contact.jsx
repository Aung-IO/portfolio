import React from "react";
import MyButton from "../component/MyButton";
import SocialIcons from "../component/Social";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primary flex justify-center items-center p-4"
    >
      <div className="flex flex-col space-y-10">
        <form
          method="POST"
          action="https://getform.io/f/9ef8c3c6-f716-434b-87a7-8314077ce93f"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-2">
            <p className="text-4xl inline border-b-4 border-primary_purple text-gray-300">
              Keep in Touch
            </p>
            <p className="py-4 text-xl text-gray-300">How can I help you ?</p>
          </div>

          <div className="space-y-4 flex flex-col">
            <input
              className="py-2 px-2 rounded-sm "
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="py-2 px-2 rounded-sm "
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="py-2 px-2 rounded-sm "
              type="message"
              placeholder="How can I help you ..."
              name="message"
            />
            <button class="before:ease relative rounded-md h-12 w-44 mx-auto overflow-hidden border hover:border-primary_purple text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-44">
              <span relative="relative z-10">
                <div className="flex gap-2 px-4 ">
                  <p>Let's Collaborate</p>
                
                  <MyButton iconName={"conversation"} />
                </div>
              </span>
            </button>
          </div>
        </form>

        <SocialIcons />
      </div>
    </div>
  );
}
