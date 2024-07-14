import React from "react";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
          className="enter-key-logo"
        >
          <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
        </svg>
      </a>
      <ul>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Projects">Projects</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
