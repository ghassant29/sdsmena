import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: "3M Plate Mounting Tapes - Perfection in Plate Mounting!",
      image: "/path-to-image1.jpg",
      link: "/products",
    },
    {
      text: "Seals for chambered doctor blade systems",
      image: "/path-to-image2.jpg",
      link: "/products",
    },
    {
      text: "High-quality doctor blades for Rotogravure and flexographic printing",
      image: "/path-to-image3.jpg",
      link: "/products",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full h-screen flex pt-16">
      {" "}
      {/* Added pt-16 to account for navbar height */}
      {/* Left Part - Text Section */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center p-10">
        <div className="max-w-lg text-left">
          <h1 className="text-black font-bold text-4xl md:text-5xl leading-tight">
            {slides[currentSlide].text}
          </h1>
          <a
            href={slides[currentSlide].link}
            className="inline-block mt-8 px-8 py-3 bg-yellow-500 text-black text-lg font-bold rounded-md shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out"
          >
            Go To The Products
          </a>
        </div>
      </div>
      {/* Right Part - Image Section */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
        <button
          onClick={prevSlide}
          className="p-3 text-black bg-white bg-opacity-90 rounded-full shadow-md focus:outline-none"
        >
          <FaChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
        <button
          onClick={nextSlide}
          className="p-3 text-black bg-white bg-opacity-90 rounded-full shadow-md focus:outline-none"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
