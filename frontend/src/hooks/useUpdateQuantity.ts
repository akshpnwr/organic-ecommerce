import useAuthUser from "@/zustand/useAuthUser";
import useCart from "@/zustand/useCart";
import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateQuantity = () => {
  const [loading, setLoading] = useState(false);
  const { setCart } = useCart();
  const { user } = useAuthUser();

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!user) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/v1/cart/${user._id}/update/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
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

  return { loading, updateQuantity };
};

export default useUpdateQuantity;
