import underline from "../assets/images/underline.svg";
import fruitImgUrl from "../assets/images/top-category/fruits.png";
import fishImgUrl from "../assets/images/top-category/fish.png";
import snacksImgUrl from "../assets/images/top-category/snacks.png";
import meatImgUrl from "../assets/images/top-category/meat.png";
import vegetableImgUrl from "../assets/images/top-category/vegetable.png";
import softDrinkImgUrl from "../assets/images/top-category/soft-drink.png";

interface TopCategoryCardProps {
  imageUrl: string;
  title: string;
  productCount: number;
}

const categories = [
  {
    imageUrl: vegetableImgUrl,
    title: "Vegetables",
    productCount: 165,
  },
  {
    imageUrl: fruitImgUrl,
    title: "Fresh Fruit",
    productCount: 137,
  },
  {
    imageUrl: fishImgUrl,
    title: "River Fish",
    productCount: 34,
  },
  {
    imageUrl: meatImgUrl,
    title: "Meat",
    productCount: 165,
  },
  {
    imageUrl: softDrinkImgUrl,
    title: "Water and Drinks",
    productCount: 48,
  },
  {
    imageUrl: snacksImgUrl,
    title: "Snacks",
    productCount: 165,
  },
];

const TopCategoryCard: React.FC<TopCategoryCardProps> = ({
  imageUrl,
  title,
  productCount,
}) => {
  return (
    <article className="w-full flex flex-col py-7 text-center bg-white rounded-md border border-gray-300 border-solid leading-[150%] max-w-[200px] hover:border-1 hover:border-green-400 hover:shadow-sm hover:shadow-green-500">
      <img
        src={imageUrl}
        alt={title}
        className="self-center w-20 aspect-square"
      />
      <h3 className="mt-5 w-full text-lg font-medium text-zinc-900">{title}</h3>
      <p className="mt-1.5 w-full text-sm text-zinc-500">
        {productCount} Products
      </p>
    </article>
  );
};

const TopCategory: React.FC = () => {
  return (
    <div className="md:w-3/4 mt-14 mx-auto">
      <h1 className="font-bold text-center text-2xl md:text-4xl text-zinc-900">
        Top Category
      </h1>
      <img src={underline} className="m-auto mt-4" alt="" />
      <div className="grid mt-8 grid-cols-2 justify-items-center gap-y-10 md:flex md:gap-x-4">
        {categories.map((category) => (
          <TopCategoryCard
            key={category.title}
            imageUrl={category.imageUrl}
            title={category.title}
            productCount={category.productCount}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
