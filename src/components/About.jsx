import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#ffffff] text-[#312F2F]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl text-[#137efb] font-bold inline ">
              About me.
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, my name is Jayden. A passionate software developer based in
              Toronto, Canada.📍
            </p>
          </div>
          <div>
            <p
              className="text-[#787878] font-bold text-lg"
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              I primarily specialize in JavaScript and React.js for development
              while also have experience with MySQL database. I have a strong
              expertise in creating dynamic and engaging interfaces by writing
              clean code and utilizing modern development tools. What truly
              thrives me is working in collaborative environments, as I strongly
              believe they provide the perfect atmosphere for personal growth
              and self-improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
