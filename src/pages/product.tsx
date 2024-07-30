import "react-photo-view/dist/react-photo-view.css";
import { useParams } from "react-router-dom";
import Page from "../layouts/page";
import { productsDetails } from "../utils/constants";
import NotFoundPage from "./not_found";

const ProductPage = () => {
  const { productId } = useParams();
  const product = productsDetails.find(
    (product) => product.productId === productId
  );

  if (!productId || !product) return <NotFoundPage />;

  return (
    <Page onlyHome title={product.name}>
      <div className="md:mt-36 flex items-center justify-center bg-secondary w-full py-8">
        <h1 className="text-4xl font-bold text-center text-white md:ml-16">
          {product.name}
        </h1>
      </div>
      <div className="hidden md:block h-[50px]"></div>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 h-fit">
        <div className="bg-white  overflow-hidden rounded-xl flex flex-col items-center h-fit">
          <div className="w-full h-full ">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain sm:max-h-72 rounded-lg"
            />
          </div>
          <div className="border-gray-200 w-full text-center py-4 px-4">
            <p
              className="mt-1 text-xl font-semibold text-gray-900 leading-loose"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </div>
      </div>

      <div className="h-[100px]"></div>
    </Page>
  );
};

export default ProductPage;
