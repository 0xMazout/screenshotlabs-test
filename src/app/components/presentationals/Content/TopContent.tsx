"use client";
import React, { useState } from "react";
import { ITileProps } from "@/interfaces/IUIProps";
import GridStats from "@/components/containers/Content/GridStats";
import LogoTitleAuthor from "@/components/presentationals/Content/LogoTitleAuthor";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";

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
  const handleOnClick = () => {
    setShowMore((prev) => (prev = !prev));
  };
  return (
    <section className="flex justify-between p-3 max-md:flex-col">
      <div className="flex max-w-lg flex-col gap-2">
        <LogoTitleAuthor name={name} author={author} />
        <div className={cn("flex items-center")}>
          <p className={cn(!isShowMore && `h-6 overflow-clip`, "flex ")}>
            {description}
          </p>
          <p>{!isShowMore && "..."}</p>
          <Button
            variant={"ghost"}
            onClick={handleOnClick}
            className="
             text-blue-400 hover:bg-transparent "
          >
            {!isShowMore ? "Show More" : "Show Less"}
          </Button>
        </div>
      </div>
      <>
        <GridStats tileArray={tileArray} />
      </>
    </section>
  );
};

export default TopContent;
