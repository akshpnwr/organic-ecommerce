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
  const { loading, products } = useGetProducts({
    sortField,
    sortOrder,
  });

  if (products === undefined || loading) {
    return (
      <div className="text-center my-40">
        <RotateLoader color="#16a34a" />
      </div>
    );
  }

  const sortChangeHandler = (value: string) => {
    if (value === "all") {
      setSortField("");
    }
    if (value === "price-low-to-high") {
      setSortField("price");
      setSortOrder("asc");
    }
    if (value === "price-high-to-low") {
      setSortField("price");
      setSortOrder("desc");
    }
    if (value === "rating-low-to-high") {
      setSortField("rating");
      setSortOrder("asc");
    }
    if (value === "rating-high-to-low") {
      setSortField("rating");
      setSortOrder("desc");
    }
  };

  return (
    <div className="max-w-6xl px-2 my-6 mx-4 md:mx-auto">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between mb-10">
        <div className="flex justify-between md:gap-6">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="fruits">Fruits</SelectItem>
              <SelectItem value="vegetables">Vegetables</SelectItem>
              <SelectItem value="spices">Spices</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="0">0 - 1000</SelectItem>
              <SelectItem value="1000">1000 - 2000</SelectItem>
              <SelectItem value="2000">2000 & above</SelectItem>
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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="1">Above 1 star</SelectItem>
              <SelectItem value="2">Above 2 star</SelectItem>
              <SelectItem value="3">Above 3 star</SelectItem>
              <SelectItem value="4">Above 4 star</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <PaginatedProducts itemsPerPage={10} products={products} />
    </div>
  );
};

export default Shop;
