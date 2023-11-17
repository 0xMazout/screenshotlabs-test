"use client";
import React, { useEffect, useState } from "react";
import { IArrayLinks } from "@/interfaces/IUIProps";

import BottomContent from "@/components/presentationals/Content/BottomContent/BottomContent";
import { fetchNFTsForCollection } from "@/api/getNFTSForCollections";
import { GetNFTCollection, Nft } from "@/interfaces/IGetNFTCollectionsAPI";

import { useSearchStore } from "@/stores/searchStore";
import NFTCards from "@/components/presentationals/Content/BottomContent/NFTCards";
import { useToast } from "@/components/ui/use-toast";
type Props = {};

/** Contain the Data for BottomContent Component:
 * the menu with Items, Analytics, Activity
 * The search Bar
 * The display of Nfts
 * The filters
 * All the Fetching and Filter process */

const BottomContentContainer = (props: Props) => {
  const { isFetchAPINeeded } = useSearchStore();
  const { search, firstItemToQuery } = useSearchStore();
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCollection = async () => {
      if (isFetchAPINeeded && search == "") {
        return fetchCollectionOnStarter(firstItemToQuery.toString());
      } else {
        return fetchCollectionOnStarter(search);
      }
    };
    /** Fetch Collection from API */
    const fetchCollectionOnStarter = async (starterItem: string) => {
      try {
        const res: GetNFTCollection = await fetchNFTsForCollection(
          process.env.NEXT_PUBLIC_EVERAI_CONTRACT_ADDRESS,
          true,
          500,
          starterItem,
        );
        return res;
      } catch (err) {
        toast({
          title: "Error",
          description: "Error while fetching API",
          duration: 9000,
        });
        console.error(err);
      }
    };

    /** Filter Collection from Search Value in Search Bar */
    const filterFollowingSearch = async () => {
      try {
        const res = await fetchCollection();

        if (search == "" && res) return creatingCards(res.nfts);

        const filtered = res?.nfts.filter((nft) =>
          nft.metadata.name.toLowerCase().includes(search.toLowerCase()),
        );

        if (filtered) return creatingCards(filtered);
      } catch (error) {
        toast({
          title: "Error",
          description: "Error while Filtering Results",
          duration: 9000,
        });
        console.error(error);
      }
    };
    /** Create Cards from filtered Nfts */
    const creatingCards = async (resultsAPi: Nft[]) => {
      let localCards: JSX.Element[] = [];

      localCards = resultsAPi.map((nft, index) => {
        /** Mock Price and Buy Now button */
        const randomprice = (Math.random() * 10).toFixed(2);
        const randomBuyNow = () => {
          if (Math.floor(Math.random() * 10) >= 5) return true;
          else return false;
        };
        return (
          <NFTCards
            key={nft.id.tokenId}
            image={nft.metadata.image}
            name={nft.metadata.name}
            price={randomprice.toString() + " ETH"}
            isSelling={randomBuyNow()}
          />
        );
      });

      setCards(localCards);
    };
    filterFollowingSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstItemToQuery, isFetchAPINeeded, search]);

  /** Generate and Mock Navigation links*/
  const mockArrayLinks: IArrayLinks[] = [
    {
      name: "Items",
      link: "/",
    },
    {
      name: "Analytics",
      link: "/",
    },
    {
      name: "Activity",
      link: "/",
    },
  ];

  return (
    <div>
      <BottomContent arrayLinks={mockArrayLinks} nftsCards={cards} />
    </div>
  );
};

export default BottomContentContainer;
