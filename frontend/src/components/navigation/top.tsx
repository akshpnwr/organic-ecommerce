import * as React from "react";

interface DropdownItemProps {
  label: string;
  imgUrl: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, imgUrl }) => {
  return (
    <div className="flex gap-1.5">
      <div>{label}</div>
      <img
        src={imgUrl}
        alt=""
        className="shrink-0 my-auto aspect-[1.75] w-[7px]"
        loading="lazy"
      />
    </div>
  );
};

const Top: React.FC = () => {
  const dropdownItems = [
    {
      label: "Eng",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/86483f2732ddaa1c744a7aec1155b21b73c78a370dd2c79a7389bf1c61b7b33c?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
      alt: "English Language",
    },
    {
      label: "USD",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/86483f2732ddaa1c744a7aec1155b21b73c78a370dd2c79a7389bf1c61b7b33c?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
      alt: "US Dollar Currency",
    },
  ];

  return (
    <header className="flex w-full my-0 mx-auto justify-center items-center py-3 text-xs leading-4 whitespace-nowrap bg-white shadow-md text-stone-500 max-md:px-5">
      <div className="flex w-full flex-col items-center gap-2 justify-between max-w-[1320px] md:w-3/4 md:flex-row md:gap-5 max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/901f1c3cb90358919f307dc431b5da897240395373fa03f76e9d939314c875bb?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&"
            alt="Store Location"
            className="shrink-0 aspect-[0.83] w-[15px]"
            loading="lazy"
          />
          <div>Store Location: Lincoln - 344, Illinois, Chicago, USA</div>
        </div>
        <div className="flex gap-5 justify-between md:self-start">
          <nav className="flex gap-5 text-center">
            {dropdownItems.map((item, index) => (
              <DropdownItem
                key={index}
                label={item.label}
                imgUrl={item.imgUrl}
              />
            ))}
          </nav>
          <div className="flex gap-1">
            <div className="grow">Sign In</div>
            <div>/</div>
            <div className="grow">Sign Up</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Top;
