import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
type Props = {
  image: string;
  name: string;
  price: string;
  isSelling?: boolean;
};

const NFTCards = ({ image, name, price, isSelling }: Props) => {
  const { toast } = useToast();
  return (
    <div className=" w-52  rounded-xl border-2 border-darkblue-600 bg-slate-300 p-3  hover:border-red-400 dark:bg-darkblue-500 max-sm:w-48">
      {image.includes(".mp4") ? (
        <video
          className="rounded"
          src={image}
          width={180}
          height={180}
          muted
          autoPlay
          loop
        />
      ) : (
        <Image
          className="rounded"
          src={image}
          alt={""}
          width={180}
          height={180}
        />
      )}
      {/* <Image
        className="rounded"
        src={image}
        alt={""}
        width={180}
        height={180}
      /> */}
      <div className="flex gap-1 p-1">
        <h2 className="font-styreneA font-bold">{name}</h2>
      </div>
      <h3 className="p-1">{price}</h3>
      {!isSelling && (
        <Button
          className="mt-1 w-full bg-red-500 font-bold hover:bg-red-400 dark:text-darkblue-500"
          variant={"destructive"}
          onClick={() => {
            toast({
              title: "Transaction completed",
              description: `${name} has been bought`,
              variant: "default",
            });
          }}
        >
          Buy Now
        </Button>
      )}
    </div>
  );
};

export default NFTCards;
