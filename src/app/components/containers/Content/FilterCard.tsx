"use client";

import React, { use, useContext, useEffect, useState } from "react";
import { useFilterStore } from "@/stores/filterStore";
import FilterCard from "@/components/presentationals/Content/BottomContent/FilterCard";
import { Combobox } from "../../presentationals/globals/ComboBox";
import RadioMultipleSelect from "../../presentationals/globals/RadioMultipleSelect";
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
        name: "All",
        value: "All",
        label: "All",
      },
      {
        name: "0.1",
        value: "-0.1 ETH",
        label: "less than 0.1 ETH",
      },
      {
        name: "0.2",
        value: "-0.2 ETH",
        label: "less than 0.2 ETH",
      },
      {
        name: "0.5",
        value: "-0.5 ETH",
        label: "less than 0.5 ETH",
      },
      {
        name: "1",
        value: "-1 ETH",
        label: "less than 1 ETH",
      },
    ];

    return (
      <div>
        <RadioMultipleSelect arrayData={arrayData} defaultValue="All" />
      </div>
    );
  };

  const buildMarketplaceMenu = () => {
    const arrayData = [
      {
        name: "all",
        value: "all",
        label: "All",
      },
      {
        name: "opensea",
        value: "opensea",
        label: "OpenSea",
      },
      {
        name: "rarible",
        value: "rarible",
        label: "Rarible",
      },
    ];
    return (
      <div>
        <RadioMultipleSelect arrayData={arrayData} defaultValue="all" />
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

  return (
    <div>
      <FilterCard
        status={status}
        updateStatus={(prev) => {
          setStatus(() => prev);
        }}
        priceMax={priceMax}
        updatePriceMax={(prev) => setPriceMax(() => prev)}
        marketplaces={marketplaces}
        updateMarketplaces={(prev) => {
          setMarketplaces(() => prev);
        }}
        collapsibleMenuPrice={buildPriceMenu()}
        collapsibleMenuMarketplace={buildMarketplaceMenu()}
        collapsibleMenuProperties={buildPropertiesMenu()}
      />
    </div>
  );
};

export default FilterCardContainer;
