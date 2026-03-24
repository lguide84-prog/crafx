import React, { useState, useEffect } from "react";
import { 
  FaArrowRight, 
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaIndustry,
  FaBuilding,
  FaRoad,
  FaCar,
  FaBolt,
  FaLeaf,
  FaLaptopCode,

  FaChargingStation,
  FaCogs,
  FaHardHat
} from "react-icons/fa";
import { GiMining, GiOilRig, GiBridge } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

const IndustriesPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleElements, setVisibleElements] = useState({});

  const industries = [
    {
      title: "Oil & Gas",
      description: "In the safety-critical Oil & Gas industry, Esko Spirale Group offers trusted Third-Party Inspections (TPI) and T4S Audits to ensure asset integrity, operational safety, and compliance with international standards.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
      icon: GiOilRig,
      stats: "98% Compliance Rate",
      color: "#18403C"
    },
    {
      title: "Automobile",
      description: "Our spectrum of staffing expertise are in the fields of Automobiles, Manufacturing, Telecommunication, Power Distribution, etc. and we feel accomplished, when the organizations benefit from our experience.",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
      icon: FaCar,
      stats: "10K+ Placements",
      color: "#18403C"
    },
    {
      title: "Road & Bridges",
      description: "We offer comprehensive staffing solutions for Road & Bridge projects, ensuring you find skilled professionals for successful infrastructure development. Our experts help you meet project & maintaining the highest quality standards.",
      image: "https://images.unsplash.com/photo-1545972154-9bb223aac798?w=600&h=400&fit=crop",
      icon: GiBridge,
      stats: "500+ Projects",
      color: "#18403C"
    },
    {
      title: "Building Infrastructure",
      description: "We offer reliable payroll management solutions tailored for the building infrastructure sector, ensuring timely payments, compliance, and workforce satisfaction at every project stage.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      icon: FaBuilding,
      stats: "99% On-time Payroll",
      color: "#18403C"
    },
    {
      title: "EV Charging Stations",
      description: "We provide specialized training programs for EV Charging Station operations, focusing on safety, technical skills, and efficient management.",
      image: "https://images.unsplash.com/photo-1671782584185-1300064c5289?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXYlMjBjYXJ8ZW58MHx8MHx8fDA%3D",
      icon: FaChargingStation,
      stats: "5000+ Trained",
      color: "#18403C"
    },
    {
      title: "Telecommunication",
      description: "In the fast-paced telecommunication industry, precise execution is critical to ensure seamless connectivity, minimize downtime, and maximize operational efficiency.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      icon: FaLaptopCode,
      stats: "99.9% Uptime",
      color: "#18403C"
    },
    {
      title: "Information Technology",
      description: "We provide advice, guidelines and a road map for sourcing, utilizing and managing IT assets and resources.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      icon: FaLaptopCode,
      stats: "24/7 Support",
      color: "#18403C"
    },
    {
      title: "Infrastructure",
      description: "We help businesses across a broad range of industries design, modify, and maintain their infrastructure in order to improve efficiency, manage cost, and minimize security risks.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      icon: FaIndustry,
      stats: "30% Cost Reduction",
      color: "#18403C"
    },
    {
      title: "Mining & Metals",
      description: "We help clients to get best staffing in cement industry, fabrications, crusher, machine installation, machine maintenance and much more to achieve our organisational goal.",
      image: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=600&h=400&fit=crop",
      icon: GiMining,
      stats: "100+ Clients",
      color: "#18403C"
    },
    {
      title: "Power & Energy",
      description: "We analyze the clients' utility bills, inspect the equipment and machinery used for production, and strategize energy plans to limit energy waste and costing.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      icon: FaBolt,
      stats: "40% Energy Saved",
      color: "#18403C"
    },
    {
      title: "Green Energy",
      description: "Driving innovation in the Green Energy sector, Spirale Group offers expert Third-Party Inspections (TPI) and Safety Audits that promote regulatory adherence, risk mitigation, and operational excellence across renewable power infrastructure.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      icon: FaLeaf,
      stats: "Carbon Neutral",
      color: "#18403C"
    },
    {
      title: "Manufacturing & Processes",
      description: "We provide services designed to assist our clients in implementing their change initiatives. Our expertise helps optimize production processes and enhance operational efficiency.",
      image: "https://images.unsplash.com/photo-1581092335871-2716c99d015c?w=600&h=400&fit=crop",
      icon: FaCogs,
      stats: "50% Efficiency Gain",
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
        
        <div className="relative container mx-auto px-4 py-20 md:py-28 mt-3">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <FaIndustry className="text-white text-sm" />
              <span className="text-white font-medium text-sm">Industries We Serve</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering Industries
              <span className="block text-white/90">with Expert Solutions</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Delivering specialized staffing, inspection, and management solutions across diverse sectors worldwide
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
            <div className="text-2xl md:text-3xl font-bold text-[#18403C]">50K+</div>
            <div className="text-xs md:text-sm text-gray-600">Professionals Placed</div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <FaChartLine className="text-3xl md:text-4xl text-[#18403C] mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-[#18403C]">98%</div>
            <div className="text-xs md:text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <FaGlobe className="text-3xl md:text-4xl text-[#18403C] mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-[#18403C]">15+</div>
            <div className="text-xs md:text-sm text-gray-600">State Served</div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <MdOutlineSecurity className="text-3xl md:text-4xl text-[#18403C] mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-[#18403C]">100%</div>
            <div className="text-xs md:text-sm text-gray-600">Compliance Rate</div>
          </div>
        </div>
      </div>

      {/* Industries Grid Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 fade-up-element" id="industries-header">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18403C] mb-4">
            Our Industry Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#18403C] to-[#2c6b64] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Specialized solutions tailored to meet the unique challenges of each industry sector
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
                    
                    {/* Stats Badge */}
                    <div className="absolute top-3 right-3 bg-[#18403C]/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-white text-xs font-medium">{industry.stats}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#18403C] mb-2 group-hover:text-[#2c6b64] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {industry.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-[#18403C] font-medium text-sm group/link">
                        <span>Learn More</span>
                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCheckCircle className="text-green-500 text-xs" />
                        <span className="text-xs text-gray-500">Verified</span>
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

   

      {/* Add custom styles for line-clamp */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default IndustriesPage;