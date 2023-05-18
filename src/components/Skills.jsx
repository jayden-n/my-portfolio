import React, { useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Sass from '../assets/sass.png';
import FireBase from '../assets/firebase.png';

import Git from '../assets/git.png';
import Tailwind from '../assets/tailwind.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div name="skills" className="w-full h-screen bg-[#f9f9f9] text-[#312F2F]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div data-aos="fade-down-left">
          <p className="text-5xl font-bold inline text-[#0097B2]  ">
            Tech Stack.
          </p>
          <p className="py-4">
            // Here are technologies I've been working with recently:
          </p>
        </div>

        <div
          data-aos="fade-up-right"
          className="w-full bg-[#f9f9f9] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-10"
        >
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20  mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sass} alt="HTML icon" />
            <p className="my-4">SASS</p>
          </div>

          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="HTML icon" />
            <p className="my-4">GIT</p>
          </div>
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
