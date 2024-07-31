import Page from "../layouts/page"; // Adjust the import path as needed
import ContactUsSection from "../components/hompage/ContactUsSection";

const products = [
  {
    category: "Flexography",
    image: "./flexography.jpeg", // replace with actual image path
    link: "#flexography",
  },
  {
    category: "Rotogravure",
    image: "./rotogravure.jpeg", // replace with actual image path
    link: "#rotogravure",
  },
  {
    category: "Offset Printing",
    image: "./offsetprinting.webp", // replace with actual image path
    link: "#offset-printing",
  },
];

const variousProducts = [
  {
    name: "Anilox Cleaner M",
    image: "/images/anilox-cleaner.png", // replace with actual image path
    link: "#anilox-cleaner",
  },
  {
    name: "3M Plate Mounting Tape E1520",
    image: "/images/plate-mounting-tape.png", // replace with actual image path
    link: "#plate-mounting-tape",
  },
  {
    name: "Doctor Blade Gold",
    image: "/images/doctor-blade.png", // replace with actual image path
    link: "#doctor-blade",
  },
];

const AllProducts = () => {
  return (
    <Page onlyHome title="Products">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <p className="mb-8">
          Print optimization and Reduce Production costs! SDS Print Services Ltd
          offers you all kinds of top-quality product solutions for Rotogravure
          and flexographic printing. Our focus is on optimizing your print
          production and reducing costs. We are happy to advise and support you
          with your questions and special requirements. Just give us a call. We
          look forward to hearing from you!
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mb-8">
          Inquiries
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.category}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{product.category}</h2>
                <a href={product.link} className="text-blue-500">
                  More Information
                </a>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-8">Various products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {variousProducts.map((product, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <a href={product.link} className="text-blue-500">
                  More Information
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUsSection />
    </Page>
  );
};

export default AllProducts;
