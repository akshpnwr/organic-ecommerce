import ProductCard from "../product-card";
import banner from "../../assets/images/featured-products-banner.png";
import { Product } from "../../types";
import underline from "../../assets/images/underline.svg";
import ImageWithPlaceholder from "../UI/ImageWithPlaceholder";
import useGetProducts from "@/hooks/useGetProducts";
import { RotateLoader } from "react-spinners";

const FeaturedProductsSubSection: React.FC<{
  title: string;
  products: Product[];
}> = ({ title }) => {
  const { loading, products } = useGetProducts({ limit: 3 });

  if (products === undefined || loading) {
    return (
      <div className="text-center my-40">
        <RotateLoader color="#16a34a" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4 font-semibold text-left md:text-base text-zinc-900">
        {title}
      </h1>
      <div className="flex flex-col gap-3">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            direction="vertical"
          />
        ))}
      </div>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  const { loading, products } = useGetProducts({ limit: 5 });

  if (products === undefined || loading) {
    return (
      <div className="text-center my-40">
        <RotateLoader color="#16a34a" />
      </div>
    );
  }

  return (
    <div className="md:w-3/4 mt-12 md:mt-0 mx-auto">
      <h1 className="font-bold text-center text-2xl md:text-4xl text-zinc-900">
        Featured Products
      </h1>
      <img src={underline} className="m-auto" alt="" />
      <section className="mt-10 grid grid-cols-2 gap-2 mx-4 justify-items-center sm:grid-cols-2 md:grid-cols-5 md:gap-3">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            direction="horizontal"
          />
        ))}
      </section>

      <section className="mt-10 mx-4 grid grid-cols-1 items-center gap-4 md:gap-0 md:grid-cols-4">
        <FeaturedProductsSubSection title="Hot Deals" products={products} />
        <FeaturedProductsSubSection title="Best Seller" products={products} />
        <FeaturedProductsSubSection title="Top Rated" products={products} />
        <ImageWithPlaceholder
          src={banner}
          alt=""
          className="my-0 mx-auto h-[300px] md:h-[375px] hover:scale-105 transition duration-200 ease-in"
        />
      </section>
    </div>
  );
};

export default FeaturedProducts;
