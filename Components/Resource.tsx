import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="bg-white text-gray-900 p-10 min-h-screen">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">Our latest resources</h1>
      </header>

      {/* Resource Cards */}
      <div className="flex justify-center gap-8 mb-16">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
          <img src="/path/to/image1.jpg" alt="Resource 1" className="w-full h-40 object-cover" />
          <div className="p-6">
            <p className="text-sm text-gray-500">Blog • October 23, 2023</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              Startup Market Sizing: Founder's Guide to TAM
            </h3>
            <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1 mt-3">
              Market Sizing and Forecasting
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
          <img src="/path/to/image2.jpg" alt="Resource 2" className="w-full h-40 object-cover" />
          <div className="p-6">
            <p className="text-sm text-gray-500">Blog • October 2, 2023</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              7 Simple Steps to Ace Your Startup Market Research
            </h3>
            <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1 mt-3">
              Business Plan & Pitch Deck
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
          <img src="/path/to/image3.jpg" alt="Resource 3" className="w-full h-40 object-cover" />
          <div className="p-6">
            <p className="text-sm text-gray-500">Blog • September 27, 2023</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              Research and Planning for a New Business in 4 Steps
            </h3>
            <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1 mt-3">
              Business Plan & Pitch Deck
            </span>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-green-100 text-gray-800 p-10 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Don't want to miss anything?</h2>
        <p className="text-gray-600 mb-4">
          Sign up for our newsletter to discover winning trends before your competition!
        </p>
        <button className="bg-green-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-green-600">
          Sign up for newsletter
        </button>
      </div>
    </div>
  );
};

export default ResourcesPage;
