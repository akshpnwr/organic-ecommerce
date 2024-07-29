import image1 from "../assets/images/about-us/image-1.png";
import image2 from "../assets/images/about-us/image-2.png";
import image3 from "../assets/images/about-us/image-3.png";
import teamMember1 from "../assets/images/about-us/team-member-1.png";

import Testimonial from "../components/testimonial";
import Slider from "../components/slider";
import ButtonCustom from "../components/UI/ButtonCustom";

interface BenefitProps {
  iconSrc: string;
  title: string;
  description: string;
}

const benefits = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/911b98e2a9143c17f7653213fb690cc715870b145546b5c3f27d7b836d754119?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    title: "Great Support 24/7",
    description: "Instant access to Contact",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/06ba730115f51e1a26ca72b02aeb0c8bd31dcede32b7414e98f5f63f700c27dd?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    title: "100% Sucure Payment",
    description: "We ensure your money is save",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1a06d78d88c449e46fc93cc80e6b7f2c9807bde67732434cb7d286cf09a3285a?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    title: "100% Organic Food",
    description: "100% healthy & Fresh food.",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2fce84e46c036ee4d40bd84836bd69a830c57f2a53d51afd4deb1e43eb58729d?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    title: "100% Organic food",
    description: "100% healthy & Fresh food.",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d3e3f340ec1bab5468be59888d60773ada2c6e49b6fcc8391b0e098d49a7ad41?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    title: "Customer Feedback",
    description: "Our happy customer",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/325c69bfd9dcf107b6ab6a53a2d8c0003aa5c490f4e372fbdb594c0f6af5ee68?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    title: "Free Shipping",
    description: "Free shipping with discount",
  },
];

const companyImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7272bc0b90b26a3393cadf8ecab6201b6891ea055e5f46ee051145a799a76dc6?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    alt: "Image 1",
    className: "shrink-0 aspect-[2.56] fill-pink-600 w-[82px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3e4da61d104e44c4de678022c112ff0ca2645a1c389cbf31e92c657f602b6d3?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    alt: "Image 2",
    className: "shrink-0 aspect-[2.08] w-[67px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da04c3fab3d73e5f2e59f2c1d52eacb4b97dab26d9b9f577926bd9b449780f50?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    alt: "Image 3",
    className: "shrink-0 aspect-[1.89] w-[60px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a295d95a8deb13859c968143fc8b1e0b77e1d08da64be58206a0efd07ae36203?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    alt: "Image 4",
    className: "shrink-0 aspect-[2.56] w-[83px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5cbc8c8c23e8a09c8dd3b167387d65d719752e01a7442a38b5d0d8c2049d06a?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    alt: "Image 5",
    className: "shrink-0 max-w-full aspect-[4.17] w-[131px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e23dca0c270066b4aa47296d60cc2d3362f95ff40f8a54c4cf3eead8cedf57d?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    alt: "Image 6",
    className: "shrink-0 w-24 aspect-[3.03]",
  },
];

const Benefit: React.FC<BenefitProps> = ({ iconSrc, title, description }) => (
  <div className="flex relative gap-4 mt-6 bg-white max-md:flex-wrap max-md:max-w-full">
    <div className="flex flex-col justify-center items-start p-5 bg-green-600 bg-opacity-10 rounded-[5000px] max-md:pr-5">
      <img src={iconSrc} alt={title} className="w-6 aspect-square" />
    </div>
    <div className="flex flex-col justify-center my-auto leading-[150%] max-md:max-w-full">
      <h3 className="text-sm font-medium text-zinc-900 max-md:max-w-full">
        {title}
      </h3>
      <p className="mt-2 text-sm text-neutral-400 max-md:max-w-full">
        {description}
      </p>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <div>
      {/* section 1 */}
      <section className="flex gap-5 max-md:flex-col max-md:gap-0 md:max-w-[1300px] md:my-16 md:mx-auto">
        <div className="px-5 flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-semibold leading-[60px] text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              100% Trusted Organic Food Store
            </h1>
            <p className="mt-6 text-lg leading-7 text-stone-500 max-md:max-w-full">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image1}
            alt="about us image"
            className="grow w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </section>
      {/* section 2 */}
      <div className="shadow-sm mt-6">
        <div className="flex max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow items-end py-20 pl-20 min-h-[550px] max-md:max-w-full">
              <img
                loading="lazy"
                src={image2}
                className="object-cover absolute inset-0 size-full"
              />
            </div>
          </div>
          <div className="flex flex-col w-[50%] max-md:ml-0 px-6 md:p-0 max-md:w-full md:relative md:-left-8">
            <div className="flex flex-col md:my-10 md:mr-10 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl font-semibold leading-[60px] text-green-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                100% Trusted <br /> Organic Food Store
              </h2>
              <p className="mt-6 text-base leading-6 text-zinc-500 max-md:max-w-full">
                Pellentesque a ante vulputate leo porttitor luctus sed eget
                eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                feugiat.{" "}
              </p>
              <div className="grid md:grid-cols-2 mb-6 md:mt-6 max-w-full">
                {benefits.map((benefit) => (
                  <Benefit key={benefit.title} {...benefit} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <section className="flex ml-4 md:flex-row gap-5 max-md:flex-col-reverse max-md:gap-0 md:max-w-[1300px] md:mt-8 md:mx-auto">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col self-stretch my-auto text-sm leading-5 text-stone-500 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-semibold leading-[50px] text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              We Delivered, You Enjoy Your Order.
            </h1>
            <p className="mt-5 text-sm leading-6 max-md:max-w-full">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>

            <div className="flex gap-2 mt-4 max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9780cf477214ec0e71791721fbdc49baeb2d11de8ecb1b4738640e660e9c5d7?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&"
                alt=""
                className="shrink-0 w-5 aspect-square"
              />
              <div className="max-md:max-w-full">
                Sed in metus pellentesque.
              </div>
            </div>
            <div className="flex gap-2 mt-4 max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9780cf477214ec0e71791721fbdc49baeb2d11de8ecb1b4738640e660e9c5d7?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&"
                alt=""
                className="shrink-0 w-5 aspect-square"
              />
              <div className="max-md:max-w-full">
                Sed in metus pellentesque.
              </div>
            </div>
            <div className="flex gap-2 mt-4 max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9780cf477214ec0e71791721fbdc49baeb2d11de8ecb1b4738640e660e9c5d7?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&"
                alt=""
                className="shrink-0 w-5 aspect-square"
              />
              <div className="max-md:max-w-full">
                Sed in metus pellentesque.
              </div>
            </div>

            <ButtonCustom text="Shop Now" classes="flex gap-4 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4479b5fcd8806024af03a919fdc52e70085f0c2c8f9acab5119fdbdc61350308?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&"
                alt=""
                className="shrink-0 my-auto aspect-[1.15] w-[15px]"
              />
            </ButtonCustom>
          </section>
        </div>
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image3}
            alt="about us image"
            className="grow w-full aspect-[1.35] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </section>
      {/* Our team section */}
      <div className="my-14">
        <div className="w-1/2 my-0 mx-auto text-center">
          <h2 className="text-5xl font-semibold leading-[57.6px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
            Our Awesome Team
          </h2>
          <p className="mt-3 w-full text-base leading-6 text-stone-500 max-md:max-w-full">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>
        </div>
        <Slider>
          <div className="md:m-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={teamMember1}
              alt="Sunset in the mountains"
            />
            <div className="p-1 md:px-4 md:py-4">
              <div className="font-bold text-sm md:text-lg mb-1">
                Jane Cooper
              </div>
              <p className="text-gray-700 text-xs md:text-sm">Worker</p>
            </div>
          </div>
          <div className="md:m-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={teamMember1}
              alt="Sunset in the mountains"
            />
            <div className="p-1 md:px-4 md:py-4">
              <div className="font-bold text-sm md:text-lg mb-1">
                Jane Cooper
              </div>
              <p className="text-gray-700 text-xs md:text-sm">Worker</p>
            </div>
          </div>
          <div className="md:m-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={teamMember1}
              alt="Sunset in the mountains"
            />
            <div className="p-1 md:px-4 md:py-4">
              <div className="font-bold text-sm md:text-lg mb-1">
                Jane Cooper
              </div>
              <p className="text-gray-700 text-xs md:text-sm">Worker</p>
            </div>
          </div>
          <div className="md:m-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={teamMember1}
              alt="Sunset in the mountains"
            />
            <div className="p-1 md:px-4 md:py-4">
              <div className="font-bold text-sm md:text-lg mb-1">
                Jane Cooper
              </div>
              <p className="text-gray-700 text-xs md:text-sm">Worker</p>
            </div>
          </div>
          <div className="md:m-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={teamMember1}
              alt="Sunset in the mountains"
            />
            <div className="p-1 md:px-4 md:py-4">
              <div className="font-bold text-sm md:text-lg mb-1">
                Jane Cooper
              </div>
              <p className="text-gray-700 text-xs md:text-sm">Worker</p>
            </div>
          </div>{" "}
          <div className="md:m-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={teamMember1}
              alt="Sunset in the mountains"
            />
            <div className="p-1 md:px-4 md:py-4">
              <div className="font-bold text-sm md:text-lg mb-1">
                Jane Cooper
              </div>
              <p className="text-gray-700 text-xs md:text-sm">Worker</p>
            </div>
          </div>
        </Slider>
      </div>
      {/* Testimonial */}
      <Testimonial />
      {/* section 5 */}
      <section className="flex gap-5 mx-4 md:w-5/6 md:mx-auto my-0 justify-between py-12 md:py-20 max-md:flex-wrap">
        {companyImages.map((image, index) => (
          <img
            loading="lazy"
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </section>
    </div>
  );
};

export default AboutUs;
