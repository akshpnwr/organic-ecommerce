import { Product } from "@/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UseGetProductsProps {
  limit?: number;
  sortField?: string;
  sortOrder?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
}

const useGetProducts = ({
  limit,
  sortField,
  sortOrder,
  category,
  minPrice,
  maxPrice,
  minRating,
}: UseGetProductsProps) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const queryParams = new URLSearchParams();
        if (limit) queryParams.append("limit", limit.toString());
        if (sortField) queryParams.append("sortField", sortField);
        if (sortOrder) queryParams.append("sortOrder", sortOrder);
        if (category) queryParams.append("category", category);
        if (minPrice) queryParams.append("minPrice", minPrice.toString());
        if (maxPrice) queryParams.append("maxPrice", maxPrice.toString());
        if (minRating) queryParams.append("minRating", minRating.toString());

        const res = await fetch(`/api/v1/products?${queryParams.toString()}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit, sortField, sortOrder, category, minPrice, maxPrice, minRating]);

  return { loading, products };
};

export default useGetProducts;
