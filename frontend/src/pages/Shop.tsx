import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";

import PaginatedProducts from "../components/PaginatedProducts";
import { Separator } from "@/components/UI/separator";

const Shop: React.FC = () => {
  return (
    <div className="max-w-6xl my-6 mx-4 md:mx-auto">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between mb-10">
        <div className="flex justify-between md:gap-6">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="fruits">Fruits</SelectItem>
              <SelectItem value="vegetables">Vegetables</SelectItem>
              <SelectItem value="spices">Spices</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="0">0 - 1000</SelectItem>
              <SelectItem value="1000">1000 - 2000</SelectItem>
              <SelectItem value="2000">2000 & above</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator className="md:h-2 md:hidden" />
        <div className="flex justify-between md:gap-6">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="price-low-to-high">
                Price: low to high
              </SelectItem>
              <SelectItem value="price-high-to  -low">
                Price: high to low
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="1">Above 1 star</SelectItem>
              <SelectItem value="2">Above 2 star</SelectItem>
              <SelectItem value="3">Above 3 star</SelectItem>
              <SelectItem value="4">Above 4 star</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <PaginatedProducts itemsPerPage={10} />
    </div>
  );
};

export default Shop;
