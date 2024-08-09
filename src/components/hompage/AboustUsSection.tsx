import { FaChevronRight } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoBusinessOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";

const AboutUsSection = () => {
  return (
    <div
      id="about"
      className="bg-white flex items-center justify-center flex-col pt-28 gap-20"
    >
      <SectionHeader title="About Us" />

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
        <div className="flex flex-col mt-4">
          <div className="flex items-center gap-2">
            <IoBusinessOutline className="text-3xl text-black" />
            <p className="text-black md:text-lg font-light pr-2">
              Established in
            </p>
            <span className="text-4xl font-bold text-primary">2024</span>
          </div>
        </div>
        <div className="mt-6">
          <Link
            to="/about_us"
            className="inline-flex items-center h-fit px-8 py-3 bg-cpink text-white text-lg font-bold rounded-md shadow-md hover:bg-cpink/80 transition duration-300 ease-in-out"
          >
            More About Us
            <GrLinkNext className="inline-block ml-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
