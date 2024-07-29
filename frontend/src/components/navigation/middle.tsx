import * as React from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ImageProps {
  src: string;
  alt: string;
  customClass?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, customClass }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`shrink-0 self-start w-8 aspect-square ${customClass}`}
  />
);

interface SearchAreaProps {
  placeholder: string;
}

const SearchArea: React.FC<SearchAreaProps> = ({ placeholder }) => (
  <form className="md:w-2/5 flex gap-0 self-stretch rounded-md border border-solid border-neutral-200">
    <label
      htmlFor="searchInput"
      className="flex flex-auto gap-2 px-4 py-3 text-base leading-5 text-zinc-500"
    >
      <img
        loading="lazy"
        alt="Search icon"
        src={search}
        className="shrink-0 self-start w-5 aspect-square"
      />
      <input
        id="searchInput"
        className="flex-auto outline-none"
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </label>
    <button
      type="submit"
      className="justify-center px-6 py-3.5 text-sm rounded-r font-semibold leading-4 text-white bg-green-600 max-md:px-5"
    >
      Search
    </button>
  </form>
);

interface MiddleProps {
  setShowNavLinks: React.Dispatch<React.SetStateAction<boolean>>;
}
const Middle: React.FC<MiddleProps> = ({ setShowNavLinks }) => (
  // <header className="flex gap-5 justify-between items-center px-16 whitespace-nowrap max-md:flex-wrap">
  <header className="flex gap-3 md:gap-0 flex-col items-center w-11/12 md:w-3/4 my-0 mx-auto justify-between md:flex-row">
    <div className="flex gap-2 md:self-stretch my-auto text-3xl font-medium tracking-tighter leading-10 text-green-950">
      <Image src={logo} alt="Ecobazar logo" />
      <div className="grow">Ecobazar</div>
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setShowNavLinks(true)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <SearchArea placeholder="Search" />
    <div className="flex items-center justify-between md:self-stretch my-auto">
      <Heart strokeWidth="1.4px" className="w-7 h-w-7 mr-3" />
      <div className="flex items-center gap-3 pl-3 border-l-2">
        <Link to="/cart">
          <ShoppingCart strokeWidth="1.4px" className="w-7 h-w-7" />
        </Link>
        <div className="flex-col flex-1">
          <div className="text-xs leading-3 text-neutral-600">
            {" "}
            Shopping cart:{" "}
          </div>
          <div className="mt-2 text-sm font-medium leading-4 text-zinc-900">
            $57.00
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Middle;
