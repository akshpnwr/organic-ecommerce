import { CartItemType, CartState } from "@/types";
import { create } from "zustand";
import {
  addToCart,
  updateQuantity,
  removeFromCart,
  fetchAndSetCart,
} from "./cartFunctions";

const useCart = create<CartState>((set) => ({
  items: [],
  subTotal: 0,
  fetchAndSetCart: async (userId: string) => {
    await fetchAndSetCart(userId, (newState) => set(() => newState));
  },
  addToCart: async (item: CartItemType, userId: string) => {
    try {
      const res = await fetch(`/api/v1/cart/${userId}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: item.product._id,
          quantity: item.quantity,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
    set((state) => addToCart(state, item));
  },
  removeFromCart: (id: string) => set((state) => removeFromCart(state, id)),
  updateQuantity: (id: string, quantity: number) =>
    set((state) => updateQuantity(state, id, quantity)),
  clearCart: () => set({ items: [] }),
}));

export default useCart;
