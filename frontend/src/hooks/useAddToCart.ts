import { Product } from "@/types";
import useCart from "@/zustand/useCart";
import { useState } from "react";
import toast from "react-hot-toast";

const useAddToCart = (userId: string) => {
  const [loading, setLoading] = useState(false);
  const { addToCart: add } = useCart();

  const addToCart = async (product: Product, quantity: number) => {
    if (userId === "") {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/v1/cart/${userId}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product._id, quantity }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch cart data");
      }
      add({ product, quantity: 1 });
      toast.success(`${product.name} added to cart`);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, addToCart };
};

export default useAddToCart;
