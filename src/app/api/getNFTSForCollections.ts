export const fetchNFTsForCollection = async (
  collectionContractAddress: string | undefined,
  withMetadata: boolean,
  limit?: number,
  startToken?: string,
) => {
  const limitAttr = limit ? `&limit=${limit}` : ``;

  const startTokenAttr = startToken?.length ? `&startToken=${startToken}` : ``;
  /**Alchemy API limits to 100 lines each call */
  try {
    const res = await fetch(
      `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTsForCollection?contractAddress=${collectionContractAddress}&withMetadata=${withMetadata}${limitAttr}${startTokenAttr}`,
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
