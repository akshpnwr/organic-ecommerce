import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import { Separator } from "@/components/UI/separator";
import appleImg1 from "../assets/images/products/apple-1.jpg";
import appleImg2 from "../assets/images/products/apple-2.jpg";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetProduct from "@/hooks/useGetProduct";
import { RotateLoader } from "react-spinners";
import Rating from "@/components/UI/rating";
import { Button } from "@/components/UI/button";
import { Toaster } from "react-hot-toast";
import useAuthUser from "@/zustand/useAuthUser";
import useAddToCart from "@/hooks/useAddToCart";

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(appleImg1);
  const params = useParams();
  const id = params.id as string;
  const { loading, product } = useGetProduct(id);
  const { user } = useAuthUser();
  const { addToCart } = useAddToCart(user?._id || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (!product) return;

    setSelectedImg(product.img);
  }, [product]);

  if (product === undefined || loading) {
    return (
      <div className="text-center my-40">
        <RotateLoader color="#16a34a" />
      </div>
    );
  }

  const addToCartHandler = () => {
    console.log(product);

    if (!user) return navigate("/login");

    addToCart(product, 1);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-3 items-start">
          <div className="grid gap-4">
            <div className="max-h-96">
              <img
                src={selectedImg}
                alt="Product Image"
                width={600}
                height={900}
                className="object-center object-cover border rounded-sm w-full h-full"
              />
            </div>

            <div className="hidden md:flex gap-4 items-start">
              <button
                onClick={() => setSelectedImg(appleImg2)}
                className="border hover:border-primary rounded-lg overflow-hidden transition-colors"
              >
                <img
                  src={appleImg2}
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 1</span>
              </button>
              <button
                onClick={() => setSelectedImg(appleImg1)}
                className="border hover:border-primary rounded-lg overflow-hidden transition-colors"
              >
                <img
                  src={appleImg1}
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 2</span>
              </button>
              <button
                onClick={() => setSelectedImg(appleImg2)}
                className="border hover:border-primary rounded-lg overflow-hidden transition-colors"
              >
                <img
                  src={appleImg2}
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 3</span>
              </button>
              <button
                onClick={() => setSelectedImg(appleImg1)}
                className="border hover:border-primary rounded-lg overflow-hidden transition-colors"
              >
                <img
                  src={appleImg1}
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 4</span>
              </button>
              <button
                onClick={() => setSelectedImg(appleImg2)}
                className="border hover:border-primary rounded-lg overflow-hidden transition-colors"
              >
                <img
                  src={appleImg2}
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 3</span>
              </button>
              <button
                onClick={() => setSelectedImg(appleImg1)}
                className="border hover:border-primary rounded-lg overflow-hidden transition-colors"
              >
                <img
                  src={appleImg1}
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 4</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:gap-4 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <Rating
                  className="flex"
                  count={5}
                  value={product.rating}
                  edit={false}
                  size={20}
                />
              </div>
              <span className="text-sm text-muted-foreground">
                (42 reviews)
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold">$ {product.price}</p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button className="group border-[1.6px] border-red-400 bg-white rounded-lg text-xl font-medium hover:bg-red-400">
              <Heart className="text-red-400 group-hover:text-white" />
            </Button>
            <Button
              onClick={addToCartHandler}
              className="bg-green-600 rounded-lg text-xl font-medium hover:bg-green-700"
            >
              <ShoppingCart />
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-4">
            <h2 className="font-bold text-2xl">Product Details</h2>
            <div className="grid gap-2 text-sm leading-loose text-muted-foreground">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis, alias cumque. Eos error eveniet nobis unde fugit
                exercitationem consectetur molestiae illum vero veritatis.
                Perspiciatis ipsum beatae qui quod libero voluptates.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis, alias cumque. Eos error eveniet nobis unde fugit
                exercitationem consectetur molestiae illum vero veritatis.
                Perspiciatis ipsum beatae qui quod libero voluptates.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis, alias cumque. Eos error eveniet nobis unde fugit
                exercitationem consectetur molestiae illum vero veritatis.
                Perspiciatis ipsum beatae qui quod libero voluptates.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-4" />

      <Tabs defaultValue="details" className="max-w-6xl mx-auto px-4 md:p-0">
        <TabsList className="bg-transparent flex justify-center">
          <TabsTrigger
            value="details"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-green-500"
          >
            Additional Details
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-green-500"
          >
            Customer Feedback
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <div className="grid gap-4">
            <div className="grid gap-2 text-sm leading-loose text-muted-foreground">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum tempora dolores delectus repellat, ad porro dolor sed!
                Placeat culpa quaerat beatae expedita. Quae iure aperiam, et
                quidem cupiditate est earum expedita, recusandae nihil
                laboriosam quisquam nesciunt placeat quos corrupti vel?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum tempora dolores delectus repellat, ad porro dolor sed!
                Placeat culpa quaerat beatae expedita.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum tempora dolores delectus repellat, ad porro dolor sed!
                Placeat culpa quaerat beatae expedita. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Dolorum tempora dolores
                delectus repellat, ad porro dolor sed! Placeat culpa quaerat
                beatae expedita.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="grid gap-4">
            <div className="grid gap-6">
              <div className="flex">
                <Avatar className="w-10 mr-4 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="grid gap-4 flex-grow">
                  <div className="flex gap-4 items-start">
                    <div className="grid gap-0.5 text-sm">
                      <h3 className="font-semibold">Sarah Johnson</h3>
                      <time className="text-sm text-muted-foreground">
                        2 days ago
                      </time>
                    </div>
                    <div className="flex items-center gap-0.5 ml-auto">
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                    </div>
                  </div>
                  <div className="text-sm leading-loose text-muted-foreground">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum tempora dolores delectus repellat, ad porro dolor
                      sed! Placeat culpa quaerat beatae expedita. Dolorum
                      tempora dolores delectus repellat, ad porro dolor sed!
                      Placeat culpa quaerat beatae expedita.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Avatar className="w-10 mr-4 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className="grid gap-4 flex-grow">
                  <div className="flex gap-4 items-start">
                    <div className="grid gap-0.5 text-sm">
                      <h3 className="font-semibold">Alex Smith</h3>
                      <time className="text-sm text-muted-foreground">
                        3 weeks ago
                      </time>
                    </div>
                    <div className="flex items-center gap-0.5 ml-auto">
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                      <Star
                        size={16}
                        color="#eab308"
                        fill="#eab308"
                        strokeWidth={0.5}
                      />
                    </div>
                  </div>
                  <div className="text-sm leading-loose text-muted-foreground">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum tempora dolores delectus repellat, ad porro dolor
                      sed! Placeat culpa quaerat beatae expedita.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <Toaster />
    </>
  );
}
