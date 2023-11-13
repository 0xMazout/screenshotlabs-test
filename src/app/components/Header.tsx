import React from "react";
import Navigation from "@/components/render/Header/Navigation";
import LogoTitle from "@/components/render/Header/LogoTitle";
import ThemeSwitch from "@/components/render/Header/ThemeSwitch";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
// Split en 4 éléments.
// Logo title , navigation, search bar, walletconnect+logo buy
const Header = () => {
  /**Define Links - Mocked redirection */
  const arrayLinks = [
    { name: "Explore", href: "/" },
    { name: "Create", href: "/" },
    { name: "Vision", href: "/" },
  ];

  return (
    <header>
      <section className="flex items-center justify-between p-5 dark:bg-black">
        <LogoTitle />
        <Navigation arrayLinks={arrayLinks} />
        <SearchBar itemID="searchHeader" />
        <div className=" flex items-center">
          <Button variant="outline" size="sm">
            Connect Wallet
          </Button>
          <ThemeSwitch itemID="themeSwitcherHeader" />
        </div>
      </section>
    </header>
  );
};

export default Header;
