import React, { useState, useEffect } from "react";
import { 
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaGlobe
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const SectorsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleElements, setVisibleElements] = useState({});

  const sectors = [
    {
      title: "Information Technology",
      description: "We provide advice, guidelines and a road map for sourcing, utilizing and managing IT assets and resources.",
      logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      vacancies: "100+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Customer Service",
      description: "Expert customer service professionals dedicated to delivering exceptional support and client satisfaction.",
      logo: "https://cdn-icons-png.flaticon.com/512/3145/3145768.png",
      vacancies: "Unlimited Vacancy",
      color: "#18403C"
    },
    {
      title: "Human Resource",
      description: "Skilled HR professionals to manage talent acquisition, employee relations, and organizational development.",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      vacancies: "200+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Finance",
      description: "Financial experts for accounting, auditing, budgeting, and financial planning and analysis.",
      logo: "https://cdn-icons-png.flaticon.com/512/2965/2965328.png",
      vacancies: "200+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Business Development",
      description: "Strategic business development professionals to drive growth and expand market presence.",
      logo: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
      vacancies: "Unlimited Vacancy",
      color: "#18403C"
    },
    {
      title: "Sales & Marketing",
      description: "Dynamic sales and marketing experts to boost brand visibility and drive revenue growth.",
      logo: "https://cdn-icons-png.flaticon.com/512/2965/2965359.png",
      vacancies: "Unlimited Vacancy",
      color: "#18403C"
    },
    {
      title: "Pharma & FMCG",
      description: "Specialized professionals for pharmaceutical and fast-moving consumer goods industries.",
      logo: "https://cdn-icons-png.flaticon.com/512/2917/2917988.png",
      vacancies: "100+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Design & Creative",
      description: "Creative designers and artists for UI/UX, graphic design, and visual communication.",
      logo: "https://cdn-icons-png.flaticon.com/512/2933/2933242.png",
      vacancies: "100+ Vacancy",
      color: "#18403C"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll(".fade-up-element");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div 
          className="text-center mb-12 md:mb-16 fade-up-element" 
          id="header"
          style={{
            opacity: visibleElements.header ? 1 : 0,
            transform: visibleElements.header ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#18403C]/10 px-4 py-2 rounded-full mb-4 md:mb-6">
            <FaGlobe className="text-[#18403C] text-sm md:text-base" />
            <span className="text-[#18403C] font-medium text-sm">Current Openings</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#18403C] to-[#2c6b64] bg-clip-text text-transparent">
            Explore Career Opportunities
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-[#18403C] to-[#2c6b64] mx-auto mb-4 md:mb-6 rounded-full"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Find your dream job across various industries with thousands of exciting opportunities
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#18403C]">1000+</div>
            <div className="text-xs text-gray-500">Active Jobs</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#18403C]">200+</div>
            <div className="text-xs text-gray-500">Companies</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#18403C]">50K+</div>
            <div className="text-xs text-gray-500">Candidates</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#18403C]">98%</div>
            <div className="text-xs text-gray-500">Success Rate</div>
          </div>
        </div>

        {/* Sectors Grid - Circle Cards with Logo Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {sectors.map((sector, index) => {
            const isHovered = hoveredIndex === index;
            const elementId = `sector-${index}`;
            
            return (
              <div
                key={index}
                className="fade-up-element"
                id={elementId}
                style={{
                  opacity: visibleElements[elementId] ? 1 : 0,
                  transform: visibleElements[elementId] ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${Math.min(index * 0.05, 0.5)}s`
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="group text-center">
                  {/* Circle Logo Container */}
                  <div
                    className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer bg-white shadow-lg"
                    style={{
                      background: isHovered 
                        ? "linear-gradient(135deg, #18403C 0%, #2c6b64 100%)" 
                        : "white",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      boxShadow: isHovered 
                        ? "0 20px 35px -12px rgba(24, 64, 60, 0.3)" 
                        : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <img 
                      src={sector.logo} 
                      alt={sector.title}
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-all duration-500"
                      style={{
                        filter: isHovered ? "brightness(0) invert(1)" : "none"
                      }}
                    />
                    
                    {/* Pulse Effect on Hover */}
                    {isHovered && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-[#18403C]/20"></div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-lg sm:text-xl font-bold mt-4 mb-2 transition-colors duration-300"
                    style={{ color: "#18403C" }}
                  >
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 mb-3 line-clamp-2">
                    {sector.description}
                  </p>

                  {/* Vacancy Badge */}
                  <div className="inline-block bg-[#18403C]/10 rounded-full px-3 py-1 mb-3">
                    <span className="text-xs font-semibold text-[#18403C]">{sector.vacancies}</span>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-2">
                    <button className="group/btn inline-flex items-center gap-1 text-[#18403C] font-medium text-sm hover:gap-2 transition-all duration-300">
                      Apply Now
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-r from-[#18403C] to-[#2c6b64] rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don't See Your Dream Job?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Submit your resume and our recruitment team will find the perfect opportunity for you
            </p>
            <button className="bg-white text-[#18403C] px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Upload Resume
            </button>
          </div>
        </div>
      </div>

      {/* Add custom styles for line-clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SectorsPage;