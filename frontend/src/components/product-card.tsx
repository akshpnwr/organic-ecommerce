import React, { useState } from "react";
import cartGray from "../assets/images/add-to-cart.svg";
import cartGreen from "../assets/images/cart-green.svg";

import { Product } from "../types";
import { Link } from "react-router-dom";

interface ProductCardProps {
  direction?: "horizontal" | "vertical";
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, direction }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      to="/product"
      className={`flex ${
        direction == "vertical" ? "flex-row" : "flex-col"
      } whitespace-nowrap p-1 bg-white rounded-lg border border-solid border-neutral-200 cursor-pointer leading-[150%] md:max-w-[248px] hover:border-1 hover:border-green-400 hover:shadow-sm hover:shadow-green-500`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className={`${
          direction == "vertical" ? "w-1/3 mx-4 my-3" : "w-full"
        } aspect-[1.01]`}
      />
      <div className="flex justify-between">
        <div className="flex flex-col justify-center px-4 py-3.5 w-full">
          <p className="text-sm text-neutral-600">{product.name}</p>
          <p className="text-sm font-semibold text-zinc-900">{product.price}</p>
          <div className="flex">
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />{" "}
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />{" "}
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />{" "}
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />
          </div>
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
