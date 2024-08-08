import useCart from "@/zustand/useCart";
import { useEffect, useState } from "react";

const useGetCartItems = (userId: string) => {
  const [loading, setLoading] = useState(true);
  const { setCart } = useCart();

  useEffect(() => {
    const fetchCartItems = async () => {
      if (userId === "") {
        return;
      }
      try {
        const res = await fetch(`/api/v1/cart/${userId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await res.json();

        setCart(data.items, data.subTotal);
      } catch (error) {
        console.error("Failed to fetch cart data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCartItems();
  }, [setCart, setLoading, userId]);

  return { loading };
};

export default useGetCartItems;
