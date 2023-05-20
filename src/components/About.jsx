import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div name="about" className="w-full h-screen bg-[#ffffff] text-[#312F2F]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1150px] w-full grid grid-cols-2 gap-8">
          <div data-aos="fade-down" className="sm:text-right pb-8 pl-4">
            <p className="text-5xl text-[#0097B2] font-bold inline ">
              About Me.
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1350px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            data-aos="fade-right"
            className="sm:text-right text-4xl font-bold"
          >
            <p>
              Howdy, nice to meet ya! <br></br> I'm a software engineer based in
              Toronto, Canada.
            </p>
          </div>
          <div data-aos="fade-left">
            <p
              className="text-[#787878] mb-2.5 "
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              {' '}
              🎯 I primarily develop in JavaScript and React.js for{' '}
              <i
                style={{
                  fontFamily: 'Mulish, sans-serif',
                }}
              >
                front-end
              </i>{' '}
              development while also have experience with{' '}
              <i style={{ fontFamily: 'Mulish, sans-serif' }}>back-end</i>{' '}
              Firebase/MySQL database.
              <br></br>{' '}
            </p>
            <p
              className="text-[#787878] mb-2.5 "
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              🧩 I also have a strong expertise in creating dynamic and engaging
              interfaces by writing optimized code and utilizing modern
              development tools.
              <br></br>
            </p>
            <p
              className="text-[#787878]  "
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              🚀 What truly thrills me is working in collaborative environments,
              as I strongly believe they provide the perfect atmosphere for
              personal growth and self-improvement!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
