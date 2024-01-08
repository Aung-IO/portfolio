import React, { useState } from "react";
import { Link } from "react-scroll";


export default function Navbar() {
  let [nav, setNav] = useState(false);

  let handleNav = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="text-gray-300 text-xl">Aung</div>
      {/* Menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Menu
          </Link>
        </li>
        <li><Link to="about" smooth={true} duration={500}>
            About
          </Link></li>
        <li><Link to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
        <li><Link to="work" smooth={true} duration={500}>
            Projects
          </Link></li>
        <li><Link to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>

      {/* Humburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? (
          <box-icon name="menu" color="#ffffff"></box-icon>
        ) : (
          <box-icon name="x" color="#ffffff"></box-icon>
        )}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-fixed top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl"><Link onClick={handleNav} to="home" smooth={true} duration={500}>
            Menu
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleNav} to="about" smooth={true} duration={500}>
            About
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleNav} to="work" smooth={true} duration={500}>
            Projects
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>

      {/* social icons */}

      {/* <div className="flex flex-col top-[35%] left-0">
        <box-icon type="logo" name="instagram"></box-icon>
        <box-icon type="logo" name="linkedin-square"></box-icon>
        <box-icon type="logo" name="github"></box-icon>
      </div> */}
    </div>
  );
}
