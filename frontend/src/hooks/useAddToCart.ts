import { Product } from "@/types";
import useAuthUser from "@/zustand/useAuthUser";
import useCart from "@/zustand/useCart";
import { useState } from "react";
import toast from "react-hot-toast";

const useAddToCart = () => {
  const [loading, setLoading] = useState(false);
  const { addToCart: add } = useCart();
  const { user } = useAuthUser();

  const addToCart = async (product: Product, quantity: number) => {
    if (!user) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/v1/cart/${user._id}/add`, {
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
