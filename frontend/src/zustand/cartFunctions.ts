import { CartItemType, CartState } from "@/types";

export const fetchAndSetCart = async (
  userId: string,
  // eslint-disable-next-line no-unused-vars
  setState: (newState: Partial<CartState>) => void
) => {
  try {
    const res = await fetch(`/api/v1/cart/${userId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch cart data");
    }
    const data = await res.json();

    setState({
      items: data.items,
      subTotal: data.subTotal,
    });
  } catch (error) {
    console.error("Failed to fetch cart data", error);
  }
};

export const addToCart = (state: CartState, item: CartItemType) => {
  const updatedCartItems = [...state.items, item];
  const updatedSubTotal = updatedCartItems.reduce(
    (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
    0
  );

  return {
    items: updatedCartItems,
    subTotal: updatedSubTotal,
  };
};

export const removeFromCart = (state: CartState, id: string) => {
  const updatedCartItems = state.items.filter(
    (item) => item.product._id !== id
  );
  const updatedSubTotal = updatedCartItems.reduce(
    (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
    0
  );

  return {
    items: updatedCartItems,
    subTotal: updatedSubTotal,
  };
};

export const updateQuantity = (
  state: CartState,
  id: string,
  quantity: number
) => {
  const updatedCartItems = state.items.map((item) =>
    item.product._id === id ? { ...item, quantity } : item
  );
  const updatedSubTotal = updatedCartItems.reduce(
    (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
    0
  );

  return {
    items: updatedCartItems,
    subTotal: updatedSubTotal,
  };
};
