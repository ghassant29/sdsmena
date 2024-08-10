import { Link } from "react-router-dom";
import ContactUsSection from "../components/hompage/ContactUsSection";
import SectionHeader from "../components/SectionHeader";
import Page from "../layouts/page"; // Adjust the import path as needed
import { printers } from "../utils/products/constants";

const AllProducts = () => {
  return (
    <Page title="Products">
      <div className="w-full bg-white flex items-center justify-center pt-20 pb-16 flex-col gap-8">
        <SectionHeader title="All Products" />

        <span>Print optimization and Reduce Production costs!</span>
      </div>

      <div className="relative mx-auto w-full md:w-2/3 md:h-fit bg-[#f5f5f5] flex flex-col items-center justify-center pb-10 md:pb-0 rounded-lg">
        <div className=" w-full h-fit flex items-center justify-center gap-6 md:p-10">
          <div className="md:w-1/2 md:max-w-lg w-full px-4 md:px-0">
            <h1 className="text-black font-medium text-md md:text-2xl leading-tight">
              SDS Print Services Ltd offers you all kinds of top-quality product
              solutions for Rotogravure and flexographic printing. Our focus is
              on optimizing your print production and reducing costs.
            </h1>
          </div>
          <div
            className="md:w-1/2 w-full h-[220px] rounded-lg"
            style={{
              backgroundImage: `url(/products/category/plate_mounting_tape.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "bottom"
            }}
          ></div>
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-center pt-20 pb-16 flex-col gap-8">
        {/* Printer */}

        <div className="w-2/3 flex items-start justify-center flex-col gap-8">
          <div className="flex items-start justify-center flex-col gap-1 text-center">
            <span className="text-black font-medium text-md md:text-2xl leading-tight text-left">
              Printers
            </span>

            <div
              className="w-10 h-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)"
              }}
            />
          </div>
          <div className="w-full flex items-center justify-start gap-10 flex-wrap">
            {printers.map((printer) => (
              <Link
                key={printer.id}
                to={`/category/${printer.id}`}
                className="w-fit max-w-[350px] bg-[#f5f5f5] rounded-lg flex items-center justify-center flex-col gap-4 border overflow-hidden hover:shadow-sm hover:border-cblue transition-all"
              >
                <img
                  src={printer.image}
                  alt={printer.name}
                  className="w-full object-cover max-h-[230px] min-h-[230px]"
                />
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <h1 className="text-black font-medium text-md md:text-2xl leading-tight">
                    {printer.name}
                  </h1>
                  <span className="text-black font-normal text-sm md:text-md leading-tight text-center">
                    {printer.subTitle}
                  </span>
                </div>

                <span className="font-medium text-sm md:text-md leading-tight p-4 bg-cblue text-white w-full text-center">
                  View Products
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-2/3 flex items-start justify-center flex-col gap-8">
          <div className="flex items-start justify-center flex-col gap-1 text-center">
            <span className="text-black font-medium text-md md:text-2xl leading-tight text-left">
              Various products
            </span>

            <div
              className="w-10 h-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)"
              }}
            />
          </div>
          <div className="w-full flex items-center justify-start gap-10 flex-wrap">
            {printers.map((printer) => (
              <Link
                key={printer.id}
                to={`/category/${printer.id}`}
                className="w-fit max-w-[350px] bg-[#f5f5f5] rounded-lg flex items-center justify-center flex-col gap-4 border overflow-hidden hover:shadow-sm hover:border-cblue transition-all"
              >
                <img
                  src={printer.image}
                  alt={printer.name}
                  className="w-full object-cover max-h-[230px] min-h-[230px]"
                />
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <h1 className="text-black font-medium text-md md:text-2xl leading-tight">
                    {printer.name}
                  </h1>
                  <span className="text-black font-normal text-sm md:text-md leading-tight text-center">
                    {printer.subTitle}
                  </span>
                </div>

                <span className="font-medium text-sm md:text-md leading-tight p-4 bg-cblue text-white w-full text-center">
                  View Products
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ContactUsSection />
    </Page>
  );
};

export default AllProducts;
