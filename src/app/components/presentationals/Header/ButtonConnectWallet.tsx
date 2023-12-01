"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useConnect, useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { ConnectKitButton } from "connectkit";
import { reduceMiddleOfString } from "../../../lib/utils";
// import { ConnectKitButton } from "./connectKitButton";

type Props = {};

const ButtonConnectWallet = () => {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({
          isConnected,
          isConnecting,
          show,
          hide,
          address,
          ensName,
          chain,
        }) => {
          return (
            <Button
              className="bg-red-500 font-bold hover:bg-red-400 dark:bg-darkblue-500 dark:hover:bg-spaceblue-800"
              variant="outline"
              size="sm"
              onClick={show}
            >
              {isConnected
                ? reduceMiddleOfString(address ? address : "", 10)
                : "Custom Connect"}
            </Button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default ButtonConnectWallet;
