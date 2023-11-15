/**Contract Meta Data API Result Types */
export interface ContractMetadata {
  address: string;
  contractMetadata: ContractMetadataClass;
}

export interface ContractMetadataClass {
  name: string;
  symbol: string;
  totalSupply: string;
  tokenType: string;
  contractDeployer: string;
  deployedBlockNumber: number;
  openSea: OpenSea;
}

export interface OpenSea {
  floorPrice: number;
  collectionName: string;
  collectionSlug: string;
  safelistRequestStatus: string;
  imageUrl: string;
  description: string;
  externalUrl: string;
  twitterUsername: string;
  discordUrl: string;
  bannerImageUrl: string;
  lastIngestedAt: Date;
}
/**Contract Meta Data API Result Types END */

/** Contract GetCollections NFT API */
