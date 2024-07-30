import { FaChevronRight } from "react-icons/fa";

const AboustUsSection = () => {
  return (
    <div
      id="#about"
      className="bg-secondary flex items-center justify-center flex-col md:flex-row py-28 gap-20 md:pl-6 px-12 md:px-0"
    >
      <img
        src="/images/about-us.png"
        alt="About Us"
        className="w-96 rounded-xl md:-rotate-6 border-8"
      />
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="flex items-center">
          <FaChevronRight className="text-4xl font-bold text-white pt-1 pr-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Meet SDS MEA
          </h2>
        </div>
        <p className="text-white md:text-lg font-light">
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
      </div>
    </div>
  );
};

export default AboustUsSection;
