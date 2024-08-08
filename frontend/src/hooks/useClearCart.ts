import useCart from "@/zustand/useCart";
import { useState } from "react";
import toast from "react-hot-toast";

const useClearCart = (userId: string) => {
  const [loading, setLoading] = useState(false);
  const { setCart } = useCart();

  const clearCart = async () => {
    if (userId === "") {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/v1/cart/${userId}/clear`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch cart data");
      }
      setCart([], 0);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, clearCart };
};

export default useClearCart;
