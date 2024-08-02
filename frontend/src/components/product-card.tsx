import React, { useState } from "react";
import cartGray from "../assets/images/add-to-cart.svg";
import cartGreen from "../assets/images/cart-green.svg";

import { Product } from "../types";
import { Link } from "react-router-dom";
import Rating from "./UI/rating";

interface ProductCardProps {
  direction?: "horizontal" | "vertical";
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, direction }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      to={`/products/${product._id}`}
      className={`flex ${
        direction == "vertical" ? "flex-row" : "flex-col"
      } whitespace-nowrap w-full bg-white rounded-md border border-solid border-neutral-300 cursor-pointer leading-[150%] hover:border-1 hover:border-green-400 hover:shadow-sm hover:shadow-green-500`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={product.img}
        alt={product.name}
        className={`${
          direction == "vertical" ? "w-1/3 rounded-l-md" : "w-full rounded-t-md"
        } aspect-[1.01] object-cover object-center`}
      />
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 justify-center px-4 py-3.5 w-full">
          <p className="text-sm text-neutral-600">{product.name}</p>
          <p className="text-sm font-semibold text-zinc-900">
            ${product.price}
          </p>
          <Rating
            className="flex"
            count={5}
            value={product.rating}
            edit={false}
            size={20}
          />
        </div>
        {direction == "horizontal" && (
          <div className="flex mr-3 w-1/4">
            {isHovering ? (
              <img src={cartGreen} alt="" />
            ) : (
              <img src={cartGray} alt="" />
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
