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
                Professional Consultancy & Technical Support Services
              </h2>
            </div>

            {/* First Paragraph */}
            <p className="text-gray-600 text-md leading-relaxed mb-6">
              Crafx Services Pvt. Ltd. is a technology-driven organization specializing in Supply Chain Management, Procurement & Contracts, and Project Execution for large-scale infrastructure developments including Metros, Roads & Highways, Tunnels, Bridges, Buildings, and Mining on a PAN India basis.
            </p>

            {/* Subheading */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>

            {/* Second Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-2">
              To become the world's most promising service-driven company and create miracles in association with our prestigious clients, while working for the development of our nation and supporting a developing India.
            </p>

            {/* Third Heading */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Our Approach
            </h3>

            {/* Third Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-8">
              We follow a professional and transparent work process with experienced consultants and technical experts, focusing on quality, safety, compliances, timely project delivery, and strong client relationships.
            </p>

            {/* Button */}
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#18403C] text-white font-medium rounded-4xl transition duration-300 transform hover:scale-105 shadow-lg group">
              <span>Learn More About Us</span>
             <img src="/images/ok2.svg"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;