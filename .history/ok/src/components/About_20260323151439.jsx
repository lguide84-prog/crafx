import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24 park">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="lg:w-[40%] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about.webp"
                alt="About Us"
                className="w-full h-full object-cover"
              />
           
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-[60%] w-full">
            
            {/* Top Heading */}
            <div className="mb-6">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#18403C] mt-2">
             Platform designed to streamline the hiring process and connect businesses with top-tier talent.
              </h2>
            </div>

            {/* First Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
            We understand that finding the right people is key to your success, which is why our platform offers personalized recruitment strategies tailored to your unique needs.
            </p>

            {/* Subheading */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
             Mission

            </h3>

            {/* Second Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to connect businesses with the best talent by offering personalized, efficient, and data-driven hiring solutions that foster long-term success.
            </p>

            {/* Third Heading */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
             Approach
            </h3>

            {/* Third Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-8">
             We take a tailored approach to recruitment, understanding each business's unique culture, needs, and goals.
            </p>

            {/* Button */}
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg group">
              <span>Learn More About Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;