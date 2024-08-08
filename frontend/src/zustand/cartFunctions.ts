import { CartItemType, CartState } from "@/types";

export const addToCart = (state: CartState, item: CartItemType) => {
  const updatedCart = [...state.cart, item];
  const updatedSubTotal = updatedCart.reduce(
    (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
    0
  );

  return {
    cart: updatedCart,
    subTotal: updatedSubTotal,
  };
};

export const removeFromCart = (state: CartState, id: string) => {
  const updatedCart = state.cart.filter((item) => item.product._id !== id);
  const updatedSubTotal = updatedCart.reduce(
    (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
    0
  );

  return {
    cart: updatedCart,
    subTotal: updatedSubTotal,
  };
};

export const updateQuantity = (
  state: CartState,
  id: string,
  quantity: number
) => {
  const updatedCart = state.cart.map((item) =>
    item.product._id === id ? { ...item, quantity } : item
  );
  const updatedSubTotal = updatedCart.reduce(
    (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
    0
  );

  return {
    cart: updatedCart,
    subTotal: updatedSubTotal,
  };
};
