import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";

import PaginatedProducts from "../components/PaginatedProducts";
import { Separator } from "@/components/UI/separator";
import useGetProducts from "@/hooks/useGetProducts";
import React, { useState } from "react";
import { RotateLoader } from "react-spinners";

const Shop: React.FC = () => {
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER);
  const [minRating, setMinRating] = useState(0);

  const { loading, products } = useGetProducts({
    sortField,
    sortOrder,
    category,
    minPrice,
    maxPrice,
    minRating,
  });

  const sortChangeHandler = (value: string) => {
    switch (value) {
      case "all":
        setSortField("");
        setSortOrder("asc");
        break;
      case "price-low-to-high":
        setSortField("price");
        setSortOrder("asc");
        break;
      case "price-high-to-low":
        setSortField("price");
        setSortOrder("desc");
        break;
      case "rating-low-to-high":
        setSortField("rating");
        setSortOrder("asc");
        break;
      case "rating-high-to-low":
        setSortField("rating");
        setSortOrder("desc");
        break;
      default:
        break;
    }
  };

  const categoryChangeHandler = (value: string) => {
    if (value === "all") {
      setCategory("");
      return;
    }

    setCategory(value);
  };

  const priceRangeChangeHandler = (value: string) => {
    switch (value) {
      case "all":
        setMinPrice(0);
        setMaxPrice(Number.MAX_SAFE_INTEGER);
        break;
      case "0-5":
        setMinPrice(0);
        setMaxPrice(5);
        break;
      case "5-10":
        setMinPrice(5);
        setMaxPrice(10);
        break;
      case "10-20":
        setMinPrice(10);
        setMaxPrice(20);
        break;
      case "20-above":
        setMinPrice(20);
        setMaxPrice(Number.MAX_SAFE_INTEGER);
        break;
      default:
        break;
    }
  };

  const ratingChangeHandler = (value: string) => {
    if (value === "0") {
      setMinRating(0);
      return;
    }
    setMinRating(parseInt(value));
  };

  if (products === undefined || loading) {
    return (
      <div className="text-center my-40">
        <RotateLoader color="#16a34a" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl px-2 my-6 mx-4 md:mx-auto">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between mb-10">
        <div className="flex justify-between md:gap-6">
          <Select onValueChange={categoryChangeHandler} value={category}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="fruit">Fruits</SelectItem>
              <SelectItem value="vegetable">Vegetables</SelectItem>
              <SelectItem value="beverage">Beverages</SelectItem>
              <SelectItem value="dairy">Dairy</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={priceRangeChangeHandler}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="0-5">0 - 5</SelectItem>
              <SelectItem value="5-10">5 - 10</SelectItem>
              <SelectItem value="10-20">10 - 20</SelectItem>
              <SelectItem value="20-above">20 - above</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator className="md:h-2 md:hidden" />
        <div className="flex justify-between md:gap-6">
          <Select onValueChange={sortChangeHandler}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="rating-low-to-high">
                Rating: low to high
              </SelectItem>
              <SelectItem value="rating-high-to-low">
                Rating: high to low
              </SelectItem>
              <SelectItem value="price-low-to-high">
                Price: low to high
              </SelectItem>
              <SelectItem value="price-high-to-low">
                Price: high to low
              </SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={ratingChangeHandler}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">All</SelectItem>
              <SelectItem value="1">1 & Above</SelectItem>
              <SelectItem value="2">2 & Above</SelectItem>
              <SelectItem value="3">3 & Above</SelectItem>
              <SelectItem value="4">4 & Above</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {products.length === 0 && (
        <p className="text-2xl font-medium text-center text-gray-700">
          No products found!
        </p>
      )}
      <PaginatedProducts itemsPerPage={10} products={products} />
    </div>
  );
};

export default Shop;
