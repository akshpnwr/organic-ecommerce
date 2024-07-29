import FeaturedProducts from "../components/featured-products/featured-products";
import Hero from "../components/hero/hero";
import Testimonial from "../components/testimonial";
import TopCategory from "../components/top-category";
import banner1 from "../assets/images/homepage-ad-banner-1.png";
import banner2 from "../assets/images/homepage-ad-banner-2.png";
import banner3 from "../assets/images/homepage-ad-banner-3.png";
import post1 from "../assets/images/instagram-posts/post-1.png";
import post2 from "../assets/images/instagram-posts/post-2.png";
import post3 from "../assets/images/instagram-posts/post-3.png";
import post4 from "../assets/images/instagram-posts/post-4.png";
import post5 from "../assets/images/instagram-posts/post-5.png";
import post6 from "../assets/images/instagram-posts/post-6.png";

import underline from "../assets/images/underline.svg";
import ImageWithPlaceholder from "../components/UI/ImageWithPlaceholder";

const Homepage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <TopCategory />

      {/* Adverstisement section */}
      <div className="px-4 my-0 mx-auto py-10 md:px-48 flex flex-col items-center justify-center md:flex-row gap-10 ">
        <ImageWithPlaceholder
          src={banner1}
          alt=""
          className="h-[300px] md:h-[450px] hover:scale-105 transition duration-200 ease-in"
        />
        <ImageWithPlaceholder
          src={banner2}
          alt=""
          className="h-[300px] md:h-[450px] hover:scale-105 transition duration-200 ease-in"
        />
        <ImageWithPlaceholder
          src={banner3}
          alt=""
          className="h-[300px] md:h-[450px] hover:scale-105 transition duration-200 ease-in"
        />
      </div>
      <Testimonial />
      {/* Follow us section */}
      <div className="md:w-3/4 my-14 mx-auto">
        <h1 className="font-bold text-center text-2xl md:text-4xl text-zinc-900">
          Follow us on Instagram
        </h1>
        <img src={underline} className="m-auto mt-4" alt="" />
        <div className="grid mt-8 grid-cols-2 px-4 md:px-0 justify-items-center gap-4 md:flex md:gap-x-4">
          <ImageWithPlaceholder
            src={post1}
            alt=""
            className="h-[150px] md:h-[180px] hover:scale-105 transition duration-200 ease-in"
          />
          <ImageWithPlaceholder
            src={post2}
            alt=""
            className="h-[150px] md:h-[180px] hover:scale-105 transition duration-200 ease-in"
          />{" "}
          <ImageWithPlaceholder
            src={post3}
            alt=""
            className="h-[150px] md:h-[180px] hover:scale-105 transition duration-200 ease-in"
          />
          <ImageWithPlaceholder
            src={post4}
            alt=""
            className="h-[150px] md:h-[180px] hover:scale-105 transition duration-200 ease-in"
          />
          <ImageWithPlaceholder
            src={post5}
            alt=""
            className="h-[150px] md:h-[180px] hover:scale-105 transition duration-200 ease-in"
          />
          <ImageWithPlaceholder
            src={post6}
            alt=""
            className="h-[150px] md:h-[180px] hover:scale-105 transition duration-200 ease-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
