import ReactPaginate from "react-paginate";
import ProductCard from "./product-card";
import { Product } from "../types";
import { useState } from "react";
import appleImg from "../assets/images/products/apple.png";
import starYellowImg from "../assets/images/star-yellow.svg";
import "../assets/styles/pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products: Product[] = [
  {
    id: "1",
    name: "Green",
    price: "$14.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "2",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "3",
    name: "Green",
    price: "$14.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "4",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "5",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },

  {
    id: "6",
    name: "Green",
    price: "$14.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "7",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "8",
    name: "Green",
    price: "$14.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "9",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "10",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },

  {
    id: "11",
    name: "Green",
    price: "$14.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "12",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "13",
    name: "Green",
    price: "$14.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "14",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
  {
    id: "15",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: starYellowImg,
  },
];

interface PaginatedItemsProps {
  itemsPerPage: number;
}

function Products({ currentProducts }: { currentProducts: Product[] }) {
  return (
    <>
      {currentProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          direction="horizontal"
        />
      ))}
    </>
  );
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentProducts = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10">
        <Products currentProducts={currentProducts} />
      </div>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<ChevronLeft strokeWidth="1.5px" />}
        nextLabel={<ChevronRight strokeWidth="1.5px" />}
        renderOnZeroPageCount={null}
        className="flex w-full gap-2 justify-center mt-10 pagination"
      />
    </>
  );
};

export default PaginatedItems;
