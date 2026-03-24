import React from "react";

const CenteredHeroPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/last.webp')",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center text-center park">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto">
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white mb-6 leading-tight animate-fade-in">
           Take the first step toward building your dream team.
            </h1>

            {/* Paragraph */}
            <p className="text-base md:text-lg lg:text-md text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
             Start using Linkrow today and connect with top talent faster and more efficiently!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#1F514C] font-semibold rounded-4xl transition duration-300 transform hover:scale-105 shadow-lg group">
                <span>Free Consultation</span>
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

              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-colors duration-300"
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
                <span>Explore Our Services</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Add a subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7-7-7m14-6l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default CenteredHeroPage;