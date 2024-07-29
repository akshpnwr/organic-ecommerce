// import "../assets/styles/styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ReactNode } from "react";

const Slider: React.FC<{ children: ReactNode[] }> = ({ children }) => {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 500px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
    },
  });

  const goToPreviousSlide = () => {
    if (slider) {
      slider.current?.prev();
    }
  };

  const goToNextSlide = () => {
    if (slider) {
      slider.current?.next();
    }
  };

  return (
    <>
      <div className="my-3 md:my-0 mx-4 flex md:relative z-10 md:top-[200px] justify-center md:justify-between gap-4">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
          onClick={goToPreviousSlide}
          className="rounded-full bg-white p-3 transition hover:bg-green-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          aria-label="Next slide"
          id="keen-slider-next"
          onClick={goToNextSlide}
          className="rounded-full bg-white p-3 transition hover:bg-green-600 hover:text-white"
        >
          <svg
            className="size-5 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <div className="w-11/12 mx-auto my-0">
        <div ref={ref} className="keen-slider overflow-visible">
          {children.map((child, idx) => {
            return (
              <div
                key={idx}
                className={`keen-slider__slide number-slide${idx + 1}`}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Slider;
