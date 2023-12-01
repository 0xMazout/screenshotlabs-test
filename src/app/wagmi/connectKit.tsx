"use client";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "alcht_C7oqqHxkyK95m95c91N71y8P1o3ygs", // or infuraId
    walletConnectProjectId: "e6c2be85f3d63add4296ed45f3c2083b",

    // Required
    appName: "MazoutTeam's App",

    // Optional
    appDescription: "Display your NFTs on your website",
    appUrl: "https://screenshotlabs-test.vercel.app/", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);
export const ConnectKitWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        {children}
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};
