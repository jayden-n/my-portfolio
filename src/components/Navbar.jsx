import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="absolute shadow-md w-full h-[80px] flex justify-between items-center lg:px-20 px-11 bg-[#ffffff] text-[#36373b]">
      <div>
        <Link to="about" smooth={true} duration={650}>
          <p
            className="text-2xl font-bold text-[#0097B2] cursor-pointer"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Jayden.dev
          </p>
        </Link>
        {/* <img
        className="cursor-pointer"
        src={Logo}
        alt="Logo"
        style={{ width: '50px' }}
      /> */}
      </div>
      <div>
        <Link to="contact" smooth={true} duration={650}>
          <button className=" border-2 text-[#0097B2] border-[#0097B2] px-5 py-3 flex items-center rounded hover:bg-[#0097B2] hover:text-[#ffffff]  transition-all">
            Let's Connect!
          </button>
        </Link>
      </div>
      {/* Menu 
      <ul className="hidden md:flex text-xl">
        <li className="hover:text-[#0097B2]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#0097B2]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#0097B2]">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-[#0097B2]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>*/}
      {/* Hamburger 
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="cursor-pointer" />
        ) : (
          <FaTimes className="cursor-pointer" />
        )}
      </div>

      {/* Mobile menu 
      <ul
        className={
          nav
            ? 'absolute top-0 left-0 duration-200 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center '
            : 'absolute top-0 left-[-100%] duration-200 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center '
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      */}
      {/* Social icons
     <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1LNqiBT14_UQsLcSGqV-3N1Y5R-vPT8-E/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#574ae2]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jayden-nguyen-4b3a33219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#313638]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jayden-n"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: jaydennguyen.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    */}
    </div>
  );
};

export default Navbar;
