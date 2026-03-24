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
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);

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
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-up-element");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header Section with Animation */}
        <div className="text-center mb-20 fade-up-element" id="header">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#18403C]/10 px-4 py-2 rounded-full mb-6">
            <FaGlobe className="text-[#18403C]" />
            <span className="text-[#18403C] font-medium text-sm">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#18403C] to-[#2c6b64] bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#18403C] to-[#2c6b64] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Delivering excellence across diverse sectors with our specialized staffing, 
            inspection, and management solutions
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <FaUsers className="text-4xl text-[#18403C] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#18403C]">50K+</div>
              <div className="text-gray-600">Professionals Placed</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <FaChartLine className="text-4xl text-[#18403C] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#18403C]">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <MdOutlineSecurity className="text-4xl text-[#18403C] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#18403C]">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Sectors Grid with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="fade-up-element"
                id={`sector-${index}`}
                style={{ transitionDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="group relative bg-white rounded-2xl p-6 transition-all duration-500 overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: isHovered 
                      ? "0 20px 35px -12px rgba(24, 64, 60, 0.2)" 
                      : "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container with Animation */}
                  <div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                    style={{
                      background: isHovered 
                        ? "linear-gradient(135deg, #18403C 0%, #2c6b64 100%)" 
                        : "#18403C10",
                      transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                    }}
                  >
                    <IconComponent 
                      className="text-4xl transition-all duration-500" 
                      style={{ color: isHovered ? "white" : "#18403C" }}
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className="relative text-xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: isHovered ? "#18403C" : "#18403C" }}
                  >
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-gray-600 leading-relaxed text-sm mb-4">
                    {sector.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="relative inline-block bg-[#18403C]/5 rounded-full px-3 py-1 mb-4">
                    <span className="text-xs font-medium text-[#18403C]">{sector.stats}</span>
                  </div>

                  {/* Learn More Link */}
                  <div className="relative flex items-center gap-2 text-[#18403C] font-medium text-sm group/link">
                    <span>Learn More</span>
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                  </div>

                  {/* Decorative Line */}
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

        {/* Enhanced Call to Action Section */}
        <div 
          className="relative mt-24 rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#18403C" }}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative p-12 md:p-16 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Workforce?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ satisfied clients who have revolutionized their staffing strategies with our expert solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto" style={{ color: "#18403C" }}>
                Get in Touch Today
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-[#18403C]">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        .fade-up-element {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up-element.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default SectorsPage;