import React from "react";
import Image from "next/image";
import NFTCards from "@/components/presentationals/Content/BottomContent/NFTCards";
import nftMock from "@public/pictures/nftMock.png";
type Props = {};

const GridCards = (props: Props) => {
  const generateCards = (numbercards: number) => {
    const array = [
      <NFTCards
        key={1}
        image={nftMock}
        name={"Everai"}
        id={"4960"}
        price={"5"}
        isSelling={true}
      />,
      <NFTCards
        key={2}
        image={nftMock}
        name={"Everai"}
        id={"2520"}
        price={"2"}
      />,
    ];
    for (let index = 0; index < numbercards; index++) {
      array.push(
        <NFTCards
          key={index}
          image={nftMock}
          name={"Everai"}
          id={"2560"}
          price={"2"}
        />,
      );
    }
    return array;
  };
  return <div className="flex flex-wrap gap-3">{generateCards(50)}</div>;
};

export default GridCards;
