export interface Product {
  _id: string;
  name: string;
  price: number;
  img: string;
  rating: number;
  category: string;
}

export interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  profilePicture: string;
}

export interface CartItemType {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItemType[];
  // eslint-disable-next-line no-unused-vars
  fetchAndSetCart: (userId: string) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  addToCart: (item: CartItemType) => void;
  // eslint-disable-next-line no-unused-vars
  setCart: (items: CartItemType[], subTotal: number) => void;
  // eslint-disable-next-line no-unused-vars
  removeFromCart: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subTotal: number;
}

export interface Order {
  _id: string;
  number: string;
  city: string;
  address: string;
  email: string;
  name: string;
  postalCode: string;
  createdAt: Date;
  total: number;
  userId: string;
  // status: "Delivered" | "Processing" | "Cancelled";
  items: CartItemType[];
}
