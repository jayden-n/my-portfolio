import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  return (
    <div
      data-aos="fade-right"
      name="contact"
      className="w-full h-screen bg-[#f9f9f9] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/7fe3e8cb-d489-4ca4-827c-1379dcfa769f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-5xl font-bold inline text-[#0097B2]">Contact</p>
          <p
            className="text-[#787878] py-4 font-bold"
            style={{ fontFamily: 'Mulish, sans-serif' }}
          >
            // Submit the form below or just simply shoot me an email -
            <i style={{ fontFamily: 'Mulish, sans-serif' }}>
              {' '}
              jaydennguyen.dev@gmail.com
            </i>
          </p>
        </div>
        <input
          className="bg-[#e6edfc] p-2"
          type="text"
          placeholder="Name"
          style={{ color: '#787878' }}
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#e6edfc]"
          type="email"
          placeholder="Email"
          style={{ color: '#787878' }}
          name="email"
        />
        <textarea
          className="bg-[#e6edfc] p-2"
          name="message"
          style={{ color: '#787878' }}
          rows="10"
          placeholder="Message"
        ></textarea>
        <div data-aos="fade-left" data-aos-duration="1000">
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
            className="text-[#f9f9f9] boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' transition: 'box-shadow 0.3s ease' border-1  bg-[#0097B2] hover:border-[#0097B2] rounded px-5 py-3 mt-10 mb-6 mx-auto flex items-center"
          >
            Let's Collaborate! 🚀
          </button>

          <div className="flex justify-center items-center h-8 gap-3">
            <a
              href="https://github.com/jayden-n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer  text-[#312F2F]" size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/jayden-nguyen-4b3a33219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="cursor-pointer  text-[#312F2F]"
                size={30}
              />
            </a>
            <a
              href="mailto: jaydennguyen.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail
                className="cursor-pointer  text-[#312F2F]"
                size={38}
              />
            </a>
          </div>
        </div>
      </form>

      {/* Contact icons */}
    </div>
  );
};

export default Contact;
