import useAuthUser from "@/zustand/useAuthUser";
import { useState } from "react";
import toast from "react-hot-toast";
import useClearCart from "./useClearCart";

type OrderFormDataType = {
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
};

const useOrder = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuthUser();
  const { clearCart } = useClearCart();

  const order = async (formData: OrderFormDataType) => {
    if (user === null) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/v1/orders/${user._id}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch cart data");
      }
      toast.success("Order placed successfully");
      await clearCart();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, order };
};

export default useOrder;
