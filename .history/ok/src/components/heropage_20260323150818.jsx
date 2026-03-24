import React from "react";

const HeroPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-center!  bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/main1.jpg')",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 mt-20">
          <div className="max-w-2xl ">
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
              <div className="flex flex-col sm:flex-row gap-4 park">
              {/* Get Started Button with Arrow Icon */}
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#1F514C] font-semibold rounded-4xl transition duration-300 transform hover:scale-105 shadow-lg group">
                <span>Free Consultation</span>
               <img src="/images/ok.svg"/>
              </button>

              {/* Learn More Button with Info Icon */}
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-4xl transition duration-300 transform hover:scale-105 group">
              
                <span>Explore Our Services</span>
                 <img src="/images/ok1.svg"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;