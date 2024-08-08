import { Button } from "@/components/UI/button";
import { Separator } from "@/components/UI/separator";
import { Link } from "react-router-dom";
import CartItem from "@/components/CartItem";
import useCart from "@/zustand/useCart";

export default function Cart() {
  const { items, subTotal, clearCart } = useCart();
  const isEmpty = items.length === 0;

  const shipping = 1.5;
  const tax = 2;
  const total = subTotal + shipping + tax;

  return (
    <div className="max-w-6xl mx-auto flex flex-col min-h-[80vh] bg-muted/40 mt-8">
      <header className="bg-background border-b py-3 px-0">
        <div className="container px-0 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
          <h1 className="text-2xl font-semibold w-full md:w-auto md:bg-transparent md:text-gray-900 text-center text-white py-3 bg-gray-800">
            Shopping Cart
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to="/shop"
              className="text-muted-foreground hover:text-foreground"
            >
              Continue Shopping
            </Link>
            <Button
              onClick={clearCart}
              size="sm"
              className="bg-green-600 hover:bg-green-700"
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </header>
      {isEmpty && <p className="text-xl mx-auto mt-10">Your cart is empty !</p>}
      {isEmpty || (
        <main className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <ul className="flex flex-col gap-2 md:gap-4 px-1 md:px-0">
              {items.map((item) => (
                <CartItem key={item.product._id} {...item} />
              ))}
            </ul>
          </div>
          <div className="min-w-72 bg-background rounded-lg p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">${shipping}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium">${tax}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-medium">${total.toFixed(2)}</span>
              </div>

              <div className="grid gap-2">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Proceed to Checkout
                </Button>
                <Link to="/shop">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
