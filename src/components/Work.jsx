import React from 'react';

import Bankist from '../assets/projects/bankist.jpg';
import Mapty from '../assets/projects/mapty.jpg';
import Monsters from '../assets/projects/monsters-rolodex.jpg';
import Dinosaur from '../assets/projects/dinosaur.jpg';
import PigGame from '../assets/projects/pig-game.jpg';
import Wardrobe from '../assets/projects/wardrobe.jpg';
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#312F2F] bg-[#ffffff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline text-[#137efb]">
            My projects.
          </p>
          <p className="py-6">// Check out some of my recent work! </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item 1 */}
          <div
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
          {/* Grid Item 2 */}
          <div
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
          {/* Grid Item 3 */}
          <div
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
          {/* Grid Item 4 */}
          <div
            style={{ backgroundImage: `url(${Monsters})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex justify-between">
                Monsters Rolodex <br></br> (React app based on React-DOM)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://monsters-rolodex-reactjs-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jayden-n/monsters-rolodex-reactjs"
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
          {/* Grid Item 6 */}
          <div
            style={{ backgroundImage: `url(${PigGame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex justify-between">
                Dice Game <br></br> (Pure JavaScript app using DOM)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pig-game-9033c.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jayden-n/Pig-Game"
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
