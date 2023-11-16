import React from "react";
import { Button } from "../../../ui/button";
import CollapsibleMenu from "@/components/presentationals/globals/CollapsibleMenu";
import RadioMultipleSelect from "@/components/presentationals/globals/RadioMultipleSelect";
import { Combobox } from "../../globals/ComboBox";
import { cn } from "@/lib/utils";

type Props = {
  status: string;
  updateStatus: (status: string) => void;
  collapsibleMenuPrice: JSX.Element;
  collapsibleMenuMarketplace: JSX.Element;
  collapsibleMenuProperties: JSX.Element;
  statusButton: JSX.Element;
};

const FilterCard = ({
  collapsibleMenuMarketplace,
  collapsibleMenuPrice,
  collapsibleMenuProperties,
  statusButton,
}: Props) => {
  return (
    <div className=" h-fit w-60 rounded-lg bg-slate-300 p-3 dark:bg-darkblue-500 max-md:mx-auto">
      <h2 className="my-1 text-center font-styreneA font-bold md:hidden ">
        Filters
      </h2>
      <hr className="my-2  md:hidden" />
      <h2 className="my-1 font-styreneA font-bold ">Status</h2>
      <div className="flex gap-2 max-md:justify-between">{statusButton}</div>
      <hr className="my-2" />
      <CollapsibleMenu name={"Price"} content={collapsibleMenuPrice} />
      <hr className="my-2" />

      <CollapsibleMenu
        name={"Marketplace"}
        content={collapsibleMenuMarketplace}
      />

      <hr className="my-2" />
      <CollapsibleMenu
        name={"Properties"}
        content={collapsibleMenuProperties}
      />
    </div>
  );
};

export default FilterCard;
