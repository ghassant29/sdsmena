import { useState } from "react";
import { featuredProducts, allProducts } from "../../utils/constants";
import SectionHeader from "../SectionHeader";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const productsToShow = showAllProducts ? allProducts : featuredProducts;

  const handleViewAllProducts = () => {
    setShowAllProducts(true);
  };

  return (
    <div
      id="products"
      className="bg-white flex items-center justify-center flex-col py-28 gap-16"
    >
      <SectionHeader title="Products" />

      <div className="px-6 md:px-24 w-full flex flex-col gap-6 items-center justify-center">
        {productsToShow.map((product) => (
          <ProductCard
            key={product.productId}
            image={product.image}
            name={product.name}
            description={product.description}
            productId={product.productId}
          />
        ))}
      </div>

      {!showAllProducts && (
        <button
          onClick={handleViewAllProducts}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          View All Products
        </button>
      )}
    </div>
  );
};

export default ProductsSection;
