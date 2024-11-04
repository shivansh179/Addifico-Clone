import React from 'react';

const Start = () => {
  return (
    <div className="flex justify-evenly bg-[#101010] p-10 text-white min-h-screen">
      {/* Left Grid Section */}
      <div className="grid grid-cols-2 gap-5">
        {/* UpWork Card */}
        <div className="bg-gradient-to-br from-[#2b2b2b] to-[#394e3e] p-5 rounded-lg flex flex-col items-start justify-end text-lg font-semibold shadow-lg h-36 w-64">
          <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white text-sm mb-2">Up</div>
          UpWork
        </div>
        
        {/* Fiverr Card */}
        <div className="bg-gradient-to-br from-[#2b2b2b] to-[#394e3e] p-5 rounded-lg flex flex-col items-start justify-end text-lg font-semibold shadow-lg h-36 w-64">
          <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white text-sm mb-2">fi</div>
          Fiverr
        </div>
        
        {/* LinkedIn Card */}
        <div className="bg-gradient-to-br from-[#2b2b2b] to-[#394e3e] p-5 rounded-lg flex flex-col items-start justify-end text-lg font-semibold shadow-lg h-36 w-64">
          <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white text-sm mb-2">in</div>
          LinkedIn
        </div>
        
        {/* Book a meeting Card */}
        <div className="bg-gradient-to-br from-[#2b2b2b] to-[#394e3e] p-5 rounded-lg flex flex-col items-start justify-end text-lg font-semibold shadow-lg h-36 w-64">
          <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white text-sm mb-2">📅</div>
          Book a meeting
        </div>
      </div>

      {/* Right Form Section */}
      <div className="bg-[#161616] p-10 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-6">Interested but don’t know where to start?</h2>
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input type="text" placeholder="Name*" className="bg-[#101010] p-3 rounded-md w-full focus:outline-none" />
            <input type="email" placeholder="Email*" className="bg-[#101010] p-3 rounded-md w-full focus:outline-none" />
          </div>
          <div className="flex gap-4">
            <input type="text" placeholder="Phone" className="bg-[#101010] p-3 rounded-md w-full focus:outline-none" />
            <input type="text" placeholder="Subject*" className="bg-[#101010] p-3 rounded-md w-full focus:outline-none" />
          </div>
          <textarea placeholder="Your message*" className="bg-[#101010] p-3 rounded-md h-28 focus:outline-none"></textarea>
          <button className="bg-green-500 p-3 rounded-md text-black font-semibold hover:bg-green-600">Send Message</button>
        </form>
        <div className="mt-4 text-sm text-gray-400">
          Or email us at:
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-[#101010] p-2 rounded-full">📧</span>
            hristo@addifico.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
