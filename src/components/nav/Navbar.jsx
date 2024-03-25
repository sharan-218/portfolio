import React from "react";
import "./navbar.css";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <ul className={active ? "mobile-nav" : "top-nav"}>
        <li className="link">
          <a href="#home">Home</a>
        </li>
        <li className="link">
          <a href="#about">About</a>
        </li>
        <li className="link">
          <a href="#skills">Skills</a>
        </li>
        <li className="link">
          <a href="#contact">Contact</a>
        </li>
        {/* <button
          id="cv"
          onClick={() => {
            open("../../../public/vite.svg");
          }}
        >
          cv
        </button> */}
        <span className="menu" onClick={() => setActive(!active)}>
          {active ? <IoIosArrowUp /> : <CiMenuBurger />}
        </span>
      </ul>
    </>
  );
};

export default Navbar;
