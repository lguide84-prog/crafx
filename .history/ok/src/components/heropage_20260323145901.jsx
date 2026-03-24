import React from "react";

const HeroPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center  bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/main.webp')",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 ">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-light text-white mb-4 leading-tight park ">
            <span className="font-semibold">Recruitment</span>  process <br />
              <span className="">with smart solutions.</span>
            </h1>

            {/* Subheading */}
            <p className="text-md text-gray-200 mb-8  park">
             Linkrow is your trusted partner in recruitment, offering personalized HR solutions that connect top talent with the right opportunities.
            </p>

            {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
              {/* Get Started Button with Arrow Icon */}
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg group">
                <span>Get Started</span>
               
              </button>

              {/* Learn More Button with Info Icon */}
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-colors duration-300 group-hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;