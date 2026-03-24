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
              <span className="text-[#18403C] font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#18403C] mt-2">
             Platform designed to streamline the hiring process and connect businesses with top-tier talent.
              </h2>
            </div>

            {/* First Paragraph */}
            <p className="text-gray-600 text-md leading-relaxed mb-6">
            We understand that finding the right people is key to your success, which is why our platform offers personalized recruitment strategies tailored to your unique needs.
            </p>

            {/* Subheading */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
             Mission

            </h3>

            {/* Second Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-2">
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
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#18403C] text-white font-semibold rounded-4xl transition duration-300 transform hover:scale-105 shadow-lg group">
              <span>Learn More About Us</span>
             <img src="/images/ok3.svg"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;