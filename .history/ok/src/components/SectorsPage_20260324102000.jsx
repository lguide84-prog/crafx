import React, { useState, useRef, useEffect } from "react";
import { 
  FaOilCan, 
  FaCar, 
  FaRoad, 
  FaBuilding, 
  FaChargingStation, 
  FaLaptopCode, 
  FaIndustry, 
  FaBolt, 
  FaLeaf, 
  FaCogs,
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaGlobe
} from "react-icons/fa";
import { GiBridge, GiMining } from "react-icons/gi";
import { MdElectricalServices, MdOutlineSecurity } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";

const SectorsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleElements, setVisibleElements] = useState({});

  const sectors = [
    {
      title: "Oil & Gas",
      description: "In the safety-critical Oil & Gas industry, Esko Spirale Group offers trusted Third-Party Inspections (TPI) and T4S Audits to ensure asset integrity, operational safety, and compliance with international standards.",
      icon: FaOilCan,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "98% Compliance Rate",
    },
    {
      title: "Automobile",
      description: "Our spectrum of staffing expertise are in the fields of Automobiles, Manufacturing, Telecommunication, Power Distribution, etc. and we feel accomplished, when the organizations benefit from our experience.",
      icon: FaCar,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "10K+ Placements",
    },
    {
      title: "Road & Bridges",
      description: "We offer comprehensive staffing solutions for Road & Bridge projects, ensuring you find skilled professionals for successful infrastructure development.",
      icon: FaRoad,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "500+ Projects",
    },
    {
      title: "Building Infrastructure",
      description: "We offer reliable payroll management solutions tailored for the building infrastructure sector, ensuring timely payments, compliance, and workforce satisfaction.",
      icon: FaBuilding,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "99% On-time Payroll",
    },
    {
      title: "EV Charging Stations",
      description: "We provide specialized training programs for EV Charging Station operations, focusing on safety, technical skills, and efficient management.",
      icon: FaChargingStation,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "5000+ Trained",
    },
    {
      title: "Telecommunication",
      description: "In the fast-paced telecommunication industry, precise execution is critical to ensure seamless connectivity, minimize downtime, and maximize operational efficiency.",
      icon: TbBrandTelegram,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "99.9% Uptime",
    },
    {
      title: "Information Technology",
      description: "We provide advice, guidelines and a road map for sourcing, utilizing and managing IT assets and resources.",
      icon: FaLaptopCode,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "24/7 Support",
    },
    {
      title: "Infrastructure",
      description: "We help businesses across a broad range of industries design, modify, and maintain their infrastructure in order to improve efficiency, manage cost, and minimize security risks.",
      icon: FaIndustry,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "30% Cost Reduction",
    },
    {
      title: "Mining & Metals",
      description: "We help clients to get best staffing in cement industry, fabrications, crusher, machine installation, machine maintenance and much more.",
      icon: GiMining,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "100+ Clients",
    },
    {
      title: "Power & Energy",
      description: "We analyze the clients' utility bills, inspect the equipment and machinery used for production, and strategize energy plans to limit energy waste and costing.",
      icon: FaBolt,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "40% Energy Saved",
    },
    {
      title: "Green Energy",
      description: "Driving innovation in the Green Energy sector, Spirale Group offers expert Third-Party Inspections (TPI) and Safety Audits that promote regulatory adherence, risk mitigation, and operational excellence.",
      icon: FaLeaf,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "Carbon Neutral",
    },
    {
      title: "Manufacturing & Processes",
      description: "We provide services designed to assist our clients in implementing their change initiatives.",
      icon: FaCogs,
      color: "#18403C",
      gradient: "from-[#18403C]/10 to-[#18403C]/5",
      stats: "50% Efficiency Gain",
    },
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
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-8 sm:py-12 md:py-20 px-3 sm:px-4 park">
      <div className="container mx-auto">
        {/* Header Section with Animation */}
        <div 
          className="text-center mb-10 sm:mb-12 md:mb-20 fade-up-element" 
          id="header"
          style={{
            opacity: visibleElements.header ? 1 : 0,
            transform: visibleElements.header ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#18403C]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 md:mb-6">
            <FaGlobe className="text-[#18403C] text-xs sm:text-sm md:text-base" />
            <span className="text-[#18403C] font-medium text-xs sm:text-sm">Our Expertise</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-[#18403C] to-[#2c6b64] bg-clip-text text-transparent px-2">
            Industries We Serve
          </h2>
          
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#18403C] to-[#2c6b64] mx-auto mb-4 md:mb-6 rounded-full"></div>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-4">
            Delivering excellence across diverse sectors with our specialized staffing, 
            inspection, and management solutions
          </p>

          {/* Stats Row - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <FaUsers className="text-2xl sm:text-3xl md:text-4xl text-[#18403C] mx-auto mb-1 sm:mb-2 md:mb-3" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#18403C]">50K+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Professionals Placed</div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <FaChartLine className="text-2xl sm:text-3xl md:text-4xl text-[#18403C] mx-auto mb-1 sm:mb-2 md:mb-3" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#18403C]">98%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 md:col-span-1">
              <MdOutlineSecurity className="text-2xl sm:text-3xl md:text-4xl text-[#18403C] mx-auto mb-1 sm:mb-2 md:mb-3" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#18403C]">15+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Sectors Grid - Proper Responsive Grid */}
        {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
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
                <div
                  className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5 transition-all duration-500 overflow-hidden cursor-pointer h-full"
                  style={{
                    boxShadow: isHovered 
                      ? "0 10px 25px -8px rgba(24, 64, 60, 0.2)" 
                      : "0 4px 10px -3px rgba(0, 0, 0, 0.05)",
                    transform: isHovered ? "translateY(-3px) sm:translateY(-4px) md:translateY(-6px)" : "translateY(0)",
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container with Animation - Responsive sizing */}
                  <div
                    className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 transition-all duration-500 mx-auto md:mx-0"
                    style={{
                      background: isHovered 
                        ? "linear-gradient(135deg, #18403C 0%, #2c6b64 100%)" 
                        : "#18403C10",
                      transform: isHovered ? "scale(1.05) rotate(3deg)" : "scale(1) rotate(0deg)",
                    }}
                  >
                    <IconComponent 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-all duration-500" 
                      style={{ color: isHovered ? "white" : "#18403C" }}
                    />
                  </div>

                  {/* Title - Responsive text */}
                  <h3 
                    className="relative text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2 transition-colors duration-300 text-center md:text-left"
                    style={{ color: "#18403C" }}
                  >
                    {sector.title}
                  </h3>

                  {/* Description - Different for mobile, tablet and desktop */}
                  <p className="relative text-gray-600 leading-relaxed text-[10px] sm:text-xs md:text-xs lg:text-sm mb-2 sm:mb-3 hidden sm:block">
                    {sector.description.length > (window.innerWidth < 768 ? 80 : 100) ? 
                      `${sector.description.substring(0, window.innerWidth < 768 ? 80 : 100)}...` : 
                      sector.description}
                  </p>
                  
                  {/* Short description for mobile */}
                  <p className="relative text-gray-600 leading-relaxed text-[10px] sm:text-xs mb-2 sm:mb-3 block sm:hidden">
                    {sector.description.substring(0, 60)}...
                  </p>

                  {/* Stats Badge - Responsive */}
                  <div className="relative inline-block bg-[#18403C]/5 rounded-full px-1.5 sm:px-2 md:px-2.5 py-0.5 mb-2 sm:mb-3">
                    <span className="text-[9px] sm:text-xs font-medium text-[#18403C] whitespace-nowrap">{sector.stats}</span>
                  </div>

                  {/* Learn More Link */}
                  <div className="relative flex items-center justify-center md:justify-start gap-1 text-[#18403C] font-medium text-[10px] sm:text-xs md:text-sm group/link">
                    <span className="inline">Learn More</span>
                    <FaArrowRight className="text-[8px] sm:text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                  </div>

                  {/* Decorative Line */}
                  <div 
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 rounded-full"
                    style={{
                      width: isHovered ? "100%" : "0%",
                      background: "linear-gradient(90deg, #18403C 0%, #2c6b64 100%)",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div 
          className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden fade-up-element"
          id="cta"
          style={{
            opacity: visibleElements.cta ? 1 : 0,
            transform: visibleElements.cta ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s"
          }}
        >
          <div style={{ backgroundColor: "#18403C" }} className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative p-6 sm:p-8 md:p-10 lg:p-16 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Ready to Transform Your Workforce?
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                Join 500+ satisfied clients who have revolutionized their staffing strategies with our expert solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-2 sm:px-4">
                <button className="group bg-white px-4 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-1 sm:gap-2 justify-center text-xs sm:text-sm md:text-base" style={{ color: "#18403C" }}>
                  Get in Touch Today
                  <FaArrowRight className="text-[10px] sm:text-xs md:text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="border-2 border-white text-white px-4 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-[#18403C] text-xs sm:text-sm md:text-base">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;