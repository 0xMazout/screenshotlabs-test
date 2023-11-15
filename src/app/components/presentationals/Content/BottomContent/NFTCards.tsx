import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
type Props = {
  image: StaticImageData;
  name: string;
  id: string;
  price: string;
  isSelling?: boolean;
};

const NFTCards = ({ image, name, id, price, isSelling }: Props) => {
  return (
    <div className=" w-52  rounded-xl border-2 border-darkblue-600 bg-slate-300 p-3  hover:border-red-400 dark:bg-darkblue-500 max-sm:w-48">
      <Image className="rounded" src={image} alt={""} />
      <div className="flex gap-1 p-1">
        <h2 className="font-styreneA font-bold">{name}</h2>
        <h2 className="font-bold">#{id}</h2>
      </div>
      <h3 className="p-1">{price} ETH</h3>
      {!isSelling && (
        <Button
          className="mt-1 w-full bg-red-500 font-bold hover:bg-red-400 dark:text-darkblue-500"
          variant={"destructive"}
        >
          Buy Now
        </Button>
      )}
    </div>
  );
};

export default NFTCards;
