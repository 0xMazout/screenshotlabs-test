import { Alchemy, Network } from "alchemy-sdk";

// Optional config object, but defaults to the API key 'demo' and Network 'eth-mainnet'.
const settings = {
  apiKey: "FarmxARHgNUKd8lFkQG_Vzhf68fbTGjT",
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);
