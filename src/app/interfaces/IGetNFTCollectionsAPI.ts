export interface GetNFTCollection {
  nfts: Nft[];
  nextToken: string;
}

export interface Nft {
  contract: Contract;
  id: ID;
  title: string;
  description: string;
  tokenUri: TokenURI;
  media: Media[];
  metadata: Metadata;
  timeLastUpdated: Date;
  contractMetadata: ContractMetadata;
}

export interface Contract {
  address: string;
}

export interface ContractMetadata {
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
export interface ID {
  tokenId: string;
  tokenMetadata: TokenMetadata;
}

export interface TokenMetadata {
  tokenType: string;
}

export interface Media {
  gateway: string;
  thumbnail: string;
  raw: string;
  format: string;
  bytes: number;
}

export interface Metadata {
  name: string;
  image: string;
  attributes: Attribute[];
}

export interface Attribute {
  value: string;
  trait_type: string;
}

export interface TokenURI {
  gateway: string;
  raw: string;
}
