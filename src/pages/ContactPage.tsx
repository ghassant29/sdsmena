import ContactUsSection from "../components/hompage/ContactUsSection";
import Page from "../layouts/page"; // Adjust the import path as needed

const ContactPage = () => {
  return (
    <Page title="Contact">
      <ContactUsSection title="Contact" className="py-16" />
    </Page>
  );
};

export default ContactPage;
