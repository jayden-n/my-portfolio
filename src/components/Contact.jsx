import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#f9f9f9] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/7fe3e8cb-d489-4ca4-827c-1379dcfa769f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-5xl font-bold inline text-[#312F2F]">Contact</p>
          <p className="text-[#312F2F] py-4">
            // Submit the form below or just simply shoot me an email -
            jaydennguyen.dev@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#f9f9f9] border-1 font-bold bg-[#137efb] hover:border-[#137efb] rounded px-5 py-3 my-10 mx-auto flex items-center">
          Let's Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
