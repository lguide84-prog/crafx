import React, { useState, useEffect } from "react";
import { 
  FaArrowRight, 
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaIndustry,
  FaBuilding,
  FaCar,
  FaBolt,
  FaLeaf,
  FaLaptopCode,
  FaChargingStation,
  FaCogs,
  FaHeadset,
  FaRocket,
  FaBullhorn,
  FaFlask,
  FaPalette,
  FaHardHat,
  FaHandshake,
  FaPaintBrush,
  FaPhoneAlt,
  FaShieldAlt,
  FaBriefcase,
  FaUserTie
} from "react-icons/fa";
import { GiMining, GiOilRig, GiBridge } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

const IndustriesPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleElements, setVisibleElements] = useState({});

 const industries = [
  {
    title: "Project Management Consultancy",
    description: "Expert PMC services for large-scale infrastructure projects ensuring timely delivery and quality compliance.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    icon: FaBriefcase,
    stats: "PAN India",
    vacancies: "Active Projects",
    color: "#18403C"
  },
  {
    title: "General Consultancy",
    description: "Comprehensive advisory services for infrastructure development, procurement, and contract management.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    icon: FaHandshake,
    stats: "PAN India",
    vacancies: "Active Projects",
    color: "#18403C"
  },
  {
    title: "Products Promotion",
    description: "Strategic marketing and promotion of products across infrastructure and industrial sectors.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    icon: FaBullhorn,
    stats: "PAN India",
    vacancies: "Active Projects",
    color: "#18403C"
  },
  {
    title: "Property & Real Estate Consultancy",
    description: "Expert guidance for property acquisition, development, and real estate investment strategies.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    icon: FaBuilding,
    stats: "PAN India",
    vacancies: "Active Projects",
    color: "#18403C"
  },
  {
    title: "Structural & Architectural Design",
    description: "Comprehensive structural and architectural design services with detailed drawings and specifications.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
    icon: FaPaintBrush,
    stats: "PAN India",
    vacancies: "Active Projects",
    color: "#18403C"
  },
  {
    title: "Project Liaising",
    description: "Professional liaison services for project approvals, regulatory compliance, and stakeholder coordination.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    icon: FaPhoneAlt,
    stats: "PAN India",
    vacancies: "Active Projects",
    color: "#18403C"
  },
  {
    title: "Manpower Supply",
    description: "Skilled and experienced manpower solutions for construction, infrastructure, and industrial projects.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    icon: FaUsers,
    stats: "PAN India",
    vacancies: "Active Projects",
    color: "#18403C"
  },
  {
    title: "Security Services",
    description: "Comprehensive security solutions for project sites, facilities, and infrastructure assets.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop",
    icon: FaShieldAlt,
    stats: "PAN India",
    vacancies: "Active Projects",
    color: "#18403C"
  },
  {
    title: "Professional Support Services",
    description: "End-to-end professional support services including technical assistance and operational support.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    icon: FaUserTie,
    stats: "PAN India",
    vacancies: "Active Projects",
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
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen park">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#18403C] to-[#2c6b64] overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-28 mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <FaIndustry className="text-white text-sm" />
              <span className="text-white font-medium text-sm">Our Professional Services</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Consultancy
              <span className="block text-white/90">& Support Solutions</span>
            </h1>
            <p className="text-white/90 text-base md:text-xl mb-8 max-w-2xl mx-auto">
              Delivering Project Management Consultancy, General Consultancy, Products Promotion, Property & Real Estate Consultancy, Structural & Architectural Design, Project Liaising, Manpower Supply, Security Services, and other professional support services nationwide
            </p>
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute -bottom-10 left-0 right-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <FaUsers className="text-3xl md:text-4xl text-[#18403C] mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-[#18403C]">25+</div>
            <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <FaChartLine className="text-3xl md:text-4xl text-[#18403C] mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-[#18403C]">50+</div>
            <div className="text-xs md:text-sm text-gray-600">Projects Executed</div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <FaGlobe className="text-3xl md:text-4xl text-[#18403C] mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-[#18403C]">PAN India</div>
            <div className="text-xs md:text-sm text-gray-600">Geographic Reach</div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <MdOutlineSecurity className="text-3xl md:text-4xl text-[#18403C] mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-[#18403C]">100%</div>
            <div className="text-xs md:text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 fade-up-element" id="industries-header">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18403C] mb-4">
            Our Professional Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#18403C] to-[#2c6b64] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive solutions tailored to meet your project requirements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, index) => {
            const isHovered = hoveredIndex === index;
            const elementId = `industry-${index}`;
            const IconComponent = industry.icon;
            
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
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg">
                      <IconComponent className="text-2xl text-[#18403C]" />
                    </div>
                    
                   
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#18403C] mb-2 group-hover:text-[#2c6b64] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {industry.description}
                    </p>
                    
                   
                    
                    {/* Learn More Button */}
                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-100">
                     
                      <div className="flex items-center gap-1">
                        <FaCheckCircle className="text-green-500 text-xs" />
                        <span className="text-xs text-gray-500">Available PAN India</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Bottom Border */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
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
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="bg-gradient-to-r from-[#18403C] to-[#2c6b64] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Partner with Us?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can support your next project with our professional services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#18403C] px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contact Us
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

export default IndustriesPage;