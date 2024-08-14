import useAuthUser from "@/zustand/useAuthUser";
import useCart from "@/zustand/useCart";
import { useState } from "react";
import toast from "react-hot-toast";

const useClearCart = () => {
  const [loading, setLoading] = useState(false);
  const { setCart } = useCart();
  const { user } = useAuthUser();
  const clearCart = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/v1/cart/${user._id}/clear`, {
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
