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
  FaPalette
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
      icon: GiOilRig,
      stats: "98% Compliance Rate",
      vacancies: "50+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Automobile",
      description: "Our spectrum of staffing expertise are in the fields of Automobiles, Manufacturing, Telecommunication, Power Distribution, etc.",
      icon: FaCar,
      stats: "10K+ Placements",
      vacancies: "100+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Road & Bridges",
      description: "We offer comprehensive staffing solutions for Road & Bridge projects, ensuring you find skilled professionals for successful infrastructure development.",
      icon: GiBridge,
      stats: "500+ Projects",
      vacancies: "80+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Building Infrastructure",
      description: "We offer reliable payroll management solutions tailored for the building infrastructure sector, ensuring timely payments and compliance.",
      icon: FaBuilding,
      stats: "99% On-time Payroll",
      vacancies: "120+ Vacancy",
      color: "#18403C"
    },
    {
      title: "EV Charging Stations",
      description: "We provide specialized training programs for EV Charging Station operations, focusing on safety, technical skills, and efficient management.",
      icon: FaChargingStation,
      stats: "5000+ Trained",
      vacancies: "60+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Telecommunication",
      description: "In the fast-paced telecommunication industry, precise execution is critical to ensure seamless connectivity and minimize downtime.",
      icon: FaLaptopCode,
      stats: "99.9% Uptime",
      vacancies: "200+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Information Technology",
      description: "We provide advice, guidelines and a road map for sourcing, utilizing and managing IT assets and resources.",
      icon: FaLaptopCode,
      stats: "24/7 Support",
      vacancies: "100+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Infrastructure",
      description: "We help businesses across a broad range of industries design, modify, and maintain their infrastructure to improve efficiency.",
      icon: FaIndustry,
      stats: "30% Cost Reduction",
      vacancies: "150+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Mining & Metals",
      description: "We help clients to get best staffing in cement industry, fabrications, crusher, machine installation and maintenance.",
      icon: GiMining,
      stats: "100+ Clients",
      vacancies: "70+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Power & Energy",
      description: "We analyze clients' utility bills, inspect equipment and machinery, and strategize energy plans to limit waste and costing.",
      icon: FaBolt,
      stats: "40% Energy Saved",
      vacancies: "90+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Green Energy",
      description: "Driving innovation in the Green Energy sector, offering expert Third-Party Inspections and Safety Audits for renewable power.",
      icon: FaLeaf,
      stats: "Carbon Neutral",
      vacancies: "50+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Manufacturing & Processes",
      description: "We provide services designed to assist our clients in implementing their change initiatives and optimizing production.",
      icon: FaCogs,
      stats: "50% Efficiency Gain",
      vacancies: "200+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Customer Service",
      description: "Expert customer service professionals dedicated to delivering exceptional support and client satisfaction.",
      icon: FaHeadset,
      stats: "Unlimited",
      vacancies: "Unlimited Vacancy",
      color: "#18403C"
    },
    {
      title: "Business Development",
      description: "Strategic business development professionals to drive growth and expand market presence.",
      icon: FaRocket,
      stats: "High Growth",
      vacancies: "Unlimited Vacancy",
      color: "#18403C"
    },
    {
      title: "Sales & Marketing",
      description: "Dynamic sales and marketing experts to boost brand visibility and drive revenue growth.",
      icon: FaBullhorn,
      stats: "High Demand",
      vacancies: "Unlimited Vacancy",
      color: "#18403C"
    },
    {
      title: "Pharma & FMCG",
      description: "Specialized professionals for pharmaceutical and fast-moving consumer goods industries.",
      icon: FaFlask,
      stats: "100+ Vacancy",
      vacancies: "100+ Vacancy",
      color: "#18403C"
    },
    {
      title: "Design & Creative",
      description: "Creative designers and artists for UI/UX, graphic design, and visual communication.",
      icon: FaPalette,
      stats: "100+ Vacancy",
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
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#18403C] to-[#2c6b64] overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <FaIndustry className="text-white text-sm" />
              <span className="text-white font-medium text-sm">Industries We Serve</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering Industries
              <span className="block text-white/90">with Expert Solutions</span>
            </h1>
            <p className="text-white/90 text-base md:text-xl mb-8 max-w-2xl mx-auto">
              Delivering specialized staffing, inspection, and management solutions across diverse sectors worldwide
            </p>
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
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
            <div className="text-xs md:text-sm text-gray-600">States Served</div>
          </div>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
            <MdOutlineSecurity className="text-3xl md:text-4xl text-[#18403C] mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-[#18403C]">100%</div>
            <div className="text-xs md:text-sm text-gray-600">Compliance Rate</div>
          </div>
        </div>
      </div>

      {/* Industries Grid Section - Circle Cards */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 fade-up-element" id="industries-header">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18403C] mb-4">
            Our Industry Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#18403C] to-[#2c6b64] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore current opportunities across various industries
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
                <div className="group text-center">
                  {/* Circle Icon */}
                  <div
                    className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer"
                    style={{
                      background: isHovered 
                        ? "linear-gradient(135deg, #18403C 0%, #2c6b64 100%)" 
                        : "#18403C10",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      boxShadow: isHovered 
                        ? "0 20px 35px -12px rgba(24, 64, 60, 0.3)" 
                        : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <IconComponent 
                      className="text-4xl sm:text-5xl md:text-6xl transition-all duration-500" 
                      style={{ color: isHovered ? "white" : "#18403C" }}
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
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 mb-3 line-clamp-2">
                    {industry.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="inline-block bg-[#18403C]/10 rounded-full px-3 py-1 mb-2">
                    <span className="text-xs font-medium text-[#18403C]">{industry.stats}</span>
                  </div>

                  {/* Vacancy Badge */}
                  <div className="inline-block bg-[#2c6b64]/10 rounded-full px-3 py-1 ml-2 mb-2">
                    <span className="text-xs font-semibold text-[#2c6b64]">{industry.vacancies}</span>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-3">
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
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="bg-gradient-to-r from-[#18403C] to-[#2c6b64] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Start Your Career Journey?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Submit your resume and let our experts find the perfect opportunity for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#18403C] px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Upload Resume
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#18403C] transition-all duration-300">
              View All Jobs
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