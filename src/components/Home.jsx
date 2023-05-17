import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

//import Typewriter from "typewriter-effect";
import { useTypewriter } from 'react-simple-typewriter';
const Home = () => {
  const [text] = useTypewriter({
    words: ['Software Engineer.', 'JavaScript Developer.'],
    loop: {},
    deleteSpeed: 45,
    typeSpeed: 85,
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
            <span className="ml-3 text-4xl sm:text-6xl font-bold text-[#787878] sha">
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
        <p
          className="text-[#787878] py-4 pt-6 max-w-[700px]"
          // style={{ fontFamily: 'Mulish, sans-serif' }}
        >
          I’m a dedicated software engineer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focusing on building responsive full-stack web applications.
        </p>
        <div className="w-50">
          <Link to="work" smooth={true} duration={500}>
            <button
              style={{
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
              }}
              className="text-[#f9f9f9] group border-1 font-bold cursor-pointer px-6 py-3 my-2 flex items-center rounded bg-[#137efb] hover:border-[#137efb]"
            >
              See my projects
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
