import React from "react";
import { Button } from "../../../ui/button";
import CollapsibleMenu from "@/components/presentationals/globals/CollapsibleMenu";
import RadioMultipleSelect from "@/components/presentationals/globals/RadioMultipleSelect";
import { Combobox } from "../../globals/ComboBox";
import { cn } from "@/lib/utils";

type Props = {
  status: string;
  updateStatus: (status: string) => void;
  priceMax: string;
  updatePriceMax: (priceMax: string) => void;
  marketplaces: string;
  updateMarketplaces: (marketplaces: string) => void;
  collapsibleMenuPrice: JSX.Element;
  collapsibleMenuMarketplace: JSX.Element;
  collapsibleMenuProperties: JSX.Element;
};

const FilterCard = ({
  marketplaces,
  priceMax,
  status,
  collapsibleMenuMarketplace,
  collapsibleMenuPrice,
  collapsibleMenuProperties,
  updateMarketplaces,
  updatePriceMax,
  updateStatus,
}: Props) => {
  return (
    <div className=" h-auto w-60 rounded-lg bg-slate-300 p-3 dark:bg-darkblue-500 max-md:mx-auto">
      <h2 className="my-1 text-center font-styreneA font-bold md:hidden ">
        Filters
      </h2>
      <hr className="my-2" />
      <h2 className="my-1 font-styreneA font-bold ">Status</h2>
      <div className="flex gap-2 max-md:justify-between">
        <Button
          className={cn(
            status == "All"
              ? "bg-white"
              : "bg-black text-white hover:bg-white hover:text-black",
            "font-styreneA font-bold",
          )}
          onClick={() => updateStatus("All")}
        >
          All
        </Button>
        <Button
          className={cn(
            status == "Buy now"
              ? "bg-white"
              : "bg-black text-white hover:bg-white hover:text-black",
            "font-styreneA font-bold",
          )}
          onClick={() => updateStatus("Buy now")}
        >
          Buy now
        </Button>
      </div>
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
