import useCart from "@/zustand/useCart";
import { useState } from "react";
import toast from "react-hot-toast";

const useRemoveItemFromCart = () => {
  const [loading, setLoading] = useState(false);
  const { setCart } = useCart();

  const removeItem = async (userId: string, productId: string) => {
    if (userId === "") {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/v1/cart/${userId}/remove/${productId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const cart = await res.json();
      setCart(cart.items, cart.subTotal);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, removeItem };
};

export default useRemoveItemFromCart;
