import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";

const ContactUsSection = () => {
  return (
    <div
      id="services"
      className="bg-white flex items-center justify-center flex-col py-28 gap-16"
    >
      <div className="flex items-start justify-center md:justify-start flex-col gap-6 text-center md:pr-16 ">
        <h1 className="text-primary font-bold text-4xl md:text-5xl md:w-fit w-full">
          Let’s Get In Touch
        </h1>
        <h2 className="text-primary md:text-lg px-6 md:px-0">
          Reach out to us for inquiries, partnerships, or any assistance you
          need. We're here to help!
        </h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:h-[700px] w-full md:px-36 px-6">
        <div className="bg-primary w-full h-full rounded-b-2xl md:rounded-l-2xl md:rounded-br-none overflow-hidden flex flex-col py-8">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-6 md:pl-5">
            <div className="flex flex-col justify-center items-center gap-6 flex-1 px-4">
              <div className="flex flex-col gap-3 items-center">
                <CiLocationOn
                  className="text-white text-4xl border-4 rounded-full p-4"
                  size={100}
                />
                <h3 className="text-white text-2xl font-semibold">Location</h3>
              </div>
              <p className="text-white text-sm font-light text-center max-w-xl">
                Dubai, UAE
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 flex-1 px-4">
              <div className="flex flex-col gap-3 items-center justify-center">
                <CiPhone
                  className="text-white text-4xl border-4 rounded-full p-4"
                  size={100}
                />
                <h3 className="text-white text-2xl font-semibold">Phone</h3>
              </div>
              <ul className="text-white text-sm font-light list-none">
                <li>Tel: +961 1 111 111</li>
                <li>Tel: +961 2 222 222</li>
                <li>Fax: +961 3 333 333</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 flex-1 px-4 mt-12 md:mt-0">
            <div className="flex flex-col gap-3 items-center justify-center">
              <CiMail
                className="text-white text-4xl border-4 rounded-full p-4"
                size={100}
              />
              <h3 className="text-white text-2xl font-semibold">Email</h3>
            </div>
            <ul className="text-white text-sm font-light list-none md:mb-10 md:ml-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:sds@gmail.com"
                  className="text-white hover:underline"
                >
                  sds@gmail.com
                </a>
              </li>
              <li>
                Info:{" "}
                <a
                  href="mailto:info@adampharmlb.com"
                  className="text-white hover:underline"
                >
                  info@sds.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full bg-white p-8 rounded-t-2xl md:rounded-r-2xl md:rounded-tl-none shadow-lg">
          <h2 className="text-primary font-bold text-3xl mb-6">Contact Us</h2>
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
