import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "@/components/UI/button";
import { CartItemType } from "@/types";
import useUpdateQuantity from "@/hooks/useUpdateQuantity";
import useAuthUser from "@/zustand/useAuthUser";
import useRemoveItemFromCart from "@/hooks/useRemoveItemFromCart";

const CartItem: React.FC<CartItemType> = ({ product, quantity }) => {
  const { user } = useAuthUser();
  const { updateQuantity } = useUpdateQuantity();
  const { removeItem } = useRemoveItemFromCart();

  const incrementQuantityHandler = () => {
    if (!user) return;
    updateQuantity(user._id, product._id, quantity + 1);
  };

  const decrementQuantityHandler = () => {
    if (!user) return;
    if (quantity === 1) return;
    updateQuantity(user._id, product._id, quantity - 1);
  };

  const removeItemHandler = () => {
    if (!user) return;
    removeItem(user._id, product._id);
  };

  return (
    <li className="flex items-center gap-4 bg-background p-4 shadow-sm rounded-none border-l-2 border-green-600">
      <img
        src={product.img}
        alt="Product Image"
        width={80}
        height={80}
        className="rounded-md object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm font-medium text-muted-foreground">
          ${product.price}
        </p>
      </div>

      <div className="flex min-w-40 items-center ml-auto gap-2">
        <Button
          onClick={decrementQuantityHandler}
          variant="outline"
          size="icon"
          className="h-8 w-8"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-center w-8">{quantity}</span>
        <Button
          onClick={incrementQuantityHandler}
          variant="outline"
          size="icon"
          className="h-8 w-8"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          onClick={removeItemHandler}
          variant="ghost"
          className="hover:bg-transparent hover:sca"
        >
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
