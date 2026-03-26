import React, { useState, useEffect } from "react";
import { 
  FaLaptopCode, 
  FaHeadset, 
  FaUsers, 
  FaChartLine, 
  FaRocket, 
  FaBullhorn, 
  FaFlask, 
  FaPalette,
  FaArrowRight,
  FaChartLine as FaChartLineIcon,
  FaUsers as FaUsersIcon,
  FaGlobe,
  FaCar,
  FaBuilding,
  FaBolt,
  FaIndustry,
  FaHandshake,
  FaHardHat,
  FaShieldAlt,
  FaUserTie,
  FaPaintBrush,
  FaPhoneAlt,
  FaBriefcase
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SectorsPage = () => {
  const navigate = useNavigate();


  const gocareer=()=>{
    navigate('/career')
    scrollTo(0,0)
  }
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleElements, setVisibleElements] = useState({});

  const sectors = [
    {
      title: "Project Management Consultancy",
      description: "Expert PMC services for large-scale infrastructure projects ensuring timely delivery and quality compliance.",
      icon: FaBriefcase,
      vacancies: "Active Projects",
      color: "#18403C",
      bgColor: "#18403C10"
    },
    {
      title: "General Consultancy",
      description: "Comprehensive advisory services for infrastructure development, procurement, and contract management.",
      icon: FaHandshake,
      vacancies: "PAN India",
      color: "#18403C",
      bgColor: "#18403C10"
    },
    {
      title: "Products Promotion",
      description: "Strategic marketing and promotion of products across infrastructure and industrial sectors.",
      icon: FaBullhorn,
      vacancies: "Pan India",
      color: "#18403C",
      bgColor: "#18403C10"
    },
  {
  title: "Property & Real Estate Consultancy",
  description: "Expert guidance for property acquisition, development, and real estate investment strategies.",
  icon: FaBuilding,
  vacancies: "PAN India",
  color: "#18403C",
  bgColor: "#18403C10"
},
    {
      title: "Structural & Architectural Design",
      description: "Comprehensive structural and architectural design services with detailed drawings and specifications.",
      icon: FaPaintBrush,
      vacancies: "PAN India",
      color: "#18403C",
      bgColor: "#18403C10"
    },
    {
      title: "Project Liaising",
      description: "Professional liaison services for project approvals, regulatory compliance, and stakeholder coordination.",
      icon: FaPhoneAlt,
      vacancies: "PAN India",
      color: "#18403C",
      bgColor: "#18403C10"
    },
    {
      title: "Manpower Supply",
      description: "Skilled and experienced manpower solutions for construction, infrastructure, and industrial projects.",
      icon: FaUsers,
      vacancies: "PAN India",
      color: "#18403C",
      bgColor: "#18403C10"
    },
    {
      title: "Security Services",
      description: "Comprehensive security solutions for project sites, facilities, and infrastructure assets.",
      icon: FaShieldAlt,
      vacancies: "PAN India",
      color: "#18403C",
      bgColor: "#18403C10"
    },
    {
      title: "Professional Support Services",
      description: "End-to-end professional support services including technical assistance and operational support.",
      icon: FaHardHat,
      vacancies: "PAN India",
      color: "#18403C",
      bgColor: "#18403C10"
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
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-12 sm:py-16 md:py-20 px-4 park">
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
            <span className="text-[#18403C] font-medium text-sm">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#18403C] to-[#2c6b64] bg-clip-text text-transparent">
       Our Professional Services
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-[#18403C] to-[#2c6b64] mx-auto mb-4 md:mb-6 rounded-full"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Delivering excellence with comprehensive consultancy and professional support services
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#18403C]">25+</div>
            <div className="text-xs text-gray-500">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#18403C]">50+</div>
            <div className="text-xs text-gray-500">Projects Executed</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#18403C]">PAN India</div>
            <div className="text-xs text-gray-500">Geographic Reach</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#18403C]">100%</div>
            <div className="text-xs text-gray-500">Client Satisfaction</div>
          </div>
        </div>

        {/* Services Grid - Circle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
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
                  {/* Circle Icon */}
                  <div
                    className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer"
                 style={{
  background: "#3b82f6",
  transform: isHovered ? "scale(1.1)" : "scale(1)",
  boxShadow: isHovered 
    ? "0 20px 35px -12px rgba(59, 130, 246, 0.4)"
    : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
}}
                  >
                    <IconComponent 
                      className="text-4xl sm:text-5xl md:text-6xl transition-all text-white duration-500" 
                     
                    />
                    
                    {/* Pulse Effect on Hover */}
                    {isHovered && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-[#18403C]/20"></div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-lg sm:text-xl font-bold mt-4 mb-2 transition-colors duration-300"
                    style={{ color: "#3b82f6" }}
                  >
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 mb-3">
                    {sector.description}
                  </p>

                

              
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-r from-[#18403C] to-[#2c6b64] rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Looking for Expert Consultancy?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Connect with our team to discuss how we can support your next infrastructure project
            </p>
            <button onClick={gocareer} className="bg-white text-[#18403C] px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;