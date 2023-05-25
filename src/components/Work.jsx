import React, { useEffect } from 'react';

import Bankist from '../assets/projects/bankist.jpg';
import Mapty from '../assets/projects/mapty.jpg';
import Dinosaur from '../assets/projects/dinosaur.jpg';
import Wardrobe from '../assets/projects/wardrobe.jpg';
import Cinephoria from '../assets/projects/cinephoria.jpg';
import Crypto from '../assets/projects/coin-tracker.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="work"
      className="w-full pb-20 md:h-screen text-[#787878] bg-[#ffffff]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div data-aos="fade-right" className="pb-8">
          <p className="text-5xl font-bold inline text-[#0097B2]">
            My projects.
          </p>
          <p
            className="py-6 font-bold"
            style={{ fontFamily: 'Mulish, sans-serif' }}
          >
            // Check out some of my recent work!{' '}
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Grid Item 1 */}
          <div
            data-aos="fade-right"
            style={{ backgroundImage: `url(${Crypto})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex justify-between">
                Coin Tracker <br></br> (React web app using Material UI, ChartJS
                and Firebase)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://coin-tracker-web-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jayden-n/coin-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 2 */}
          <div
            data-aos="fade-down"
            style={{ backgroundImage: `url(${Wardrobe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex justify-between">
                Wardrobe Wizards <br></br> (E-Commerce React Web app using
                Firebase)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://wardrobe-wizards.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jayden-n/wardrobe-wizards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 3 */}
          <div
            data-aos="fade-left"
            style={{ backgroundImage: `url(${Cinephoria})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md text-center flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-between">
                Cinephoria <br></br> (React web app using Tailwind CSS and
                Firebase)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://cinephoria-web-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jayden-n/cinephoria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 4 */}
          <div
            data-aos="fade-up-right"
            style={{ backgroundImage: `url(${Mapty})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md text-center flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-between">
                Mapty <br></br> (Pure JavaScript app that helps to track
                work-out plan)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://mapty-workout-tracking-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jayden-n/mapty-workout-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 5 */}
          <div
            data-aos="fade-up"
            style={{ backgroundImage: `url(${Bankist})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex justify-between">
                Bankist <br></br> (Pure JavaScript banking app helps to make
                transactions)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://bankist-development.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jayden-n/Bankist-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 6 */}
          <div
            data-aos="fade-up-left"
            style={{ backgroundImage: `url(${Dinosaur})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex justify-between">
                Dinosaur game clone (Pure JavaScript app using DOM)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://dinosaur-game-9d840.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jayden-n/dinosaur-game-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
