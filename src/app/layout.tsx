import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/containers/Provider";
import { Toaster } from "@/components/ui/toaster";
import { ConnectKitWrapper } from "./wagmi/connectKit";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Screenshot Labs Test",
};

export default function RootLayout({
  children,
}: {
  children: string | React.ReactElement | React.ReactElement[];
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConnectKitWrapper>
          <Provider>{children}</Provider>
        </ConnectKitWrapper>
        <Toaster />
      </body>
    </html>
  );
}
