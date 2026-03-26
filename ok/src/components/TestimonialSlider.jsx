import React, { useState, useEffect } from "react";
import { 
  FaStar, 
  FaStarHalfAlt, 
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
  FaLinkedinIn,
  FaTwitter,
  FaRegHeart,
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaQuoteRight
} from "react-icons/fa";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [liked, setLiked] = useState({});

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Mehta",
      position: "Project Director",
      company: "Tata Projects Ltd.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
      rating: 5,
      testimonial: "Crafx Services has been an exceptional partner in our infrastructure projects. Their expertise in procurement and contract management is remarkable. Highly recommended!",
      date: "March 2024",
      location: "Mumbai, India",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "VP Operations",
      company: "Reliance Infrastructure",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop",
      rating: 5,
      testimonial: "The team at Crafx went above and beyond to ensure timely delivery of our highway project. Their dedication and professionalism made all the difference. Truly a game-changer!",
      date: "February 2024",
      location: "Delhi NCR, India",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Head - Contracts",
      company: "L&T Construction",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
      rating: 5,
      testimonial: "Working with Crafx Services has been outstanding. Their team's deep understanding of supply chain management and contract execution is exceptional.",
      date: "January 2024",
      location: "Bangalore, India",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 4,
      name: "Neha Gupta",
      position: "Project Manager",
      company: "J Kumar Infraprojects",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      rating: 5,
      testimonial: "Crafx Services transformed our procurement process. Their expertise helped us reduce project delays by 40%. The quality of their consultancy is consistently excellent.",
      date: "December 2023",
      location: "Mumbai, India",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "CEO",
      company: "Infra Solutions Ltd",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 4.5,
      testimonial: "Working with Crafx Services has been a pleasure. They understood our project requirements and delivered exceptional support. Their team is responsive, professional, and results-driven.",
      date: "November 2023",
      location: "Delhi, India",
      linkedin: "#",
      twitter: "#"
    }
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400 text-xs sm:text-sm" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-xs sm:text-sm" />);
    }
    while (stars.length < 5) {
      stars.push(<FaStar key={stars.length} className="text-gray-300 text-xs sm:text-sm" />);
    }
    return stars;
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 park">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#18403C]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <FaQuoteLeft className="text-[#18403C] text-xs sm:text-sm" />
            <span className="text-[#18403C] font-medium text-xs sm:text-sm">Client Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18403C] mb-2 sm:mb-3 md:mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#18403C] to-[#2c6b64] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Real feedback from our valued partners in infrastructure development
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-all duration-500">
            <div className="flex flex-col md:grid md:grid-cols-5">
              {/* Left Section - Image & Info */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#18403C] to-[#2c6b64] p-6 sm:p-8 text-white">
                <div className="relative">
                  <img 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-xl mx-auto md:mx-0"
                  />
                  <div className="absolute -bottom-2 left-1/2 md:left-1/2 transform -translate-x-1/2 md:translate-x-0 bg-white rounded-full px-2 sm:px-3 py-0.5 sm:py-1 shadow-lg whitespace-nowrap">
                    <div className="flex gap-0.5">
                      {renderStars(currentTestimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-bold">{currentTestimonial.name}</h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">{currentTestimonial.position}</p>
                  <p className="text-white/70 text-xs sm:text-sm font-medium mt-1">{currentTestimonial.company}</p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <div className="flex items-center gap-1 text-white/70 text-[10px] sm:text-xs">
                      <FaCalendarAlt className="text-[10px] sm:text-xs" />
                      <span>{currentTestimonial.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/70 text-[10px] sm:text-xs">
                      <FaMapMarkerAlt className="text-[10px] sm:text-xs" />
                      <span>{currentTestimonial.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-3 justify-center md:justify-start mt-3 sm:mt-4">
                    <a href={currentTestimonial.linkedin} className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-all duration-300">
                      <FaLinkedinIn className="text-xs sm:text-sm" />
                    </a>
                    <a href={currentTestimonial.twitter} className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-all duration-300">
                      <FaTwitter className="text-xs sm:text-sm" />
                    </a>
                    <button 
                      onClick={() => handleLike(currentTestimonial.id)}
                      className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-all duration-300"
                    >
                      {liked[currentTestimonial.id] ? 
                        <FaHeart className="text-red-400 text-xs sm:text-sm" /> : 
                        <FaRegHeart className="text-xs sm:text-sm" />
                      }
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Section - Testimonial Content */}
              <div className="md:col-span-3 p-6 sm:p-8 md:p-10">
                <FaQuoteLeft className="text-[#18403C]/20 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4" />
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
                  "{currentTestimonial.testimonial}"
                </p>
                <FaQuoteRight className="text-[#18403C]/20 text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-4 ml-auto" />
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                  <div className="flex items-center gap-1">
                    <FaBriefcase className="text-[#18403C] text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm text-gray-500">{currentTestimonial.position}</span>
                  </div>
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-[10px] sm:text-sm ${
                        i < Math.floor(currentTestimonial.rating) 
                          ? "text-yellow-400" 
                          : i === Math.floor(currentTestimonial.rating) && currentTestimonial.rating % 1 !== 0
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 sm:-ml-4 md:-ml-6 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <FaArrowLeft className="text-[#18403C] text-xs sm:text-sm" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 sm:-mr-4 md:-mr-6 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <FaArrowRight className="text-[#18403C] text-xs sm:text-sm" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex 
                    ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#18403C]" 
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 hover:bg-[#18403C]/50"
                }`}
              />
            ))}
          </div>

         
        </div>

      </div>
    </div>
  );
};

export default TestimonialSlider;