import { FaChevronRight } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="about-us-page bg-secondary flex flex-col items-center justify-center py-28 gap-20 px-12 md:px-0">
      <section className="intro-section bg-white flex flex-col md:flex-row items-center justify-center md:justify-between p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <img
          src="/images/about-us.png"
          alt="About Us"
          className="w-96 rounded-xl md:-rotate-6 border-8"
        />
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex items-center">
            <FaChevronRight className="text-4xl font-bold text-primary pt-1 pr-4" />
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              SDS Ltd.
            </h2>
          </div>
          <p className="text-primary md:text-lg font-light">
            Founded in 2012 in the Swiss community of Pfäffikon, SDS GmbH is
            still committed to setting new quality standards in the printing and
            packaging industry, saving its more than 400 customer companies
            worldwide time, money and nerves. As an experienced team of problem
            solvers and innovators, SDS GmbH has remained committed to the
            vision of developing the world’s best seals for chambered doctor
            blade systems. No avenue remains unexplored, no material untouched
            and no testing phase too costly to ensure that this claim is met.
            The focus of all our considerations: the customer. To achieve this,
            we combine sound, technical knowledge from many years of experience
            in Rotogravure and flexographic printing with modern design and
            engineering expertise.
          </p>
        </div>
      </section>

      <section className="statistics-section bg-white flex flex-wrap justify-around p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <div className="stat-item flex flex-col items-center justify-center p-4">
          <h3 className="text-4xl font-bold text-primary">400</h3>
          <p className="text-primary md:text-lg">
            worldwide customer companies
          </p>
        </div>
        <div className="stat-item flex flex-col items-center justify-center p-4">
          <h3 className="text-4xl font-bold text-primary">2012</h3>
          <p className="text-primary md:text-lg">
            founded in the Swiss community of Pfäffikon
          </p>
        </div>
        <div className="stat-item flex flex-col items-center justify-center p-4">
          <h3 className="text-4xl font-bold text-primary">3M</h3>
          <p className="text-primary md:text-lg">
            Authorized Specialist dealer
          </p>
        </div>
      </section>

      <section className="testimonials-section bg-white flex flex-wrap justify-around p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <div className="testimonial-item flex flex-col items-center justify-center p-4">
          <p className="text-primary md:text-lg font-light italic">
            "I can only recommend SDS GmbH. The products are high quality and
            above all durable. Communication was quick and easy. I particularly
            appreciated the technical understanding in the consultation."
          </p>
          <h4 className="text-primary md:text-lg font-bold mt-2">
            Viktor Bratkovics, Production Manager Foils + Printing Lang GmbH
          </h4>
        </div>
        <div className="testimonial-item flex flex-col items-center justify-center p-4">
          <p className="text-primary md:text-lg font-light italic">
            "I appreciate the consulting competence of SDS GmbH. You quickly
            notice that you are dealing with people from the trade here. The
            products ordered are of high quality and the delivery was also
            fast."
          </p>
          <h4 className="text-primary md:text-lg font-bold mt-2">
            Alexander Appoew, Printing Shop Manager alesco Foils GmbH
          </h4>
        </div>
      </section>

      <section className="contact-section bg-primary flex flex-col md:flex-row items-center justify-around p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <iframe
          className="w-full h-64 md:w-1/2 md:h-full rounded-lg"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D8%A2%D8%AF%D9%85%20%D9%81%D8%B1%D9%85%D8%B3%D8%AA%D9%83%D9%84%20%D8%B3%D8%B1%D9%81%D8%B3%D8%B2+(Adam%20Pharmaceuticals%20Services)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <div className="flex flex-col gap-4 md:w-1/2 p-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Contact us
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-lg shadow-inner focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg shadow-inner focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company"
              className="p-2 rounded-lg shadow-inner focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="p-2 rounded-lg shadow-inner focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
