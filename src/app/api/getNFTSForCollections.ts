export const fetchNFTsForCollection = async (
  collectionContractAddress: string,
  withMetadata: boolean,
  slug?: string,
  limit?: number,
) => {
  const limitAttr = limit && `&limit=${limit}`;
  const slugAttr = slug && `&slug=${slug}`;
  try {
    return fetch(
      `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.ALCHEMY_API_KEY}/getNFTsForCollection?contractAddress=${collectionContractAddress}&withMetadata=${withMetadata}${limitAttr}${slugAttr}`,
    ).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
};
