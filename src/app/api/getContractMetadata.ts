export const fetchContractMetadata = async (contractAddress: string) => {
  try {
    return fetch(
      `
        https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.ALCHEMY_API_KEY}/getContractMetadata?contractAddress=${contractAddress}`,
    ).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
};
