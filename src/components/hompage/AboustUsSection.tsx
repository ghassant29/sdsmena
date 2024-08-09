import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <div
      id="about"
      className="bg-white flex items-center justify-center flex-col md:flex-row py-28 px-12 md:px-0"
    >
      <div className="flex flex-col gap-4 max-w-3xl w-full">
        <div className="flex items-center">
          <FaChevronRight className="text-4xl font-bold text-black pt-1 pr-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            Meet SDS MEA
          </h2>
        </div>
        <p className="text-black md:text-lg font-light">
          SDS MEA was established in 2024 to serve clients in the Middle East
          and African markets with effective local support. Originating from the
          Swiss company SDS GmbH, a premium provider of new quality standards in
          the printing and packaging industry, SDS MEA benefits from a legacy of
          excellence. With over 400 customers globally, we are uniquely
          positioned to deliver outstanding solutions in this sector. SDS MEA
          specializes in cutting-edge problem-solving and innovation, including
          the development of the world’s best seals for chambered doctor blade
          systems. With extensive experience in Rotogravure and flexographic
          printing, combined with modern design and engineering expertise, we
          are dedicated to providing exceptional local support to our customers
          in the Middle East and Africa.
        </p>
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex items-center">
            <p className="text-black md:text-lg font-light">Established in</p>
            <span className="text-4xl font-bold text-primary pr-4">2024</span>
          </div>
        </div>
        <div className="mt-6">
          <Link
            to="/aboutus_page"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
