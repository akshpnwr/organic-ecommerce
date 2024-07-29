import React from "react";
import Feature from "./feature";
import { Headphones, Package, ShoppingBag, Truck } from "lucide-react";

const features = [
  {
    icon: (
      <Truck
        strokeWidth="1px"
        className="w-12 h-12 group-hover:scale-125 group-hover:text-white text-green-600"
      />
    ),
    alt: "Free Shipping Icon",
    title: "Free Shipping",
    description: "Free shipping on all your orders",
  },
  {
    icon: (
      <Headphones
        strokeWidth="1px"
        className="w-12 h-12 group-hover:scale-125 group-hover:text-white text-green-600"
      />
    ),
    alt: "Customer Support Icon",
    title: "Customer Support 24/7",
    description: "Instant access to Support",
  },
  {
    icon: (
      <Package
        strokeWidth="1px"
        className="w-12 h-12 group-hover:scale-125 group-hover:text-white text-green-600"
      />
    ),
    alt: "Secure Payment Icon",
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
  },
  {
    icon: (
      <ShoppingBag
        strokeWidth="1px"
        className="w-12 h-12 group-hover:scale-125 group-hover:text-white text-green-600"
      />
    ),
    alt: "Money-Back Guarantee Icon",
    title: "Money-Back Guarantee",
    description: "30 Days Money-Back Guarantee",
  },
];

const FeatureSection: React.FC = () => (
  <section className="max-w-6xl mx-auto md:relative md:bottom-16 justify-between bg-white rounded-md shadow-2xl">
    <div className="flex max-md:flex-col max-md:gap-0">
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon as JSX.Element}
          alt={feature.alt}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </section>
);

export default FeatureSection;
