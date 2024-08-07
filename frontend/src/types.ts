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
