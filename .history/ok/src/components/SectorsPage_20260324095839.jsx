import React from "react";
import { 
  FaOilCan, 
  FaCar, 
  FaRoad, 
  FaBuilding, 
  FaChargingStation, 
 
  FaLaptopCode, 
  FaIndustry, 
  FaHardHat, 
  FaBolt, 
  FaLeaf, 
  FaCogs 
} from "react-icons/fa";
import { GiBridge, GiMining } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";

const SectorsPage = () => {
  const sectors = [
    {
      title: "Oil & Gas",
      description:
        "In the safety-critical Oil & Gas industry, Esko Spirale Group offers trusted Third-Party Inspections (TPI) and T4S Audits to ensure asset integrity, operational safety, and compliance with international standards.",
      icon: FaOilCan,
      color: "#18403C",
    },
    {
      title: "Automobile",
      description:
        "Our spectrum of staffing expertise are in the fields of Automobiles, Manufacturing, Telecommunication, Power Distribution, etc. and we feel accomplished, when the organizations benefit from our experience.",
      icon: FaCar,
      color: "#18403C",
    },
    {
      title: "Road & Bridges",
      description:
        "We offer comprehensive staffing solutions for Road & Bridge projects, ensuring you find skilled professionals for successful infrastructure development. Our experts help you meet project & maintaining the highest quality standards.",
      icon: FaRoad,
      color: "#18403C",
    },
    {
      title: "Building Infrastructure",
      description:
        "We offer reliable payroll management solutions tailored for the building infrastructure sector, ensuring timely payments, compliance, and workforce satisfaction at every project stage.",
      icon: FaBuilding,
      color: "#18403C",
    },
    {
      title: "EV Charging Stations",
      description:
        "We provide specialized training programs for EV Charging Station operations, focusing on safety, technical skills, and efficient management.",
      icon: FaChargingStation,
      color: "#18403C",
    },
    {
      title: "Telecommunication",
      description:
        "In the fast-paced telecommunication industry, precise execution is critical to ensure seamless connectivity, minimize downtime, and maximize operational efficiency.",
      icon: Fa,
      color: "#18403C",
    },
    {
      title: "Information Technology",
      description:
        "We provide advice, guidelines and a road map for sourcing, utilizing and managing IT assets and resources.",
      icon: FaLaptopCode,
      color: "#18403C",
    },
    {
      title: "Infrastructure",
      description:
        "We help businesses across a broad range of industries design, modify, and maintain their infrastructure in order to improve efficiency, manage cost, and minimize security risks.",
      icon: FaIndustry,
      color: "#18403C",
    },
    {
      title: "Mining & Metals",
      description:
        "We help clients to get best staffing in cement industry, fabrications, crusher, machine installation, machine maintenance and much more to achieve our organisational goal.",
      icon: GiMining,
      color: "#18403C",
    },
    {
      title: "Power & Energy",
      description:
        "We analyze the clients' utility bills, inspect the equipment and machinery used for production, and strategize energy plans to limit energy waste and costing.",
      icon: FaBolt,
      color: "#18403C",
    },
    {
      title: "Green Energy",
      description:
        "Driving innovation in the Green Energy sector, Spirale Group offers expert Third-Party Inspections (TPI) and Safety Audits that promote regulatory adherence, risk mitigation, and operational excellence across renewable power infrastructure.",
      icon: FaLeaf,
      color: "#18403C",
    },
    {
      title: "Manufacturing & Processes",
      description:
        "We provide services designed to assist our clients in implementing their change initiatives.",
      icon: FaCogs,
      color: "#18403C",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#18403C" }}>
            Industries We Serve
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#18403C" }}></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Delivering excellence across diverse sectors with our specialized staffing, 
            inspection, and management solutions
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-transparent"
                style={{
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* Icon Container */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#18403C10" }}
                >
                  <IconComponent 
                    className="text-3xl transition-all duration-300" 
                    style={{ color: "#18403C" }}
                  />
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-3 transition-colors duration-300"
                  style={{ color: "#18403C" }}
                >
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {sector.description}
                </p>

                {/* Decorative Line */}
                <div 
                  className="w-12 h-0.5 mt-4 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: "#18403C" }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div 
          className="mt-20 rounded-3xl p-12 text-center"
          style={{ backgroundColor: "#18403C" }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Workforce?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us for innovative staffing solutions tailored to your industry needs
          </p>
          <button className="bg-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg" style={{ color: "#18403C" }}>
            Get in Touch Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;