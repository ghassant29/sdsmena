import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const strings = [
    "Seals for chambered doctor blade systems",
    "High-quality doctor blades for Rotogravure and flexographic printing",
    "3M Plate Mounting Tapes - Perfection in Plate Mounting!",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Cycle through 3 slides
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const backgroundImages = [
    "/slideshow_background.jpg",
    "/background2.jpg",
    "/background3.jpg",
  ];

  const textShadows = [
    "1px 2px 2px #FFF202",
    "1px 2px 2px #FF5733",
    "1px 2px 2px #EC0C8C",
  ];

  return (
    <div
      id="hero"
      className="w-full md:h-full pt-20 md:pt-0 h-[300px] transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImages[currentSlide]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex items-start md:items-center justify-center px-6 md:px-0">
        <div
          className="max-w-2xl text-center"
          style={{ textShadow: textShadows[currentSlide] }}
        >
          <Typewriter
            component={"p"}
            options={{
              delay: 55,
              deleteSpeed: 30,
              strings: [strings[currentSlide]],
              autoStart: true,
              loop: true,
              wrapperClassName: `text-[#1F1F1F] font-bold text-3xl md:text-5xl text-center leading-tight`,
              cursorClassName: `Typewriter__cursor text-secondary font-bold text-3xl md:text-5xl max-w-2xl text-center leading-tight animate-blink`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
