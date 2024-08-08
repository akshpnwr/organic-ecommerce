import { CartItemType, CartState } from "@/types";
import { create } from "zustand";
import { addToCart, updateQuantity, removeFromCart } from "./cartFunctions";

const useCart = create<CartState>((set) => ({
  cart: [],
  subTotal: 0,
  addToCart: (item: CartItemType) => set((state) => addToCart(state, item)),
  removeFromCart: (id: string) => set((state) => removeFromCart(state, id)),
  updateQuantity: (id: string, quantity: number) =>
    set((state) => updateQuantity(state, id, quantity)),
  clearCart: () => set({ cart: [] }),
}));
export default useCart;
