import { Product } from "@/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/v1/products");
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
  }, []);

  return { loading, products };
};

export default useGetProducts;
