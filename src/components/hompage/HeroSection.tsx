import Typewriter from "typewriter-effect";

const strings = ["Seals for chambered doctor blade systems"];

const HeroSection = () => {
  return (
    <div
      id="#hero"
      className="w-full md:h-full bg-[url('/slideshow_background.jpg')] bg-cover bg-center pt-20 md:pt-0 h-[300px]"
    >
      <div className="w-full h-full flex items-start md:items-center justify-center px-6 md:px-0">
        <div className="max-w-2xl text-center">
          <Typewriter
            component={"p"}
            options={{
              delay: 55,
              deleteSpeed: 30,
              strings: strings,
              autoStart: true,
              loop: true,
              wrapperClassName:
                "text-[#1F1F1F] font-bold text-3xl md:text-5xl  text-center leading-tight [text-shadow:_1px_2px_2px_#FFF202]",
              cursorClassName:
                "Typewriter__cursor text-secondary font-bold text-3xl md:text-5xl max-w-2xl text-center leading-tight [text-shadow:_0_2px_3px_rgb(0_0_0_/_40%)] animate-blink",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
