import React, { useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import AOS from 'aos';
import 'aos/dist/aos.css';
//import Typewriter from "typewriter-effect";
import { useTypewriter } from 'react-simple-typewriter';
const Home = () => {
  const [text] = useTypewriter({
    words: ['Software Engineer.', 'JavaScript Developer.'],
    loop: {},
    deleteSpeed: 45,
    typeSpeed: 85,
    delaySpeed: 3000,
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div name="home" className="w-full h-screen bg-[#f9f9f9]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-7 flex flex-col justify-center h-full">
        <p
          data-aos="fade-right"
          className="text-[#312F2F] mb-2 font-bold text-2xl"
        >
          Hello, World!
        </p>
        <h1
          data-aos="fade-right"
          className="text-4xl sm:text-7xl font-bold text-[#312F2F]"
        >
          I'm Jayden Nguyen 👋🏼
        </h1>
        <div data-aos="fade-right" className="pt-4">
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
          data-aos="fade-left"
          className="text-[#787878] py-4 font-bold pt-6 max-w-[700px]"
          style={{ fontFamily: 'Mulish, sans-serif' }}
        >
          I’m a dedicated software engineer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focusing on building responsive full-stack web applications.
        </p>
        <div
          data-aos="fade-left"
          className="w-30 flex justify-start items-center w-full gap-3 "
        >
          <a
            href="https://drive.google.com/file/d/1LNqiBT14_UQsLcSGqV-3N1Y5R-vPT8-E/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="text-[#f9f9f9]  cursor-pointer px-6 py-3 my-2 flex items-center rounded bg-[#0097B2] "
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
            >
              My Resume
            </button>
          </a>
          <a
            className="ml-3"
            href="https://github.com/jayden-n"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer text-[#312F2F]" size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/jayden-nguyen-4b3a33219/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer text-[#312F2F]" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
