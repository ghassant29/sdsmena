import { allProducts } from "../../utils/constants";
import SectionHeader from "../SectionHeader";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <div
      id="#products"
      className="bg-white flex items-center justify-center flex-col py-28 gap-16"
    >
      <SectionHeader title="Products" />

      {/* Updated container to use grid */}
      <div className="px-6 md:px-24 w-full flex flex-col gap-6 items-center justify-center">
        {allProducts.map((product) => (
          <ProductCard
            key={product.productId}
            image={product.image}
            name={product.name}
            description={product.description}
            productId={product.productId}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
