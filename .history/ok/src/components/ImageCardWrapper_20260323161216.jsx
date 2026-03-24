

import React from "react";

const SplitPage = () => {
  return (
    <div className="min-h-screen bg-[#1F514C] park">
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* Left Section - 30% Width */}
        <div className="w-full md:w-[30%] bg-[#1F514C] text-white p-8  flex flex-col justify-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
           Platform that matches with top-tier talent.
          </h1>
          
          {/* Paragraph */}
          <p className="text-base md:text-lg text-indigo-100 mb-8 leading-relaxed">
            Discover innovative solutions that drive growth, enhance productivity, 
            and unlock new opportunities for your organization. Join thousands of 
            satisfied clients who have already transformed their business with us.
          </p>
          
          {/* Button */}
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1F514C] text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition duration-300 transform hover:scale-105 shadow-lg w-fit group">
            <span>Get Started Now</span>
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

        {/* Right Section - 70% Width */}
        <div className="w-full md:w-[70%] flex flex-col">
          
          {/* Top Section - 20% Height */}
          <div className="h-[20%] bg-[#1F514C] border-b border-gray-200 px-6 md:px-8 lg:px-12 flex items-center">
            <div className="flex flex-wrap gap-3">
              {/* Tag 1 */}
              <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold hover:bg-indigo-200 transition cursor-pointer">
                # Innovation
              </span>
              {/* Tag 2 */}
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold hover:bg-green-200 transition cursor-pointer">
                # Excellence
              </span>
              {/* Tag 3 */}
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition cursor-pointer">
                # Results Driven
              </span>
            </div>
          </div>

          {/* Bottom Section - 80% Height */}
          <div className="h-[80%] bg-gray-50 p-6 md:p-8 lg:p-12 overflow-auto">
            <div className="bg-[#1F514C] rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="flex flex-col lg:flex-row h-full">
                
                {/* Left side of bottom section - Content */}
                <div className="w-full lg:w-1/2 p-6 md:p-8">
                  {/* Heading */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Why Choose Our Services?
                  </h2>
                  
                  {/* Paragraph */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We deliver exceptional value through our comprehensive approach, 
                    combining industry expertise with cutting-edge technology to ensure 
                    your success.
                  </p>
                  
                  {/* Bullet Points */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Expert team with 10+ years of experience</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Proven track record with 500+ successful projects</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">24/7 dedicated customer support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Customized solutions tailored to your needs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Affordable pricing with flexible plans</span>
                    </div>
                  </div>
                </div>
                
                {/* Right side of bottom section - Image */}
                <div className="w-full lg:w-1/2 bg-indigo-50 p-6 md:p-8 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Team collaboration"
                    className="w-full h-auto max-h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitPage;