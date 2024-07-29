import { Minus, Plus, Trash } from "lucide-react";
import appleImg from "../assets/images/products/apple.png";
import { useState } from "react";
import { Button } from "@/components/UI/button";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <li className="flex items-center gap-4 bg-background p-4 shadow-sm rounded-none border-l-2 border-green-600">
      <img
        src={appleImg}
        alt="Product Image"
        width={80}
        height={80}
        className="rounded-md object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">Apple</h3>
        <p className="text-sm font-medium text-muted-foreground">$29</p>
      </div>

      <div className="flex min-w-40 items-center ml-auto gap-2">
        <Button
          onClick={decrementQuantity}
          variant="outline"
          size="icon"
          className="h-8 w-8"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-center w-8">{quantity}</span>
        <Button
          onClick={incrementQuantity}
          variant="outline"
          size="icon"
          className="h-8 w-8"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="hover:bg-transparent hover:sca">
          <Trash
            color="red"
            className="cursor-pointer w-6 h-6"
            strokeWidth={1.25}
          />
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
