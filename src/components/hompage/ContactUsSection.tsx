import SectionHeader from "../SectionHeader";
import ContactForm from "./ContactForm";

const ContactUsSection = () => {
  return (
    <div
      id="contact"
      className="bg-white flex items-center justify-center flex-col py-28 gap-16"
    >
      <SectionHeader title="Contact Us" />
      <ContactForm />
    </div>
  );
};

export default ContactUsSection;
