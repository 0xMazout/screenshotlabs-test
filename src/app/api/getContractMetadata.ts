export const fetchContractMetadata = async (
  contractAddress: string | undefined,
) => {
  try {
    const res = await fetch(
      `
        https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.ALCHEMY_API_KEY}/getContractMetadata?contractAddress=${contractAddress}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
