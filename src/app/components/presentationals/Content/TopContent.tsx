"use client";
import React, { useState } from "react";
import { ITileProps } from "@/interfaces/IUIProps";
import GridStats from "@/components/containers/Content/GridStats";
import LogoTitleAuthor from "@/components/presentationals/Content/LogoTitleAuthor";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";
import Description from "./Description";

type Props = {
  name: string;
  author: string;
  tileArray: ITileProps[];
  description: string;
  showMore: boolean;
};

const TopContent = ({
  author,
  name,
  tileArray,
  description,
  showMore,
}: Props) => {
  const [isShowMore, setShowMore] = useState(showMore);

  return (
    <section className="flex justify-between p-3 max-md:flex-col">
      <div className="flex max-w-lg flex-col gap-2">
        <LogoTitleAuthor name={name} author={author} />
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
