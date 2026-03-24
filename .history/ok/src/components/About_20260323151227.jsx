import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="About Us"
                className="w-full h-full object-cover"
              />
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 w-full">
            
            {/* Top Heading */}
            <div className="mb-6">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
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
              We strive to build a future where technology empowers everyone, everywhere. 
              Our core values—integrity, innovation, and impact—guide everything we do. 
              From sustainable practices to inclusive design, we're dedicated to creating 
              positive change while delivering exceptional results for our clients and 
              communities.
            </p>

            {/* Third Heading */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h3>

            {/* Third Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-8">
              With a team of industry experts, cutting-edge technology, and a client-first 
              approach, we deliver solutions that exceed expectations. Our track record 
              speaks for itself—over 500 successful projects, 98% client satisfaction rate, 
              and numerous industry awards. We don't just build products; we build lasting 
              partnerships that drive growth and success.
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