import React from "react";
import cancelUrl from "../../assets/images/cancel.svg";
import { Link } from "react-router-dom";

interface NavLinksProps {
  isNavLinkVisible: boolean;
  setShowNavLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({
  isNavLinkVisible,
  setShowNavLinks,
}) => {
  return (
    <header
      className={`${
        !isNavLinkVisible && "hidden"
      } absolute animate-slide w-full h-full md:h-auto md:w-auto md:relative md:flex md:justify-center md:items-center px-16 py-4 text-sm font-medium leading-5 bg-zinc-800 max-md:px-5 md:animate-none`}
    >
      {isNavLinkVisible && (
        <div
          className="pb-2 flex justify-end relative left-1 cursor-pointer"
          onClick={() => setShowNavLinks(false)}
        >
          <img src={cancelUrl} alt="" className="h-6" />
        </div>
      )}
      <nav className="flex flex-col md:flex-row gap-5 md:justify-between w-full max-w-[1120px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col md:flex-row gap-5 justify-between my-auto text-neutral-400 max-md:flex-wrap">
          <Link to="/" className="hover:text-white hover:cursor-pointer">
            Home
          </Link>
          <Link to="/shop" className="hover:text-white hover:cursor-pointer">
            Shop
          </Link>
          {/* <div className="hover:text-white hover:cursor-pointer">Pages</div> */}
          {/* <div className="hover:text-white hover:cursor-pointer">Blog</div> */}
          <Link
            to="/about-us"
            className="hover:text-white hover:cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-white hover:cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center gap-2 text-white whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c54ae817406f7fc34df6f1711aebcf67c5f7320352507c3a3cebb3eed92e0f6a?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&"
            alt="Contact phone"
            className="shrink-0 w-7 aspect-square"
          />
          <div className="my-auto">(219) 555-0114</div>
        </div>
      </nav>
    </header>
  );
};

export default NavLinks;
