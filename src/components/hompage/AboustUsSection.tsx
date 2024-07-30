import { FaChevronRight } from "react-icons/fa";

const AboustUsSection = () => {
  return (
    <div
      id="about"
      className="bg-white flex items-center justify-center flex-col md:flex-row py-28 gap-20 md:pl-6 px-12 md:px-0"
    >
      <img
        src="/images/about-us.png"
        alt="About Us"
        className="w-96 rounded-xl md:-rotate-6 border-8"
      />
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="flex items-center">
          <FaChevronRight className="text-4xl font-bold text-black pt-1 pr-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            Meet SDS MEA
          </h2>
        </div>
        <p className="text-black md:text-lg font-light">
          Founded in 2012 in the Swiss community of Pfäffikon, SDS GmbH is still
          committed to setting new quality standards in the printing and
          packaging industry, saving its more than 400 customer companies
          worldwide time, money and nerves. As an experienced team of problem
          solvers and innovators, SDS GmbH has remained committed to the vision
          of developing the world’s best seals for chambered doctor blade
          systems. No avenue remains unexplored, no material untouched and no
          testing phase too costly to ensure that this claim is met. The focus
          of all our considerations: the customer. To achieve this, we combine
          sound, technical knowledge from many years of experience in
          Rotogravure and flexographic printing with modern design and
          engineering expertise.
        </p>
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex items-center">
            <span className="text-4xl font-bold text-primary pr-4">400</span>
            <p className="text-black md:text-lg font-light">
              worldwide client companies
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl font-bold text-primary pr-4">2012</span>
            <p className="text-black md:text-lg font-light">
              founded in the Swiss municipality of Pfäffikon
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="/images/3m-logo.png"
              alt="3M Logo"
              className="w-16 h-16 mr-4"
            />
            <p className="text-black md:text-lg font-light">
              Authorized Specialist Dealer
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            More About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboustUsSection;
