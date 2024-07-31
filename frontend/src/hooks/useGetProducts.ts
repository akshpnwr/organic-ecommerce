import { Product } from "@/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UseGetProductsProps {
  limit?: number;
  sortField?: string;
  sortOrder?: string;
}

const useGetProducts = ({
  limit,
  sortField,
  sortOrder,
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
  }, [limit, sortField, sortOrder]);

  return { loading, products };
};

export default useGetProducts;
