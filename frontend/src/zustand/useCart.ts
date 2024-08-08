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
  addToCart: (item: CartItemType) => {
    set((state) => addToCart(state, item));
  },
  removeFromCart: (id: string) => set((state) => removeFromCart(state, id)),
  updateQuantity: (id: string, quantity: number) =>
    set((state) => updateQuantity(state, id, quantity)),
  clearCart: () => set({ items: [], subTotal: 0 }),
  setCart: (items: CartItemType[], subTotal: number) =>
    set({ items, subTotal }),
}));

export default useCart;
