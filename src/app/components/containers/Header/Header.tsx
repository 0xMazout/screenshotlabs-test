import React from "react";
import Navigation from "@/components/presentationals/Header/Navigation";
import LogoTitle from "@/components/presentationals/Header/LogoTitle";
import ThemeSwitch from "@/components/presentationals/Header/ThemeSwitch";
import SearchBar from "@/components/presentationals/globals/SearchBar";
import { Button } from "@/components/ui/button";
import { IArrayLinks } from "@/interfaces/IUIProps";
import ButtonConnectWallet from "../../presentationals/Header/ButtonConnectWallet";
// Split en 4 éléments.
// Logo title , navigation, search bar, walletconnect+logo buy
const Header = () => {
  /**Define Links - Mocked redirection */
  const arrayLinks: IArrayLinks[] = [
    { name: "Explore", link: "/" },
    { name: "Create", link: "/" },
    { name: "Vision", link: "/" },
  ];

  return (
    <header>
      <section className="flex items-center justify-between p-5 dark:bg-black">
        <LogoTitle />
        <Navigation arrayLinks={arrayLinks} />
        <SearchBar
          itemID="searchHeader"
          placeholder="Search NFT, collections"
        />
        <div className=" flex items-center gap-1">
          <ButtonConnectWallet />
          <ThemeSwitch
            className="bg-red-500 font-bold hover:bg-red-400 dark:bg-darkblue-500 dark:hover:bg-spaceblue-800"
            itemID="themeSwitcherHeader"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
