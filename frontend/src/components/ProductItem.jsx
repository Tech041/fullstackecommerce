import  { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer border-2 shadow-lg"
      to={`/product/${id}`}
      onClick={() => scrollTo(0, 0)}
    >
      <div className="overflow-hidden flex justify-center">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm text-center font-bold text-orange-700">{name}</p>
      <div className="flex justify-between items-center px-4  pb-2">
        <p className="text-sm text-center font-medium">
          {currency}
          {price}
        </p>
        <p className="font-bold text-white px-2 rounded-md bg-pink-600 hover:bg-pink-400">Read more</p>
      </div>
    </Link>
  );
};

export default ProductItem;
