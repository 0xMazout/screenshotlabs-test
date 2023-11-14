export const fetchContractMetadata = async (contractAddress: string) => {
  try {
    const res = await fetch(
      `
        https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.ALCHEMY_API_KEY}/getContractMetadata?contractAddress=${contractAddress}`,
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
