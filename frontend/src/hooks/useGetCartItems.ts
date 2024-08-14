import useAuthUser from "@/zustand/useAuthUser";
import useCart from "@/zustand/useCart";
import { useEffect, useState } from "react";

const useGetCartItems = () => {
  const [loading, setLoading] = useState(true);
  const { setCart } = useCart();
  const { user } = useAuthUser();

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) return;

      try {
        const res = await fetch(`/api/v1/cart/${user._id}`);
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
  }, [setCart, setLoading, user]);

  return { loading };
};

export default useGetCartItems;
