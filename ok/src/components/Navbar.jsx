import React, { useState, useEffect } from "react";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaInfoCircle, 
  FaBriefcase, 
  FaUserTie, 
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  // Check if current page is home
  const isHomePage = location.pathname === "/";

  // Navigation links
  const navLinks = [
    { id: "home", name: "Home", path: "/", icon: FaHome },
    { id: "about", name: "About", path: "/about", icon: FaInfoCircle },
    { id: "services", name: "Services", path: "/services", icon: FaBriefcase },
    { id: "career", name: "Career", path: "/career", icon: FaUserTie },
    { id: "contact", name: "Contact Us", path: "/contact", icon: FaEnvelope },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active link based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    const active = navLinks.find(link => link.path === currentPath);
    if (active) {
      setActiveLink(active.id);
    }
  }, [location.pathname]);

  const handleNavClick = (id, path) => {
    setActiveLink(id);
    setIsOpen(false);
    window.location.href = path;
  };

  // Determine navbar background based on page and scroll
  const getNavbarBg = () => {
    if (!isHomePage) {
      // On other pages, always solid white
      return "bg-white shadow-lg";
    }
    // On home page, transparent when not scrolled, solid white when scrolled
    return scrolled ? "bg-white shadow-lg" : "bg-transparent";
  };

  // Determine text color based on page and scroll
  const getTextColor = (isActive = false) => {
    if (!isHomePage) {
      // On other pages, always dark text
      return isActive ? "text-[#18403C]" : "text-gray-600";
    }
    // On home page
    if (scrolled) {
      // When scrolled, dark text
      return isActive ? "text-[#18403C]" : "text-gray-600";
    }
    // When not scrolled on home page, white text
    return isActive ? "text-white" : "text-white/90";
  };

  // Determine button hover styles
  const getButtonHoverStyles = () => {
    if (!isHomePage) {
      return "hover:text-[#18403C] hover:bg-gray-100";
    }
    if (scrolled) {
      return "hover:text-[#18403C] hover:bg-gray-100";
    }
    return "hover:text-white hover:bg-white/10";
  };

  // Determine active indicator color
  const getActiveIndicatorColor = () => {
    if (!isHomePage) return "bg-[#18403C]";
    if (scrolled) return "bg-[#18403C]";
    return "bg-white";
  };

  // Determine active button background
  const getActiveButtonBg = () => {
    if (!isHomePage) return "bg-[#18403C]/10";
    if (scrolled) return "bg-[#18403C]/10";
    return "bg-white/20";
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 park py-2 ${getNavbarBg()}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick("home", "/")}>
            <div className="relative">
              <img src="/images/logo5.png" className="h-17 w-26" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = activeLink === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.path)}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group ${
                    isActive
                      ? getActiveButtonBg()
                      : getButtonHoverStyles()
                  } ${getTextColor(isActive)}`}
                >
                  <IconComponent className={`text-sm transition-all duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`} />
                  <span>{link.name}</span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full transition-all duration-300 ${getActiveIndicatorColor()}`}></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              !isHomePage || scrolled
                ? "text-[#18403C] hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <div className={`rounded-2xl p-4 ${
            !isHomePage || scrolled
              ? "bg-white shadow-lg"
              : "bg-white/10 backdrop-blur-lg"
          }`}>
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = activeLink === link.id;
              
              const getMobileTextColor = () => {
                if (!isHomePage || scrolled) {
                  return isActive ? "text-[#18403C]" : "text-gray-600";
                }
                return isActive ? "text-white" : "text-white/90";
              };
              
              const getMobileBgColor = () => {
                if (!isHomePage || scrolled) {
                  return isActive ? "bg-[#18403C]/10" : "hover:bg-gray-100";
                }
                return isActive ? "bg-white/20" : "hover:bg-white/10";
              };
              
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-300 ${getMobileBgColor()} ${getMobileTextColor()}`}
                >
                  <IconComponent className="text-lg" />
                  <span className="font-medium">{link.name}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 bg-[#18403C] rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;