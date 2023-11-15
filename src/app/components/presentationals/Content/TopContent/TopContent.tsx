"use client";
import React, { useState } from "react";
import { ITileProps } from "@/interfaces/IUIProps";
import GridStats from "@/components/containers/Content/GridStats";
import LogoTitleAuthor from "@/components/presentationals/Content/TopContent/LogoTitleAuthor";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Description from "./Description";
import { StaticImageData } from "next/image";

type Props = {
  name: string;
  author: string;
  tileArray: ITileProps[];
  description: string;
  showMore: boolean;
  collectionImage: string;
};

const TopContent = ({
  author,
  name,
  tileArray,
  description,
  showMore,
  collectionImage,
}: Props) => {
  const [isShowMore, setShowMore] = useState(showMore);

  return (
    <section className="flex justify-between p-3 max-lg:flex-col">
      <div className="flex max-w-2xl flex-col gap-2">
        <LogoTitleAuthor name={name} author={author} image={collectionImage} />
        <Description
          description={description}
          isShowMore={isShowMore}
          handleOnClick={() => setShowMore((prev) => (prev = !prev))}
        />
      </div>
      <>
        <GridStats tileArray={tileArray} />
      </>
    </section>
  );
};

export default TopContent;
