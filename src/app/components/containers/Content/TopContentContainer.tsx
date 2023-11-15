import React, { use, useEffect, useState } from "react";
import ethOutlined from "@public/icons/ethoutlined.svg";
import { StaticImageData } from "next/image";
import { fetchContractMetadata } from "@/api/getContractMetadata";
import { ITileProps } from "@/interfaces/IUIProps";
import { ContractMetadata } from "@/interfaces/IGetContractMetadataAPI";
import TopContent from "@/components/presentationals/Content/TopContent/TopContent";
type Props = {};

const TopContentContainer = async (props: Props) => {
  const mockDataNotAvailable: ITileProps[] = [
    {
      title: "Volume",
      value: "8.768",
      unit: "ETH",
      icon: ethOutlined as StaticImageData,
    },
    {
      title: "Owners",
      value: "2773",
    },
    {
      title: "Royalties",
      value: "5",
      unit: "%",
    },
    {
      title: "Best offer",
      value: "1.23",
      unit: "ETH",
      icon: ethOutlined as StaticImageData,
    },
  ];
  /** Open Sea Description */
  const mockDescription =
    "Everai is a pioneering web3 brand set to expand its universe powered by the collective creativity of its artistic partners and vibrant community.In the Everai Universe, the Everais stand as the mightiest heroes of Shodai's civilization… Get yours now to join us in this collaborative journey to shape the Everai Universe!";

  const fetchMetadata = async () => {
    const res: ContractMetadata = await fetchContractMetadata(
      process.env.EVERAI_CONTRACT_ADDRESS,
    );
    return res;
  };

  const populateData = async () => {
    const dataFromMetadata: ITileProps[] = [];
    const res = await fetchMetadata();
    dataFromMetadata.push({
      title: "Floor",
      value: res.contractMetadata.openSea.floorPrice.toString(),
      unit: "ETH",
      icon: ethOutlined as StaticImageData,
    });
    dataFromMetadata.push({
      title: "Items",
      value: res.contractMetadata.totalSupply.toString(),
    });

    const data = [...dataFromMetadata];
    data.push(...mockDataNotAvailable);
    return data;
  };

  const populateCollectionImage = async () => {
    const res = await fetchMetadata();
    return res.contractMetadata.openSea.imageUrl;
  };

  return (
    <TopContent
      name={"Everai Duos"}
      author={"Screenshot Labs"}
      tileArray={await populateData()}
      description={mockDescription}
      showMore={false}
      collectionImage={await populateCollectionImage()}
    />
  );
};

export default TopContentContainer;
