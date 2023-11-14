import React from "react";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";

type Props = {
  description: string;
  isShowMore: boolean;
  handleOnClick: () => void;
};

const Description = ({ description, isShowMore, handleOnClick }: Props) => {
  return (
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
  );
};

export default Description;
