import ReactPaginate from "react-paginate";
import ProductCard from "./product-card";
import { Product } from "../types";
import { useState } from "react";
import "../assets/styles/pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useGetProducts from "@/hooks/useGetProducts";

interface PaginatedItemsProps {
  itemsPerPage: number;
}

function Products({ currentProducts }: { currentProducts: Product[] }) {
  console.log(currentProducts);

  return (
    <>
      {currentProducts.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          direction="horizontal"
        />
      ))}
    </>
  );
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ itemsPerPage }) => {
  const { loading, products } = useGetProducts();
  const [itemOffset, setItemOffset] = useState(0);

  if (products === undefined || loading) {
    return <p>Loading...</p>;
  }

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
