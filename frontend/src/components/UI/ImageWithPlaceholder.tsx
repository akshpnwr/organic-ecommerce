import React, { useState } from "react";

interface ImageWithPlaceholderProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  alt,
  className,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`w-full h-full ${className}`}>
      <div
        className={`w-full h-full rounded-md bg-gray-300 animate-pulse ${
          loaded ? "hidden" : ""
        } `}
      ></div>

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${loaded ? "" : "hidden"}`}
      />
    </div>
  );
};

export default ImageWithPlaceholder;
