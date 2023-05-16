import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

//import Typewriter from "typewriter-effect";
import { useTypewriter } from 'react-simple-typewriter';
const Home = () => {
  const [text] = useTypewriter({
    words: ['JavaScript Developer.', 'Front-End Engineer.'],
    loop: {},
  });

  return (
    <div name="home" className="w-full h-screen bg-[#f9f9f9]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-7 flex flex-col justify-center h-full">
        <p className="text-[#312F2F] mb-2 text-2xl">Hello, World!</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#312F2F]">
          I'm Jayden Nguyen 👋🏼
        </h1>
        <div className="pt-4">
          <h2 className="text-4xl sm:text-6xl font-bold text-[#787878]">
            A
            <span className="ml-3 text-4xl sm:text-6xl font-bold text-[#787878]">
              {text}
              {/* <Typewriter
            options={
              {
                autoStart:true,
                strings:["Full Stack Developer","Front-End Engineer","Cloud Enthusiast","Blockchain Enthusiast","Software Developer"],
                delay:100,
                loop:true,
                deleteSpeed:100
              }
            }
          /> */}
            </span>
          </h2>
        </div>
        <p className="text-[#8892b0] py-4 pt-6 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-[#f9f9f9] group border-1 font-bold cursor-pointer px-6 py-3 my-2 flex items-center rounded bg-[#137efb] hover:border-[#137efb]">
              View my projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
