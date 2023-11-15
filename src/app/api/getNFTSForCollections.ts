export const fetchNFTsForCollection = async (
  collectionContractAddress: string | undefined,
  withMetadata: boolean,
  slug?: string,
  limit?: number,
) => {
  const limitAttr = limit && `&limit=${limit}`;
  const slugAttr = slug && `&slug=${slug}`;
  try {
    const res = await fetch(
      `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.ALCHEMY_API_KEY}/getNFTsForCollection?contractAddress=${collectionContractAddress}&withMetadata=${withMetadata}${limitAttr}${slugAttr}`,
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
