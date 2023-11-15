"use client";

import React, { use, useContext, useEffect, useState } from "react";
import { useFilterStore } from "@/stores/filterStore";
import FilterCard from "@/components/presentationals/Content/BottomContent/FilterCard";
import { Combobox } from "@/components/presentationals/globals/ComboBox";
import RadioMultipleSelect from "@/components/presentationals/globals/RadioMultipleSelect";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
type Props = {};

/** This container will prepare Data after receive filter  */
const FilterCardContainer = (props: Props) => {
  // const context = useFilterStore();
  const [status, setStatus] = useState("All");
  const [priceMax, setPriceMax] = useState("All");
  const [marketplaces, setMarketplaces] = useState("All");

  const buildPriceMenu = () => {
    const arrayData = [
      {
        value: "All",
        label: "All",
      },
      {
        value: "0.1",
        label: "less than 0.1 ETH",
      },
      {
        value: "0.2",
        label: "less than 0.2 ETH",
      },
      {
        value: "0.5 ETH",
        label: "less than 0.5 ETH",
      },
      {
        value: "1",
        label: "less than 1 ETH",
      },
    ];

    return (
      <div>
        <RadioMultipleSelect
          arrayData={arrayData}
          defaultValue="All"
          setValueSelected={(prev) => setPriceMax(prev)}
        />
      </div>
    );
  };

  const buildMarketplaceMenu = () => {
    const arrayData = [
      {
        value: "All",
        label: "All",
      },
      {
        value: "opensea",
        label: "OpenSea",
      },
      {
        value: "rarible",
        label: "Rarible",
      },
    ];
    return (
      <div>
        <RadioMultipleSelect
          arrayData={arrayData}
          defaultValue="All"
          setValueSelected={(prev) => setMarketplaces(prev)}
        />
      </div>
    );
  };

  const buildPropertiesMenu = () => {
    /** For each type we have to create an array of object {value, trait_type, id_nft} */
    /** We are going to fake this
     * imagine we have all the metadata of all the nft collections into this array
     */
    const arrayOfAllTraitTypes = [
      {
        trait_type: "Back",
        pairValueId: [
          {
            value: "Shinobi",
            id: 1,
          },
          {
            value: "Helper",
            id: 2,
          },
          {
            value: "Falcon Eye",
            id: 3,
          },
        ],
      },
      {
        trait_type: "Composition",
        pairValueId: [
          {
            value: "Epic Full Set",
            id: 1,
          },
          {
            value: "Epic Set",
            id: 2,
          },
        ],
      },
      {
        trait_type: "Crown",
        pairValueId: [
          {
            value: "Shinobi",
            id: 1,
          },
          {
            value: "Helper",
            id: 2,
          },
          {
            value: "Duo's quarters",
            id: 3,
          },
        ],
      },
      {
        trait_type: "Mouthpiece",
        pairValueId: [
          {
            value: "Duo's quarters",
            id: 1,
          },
          {
            value: "Fearless",
            id: 2,
          },
          {
            value: "Falcon Eye",
            id: 3,
          },
        ],
      },
      {
        trait_type: "Shoulders",
        pairValueId: [
          {
            value: "Exterminator",
            id: 1,
          },
          {
            value: "Helper",
            id: 2,
          },
          {
            value: "Falcon Eye",
            id: 3,
          },
        ],
      },
      {
        trait_type: "Visor",
        pairValueId: [
          {
            value: "Shinobi",
            id: 1,
          },
          {
            value: "Imperial",
            id: 2,
          },
          {
            value: "Falcon Eye",
            id: 3,
          },
        ],
      },
    ];
    const res: React.JSX.Element[] = arrayOfAllTraitTypes.map(
      (trait_typeArray, index) => {
        return (
          <Combobox
            key={index}
            arrayValue={trait_typeArray.pairValueId.map((value) => {
              return value.value;
            })}
            typeValue={trait_typeArray.trait_type}
          />
        );
      },
    );
    /** This won't be faked we are going to search through each trait_type each type should have a combo box */
    return <div className="justify-evenly gap-36">{res}</div>;
  };

  const buildStatusButton = () => {
    return (
      <>
        <Button
          className={cn(
            status == "All"
              ? "bg-white"
              : "bg-black text-white hover:bg-white hover:text-black",
            "font-styreneA font-bold",
          )}
          onClick={() => setStatus("All")}
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
          onClick={() => setStatus("Buy now")}
        >
          Buy now
        </Button>
      </>
    );
  };

  return (
    <div>
      <FilterCard
        status={status}
        updateStatus={(prev) => {
          setStatus(() => prev);
        }}
        collapsibleMenuPrice={buildPriceMenu()}
        collapsibleMenuMarketplace={buildMarketplaceMenu()}
        collapsibleMenuProperties={buildPropertiesMenu()}
        statusButton={buildStatusButton()}
      />
    </div>
  );
};

export default FilterCardContainer;
