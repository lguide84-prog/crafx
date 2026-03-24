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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight park ">
            <span className="font-semibold">Recruitment</span>  process <br />
              <span className="">with smart solutions.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Discover amazing experiences, cutting-edge solutions, and
              limitless possibilities. Join us on this extraordinary journey
              today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;