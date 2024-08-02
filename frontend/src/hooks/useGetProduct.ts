import { Product } from "@/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetProduct = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/products/${id}`);
        const data = await res.json();
        setProduct(data.product);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
  return { loading, product };
};

export default useGetProduct;
