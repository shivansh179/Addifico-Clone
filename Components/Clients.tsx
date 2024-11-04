import React, { useState } from 'react';

const TestimonialsPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Fiverr');

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10 flex justify-center items-center">
      <div className="w-full max-w-4xl text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-8">Hear it from our clients</h2>

        {/* Platform Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setSelectedPlatform('Fiverr')}
            className={`py-2 px-6 rounded-full font-semibold ${
              selectedPlatform === 'Fiverr' ? 'bg-green-400 text-gray-900' : 'bg-gray-700 text-white'
            }`}
          >
            Fiverr
          </button>
          <button
            onClick={() => setSelectedPlatform('Upwork')}
            className={`py-2 px-6 rounded-full font-semibold ${
              selectedPlatform === 'Upwork' ? 'bg-green-400 text-gray-900' : 'bg-gray-700 text-white'
            }`}
          >
            Upwork
          </button>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-gray-800 rounded-2xl p-8 shadow-lg max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">5 of 324</span>
            <button className="text-sm bg-gray-700 text-gray-300 rounded-full px-3 py-1">Read more</button>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Addifico was phenomenal and worked quickly to help me get the information I needed. In addition to purchasing
            one of the programs/plans they had, they helped me figure out what I needed best. They were able to also help
            me break down the data and provided some additional feedback on my pitch deck. I look forward to working with
            them further as I expand on my project. Highly recommend.
          </p>
          <div className="flex items-center mt-6">
            <img
              src="/path/to/profile.jpg" // Replace with actual path
              alt="Client profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold text-lg">Deshawn Robinson</h3>
              <p className="text-gray-400 text-sm">CEO at Doors Open Connect</p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-8 mt-10">
          <button className="bg-gray-700 text-gray-400 p-3 rounded-full">
            {/* Left Arrow Icon */}
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z" />
            </svg>
          </button>
          <button className="bg-gray-700 text-gray-400 p-3 rounded-full">
            {/* Right Arrow Icon */}
            <span className="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="M9 6l6 6-6 6L10.41 18.58 15 12 10.41 5.42z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
