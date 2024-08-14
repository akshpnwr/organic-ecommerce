import { Order } from "@/types";
import useAuthUser from "@/zustand/useAuthUser";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetOrders = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuthUser();
  const [orders, setOrders] = useState<Order[]>();

  useEffect(() => {
    if (!user) return;
    const getOrders = async () => {
      if (user === null) return;

      setLoading(true);
      try {
        const res = await fetch(`/api/v1/orders/${user._id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const orders = await res.json();
        setOrders(orders);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, [user]);

  return { loading, orders };
};

export default useGetOrders;
