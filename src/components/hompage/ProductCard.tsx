import { Link } from "react-router-dom";

type Props = {
  productId: string;
  name: string;
  description: string;
  image: string;
};

const ProductCard = ({ name, description, image, productId }: Props) => {
  return (
    <Link
      to={`/product/${productId}`}
      className="flex flex-col items-center justify-center bg-white border rounded-xl  pb-6 overflow-hidden transition-all hover:shadow-lg duration-300"
    >
      <img src={image} alt={name} className="w-full object-contain" />
      <h3 className="text-primary text-xl font-semibold mt-4">{name}</h3>
      <p className="text-primary text-center mt-2">{description}</p>
    </Link>
  );
};

export default ProductCard;
