import React from "react";

const ImageCardWrapper = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jeremy Black",
      role: "Project Manager",
      image: "https://cdn.prod.website-files.com/678520b820d0a538cbda16d2/6787ac0f2c91814122097bf7_Portrait%20of%20a%20Confident%20Man.webp",
      position: "left",
      tag: null,
      transform: {
        translateX: "7.342px",
        translateY: "-1.4684px",
        scale: "0.6",
        rotateZ: "-3.70632deg"
      }
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Talent Acquisition Specialist",
      image: "https://cdn.prod.website-files.com/678520b820d0a538cbda16d2/6787ac77940eaf10ce49298a_Portrait%20of%20a%20Woman%20in%20Blazer.webp",
      position: "center",
      tag: "Top rated specialist",
      transform: {
        translateX: "0px",
        translateY: "0px",
        scale: "0.7",
        rotateZ: "0deg"
      }
    },
    {
      id: 3,
      name: "Anna Jonson",
      role: "Marketing Specialist",
      image: "https://cdn.prod.website-files.com/678520b820d0a538cbda16d2/6787978544bb64dbe8b51d75_Professional%20Asian%20Woman%20in%20Office.webp",
      position: "right",
      tag: null,
      transform: {
        translateX: "-7.342px",
        translateY: "-1.4684px",
        scale: "0.6",
        rotateZ: "3.70632deg"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional experts dedicated to delivering excellence
          </p>
        </div>

        {/* Image Cards Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 relative">
          
          {/* Left Card */}
          <div 
            className="relative scale transition-all duration-300 hover:z-20"
            style={{
              transform: `translate3d(7.342px, -1.4684px, 0px) scale3d(0.6, 0.6, 1) rotateZ(-3.70632deg)`,
              transformStyle: "preserve-3d",
              willChange: "transform"
            }}
          >
            <div className="relative group cursor-pointer">
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 rounded-2xl object-cover shadow-2xl transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {teamMembers[0].name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {teamMembers[0].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Card */}
          <div 
            className="relative scale transition-all duration-300 hover:z-20"
            style={{
              transform: `translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 1) rotateZ(0deg)`,
              transformStyle: "preserve-3d",
              willChange: "transform"
            }}
          >
            <div className="relative group cursor-pointer">
              <img
                src={teamMembers[1].image}
                alt={teamMembers[1].name}
                className="w-56 h-64 md:w-64 md:h-72 lg:w-80 lg:h-88 rounded-2xl object-cover shadow-2xl transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {teamMembers[1].tag}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {teamMembers[1].name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {teamMembers[1].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div 
            className="relative scale transition-all duration-300 hover:z-20"
            style={{
              transform: `translate3d(-7.342px, -1.4684px, 0px) scale3d(0.6, 0.6, 1) rotateZ(3.70632deg)`,
              transformStyle: "preserve-3d",
              willChange: "transform"
            }}
          >
            <div className="relative group cursor-pointer">
              <img
                src={teamMembers[2].image}
                alt={teamMembers[2].name}
                className="w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 rounded-2xl object-cover shadow-2xl transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {teamMembers[2].name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {teamMembers[2].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardWrapper;