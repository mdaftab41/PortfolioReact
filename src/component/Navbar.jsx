import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  
  const [navbar , setNavbar] = useState(false);
  
  const changeBackground = ()=>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else
    {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <header className={navbar ? 'bg-primary active':'bg-primary'}>
      <a href="/" className="text-3xl font-bold logo text-accent ">
        Aftab
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href=""  >About</a>
          </li>
          <li>
            <a href=""  >Projects</a>
          </li>
          <li>
            <a href=""  >Skill</a>
          </li>
          <li>
            <a href=""  >Contact</a>
          </li>
          <li>
            <a href="#resume -link" target="_blank" without rel="noreferrer" className="px-5 py-1 mx-2">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href=""  >Projects</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;