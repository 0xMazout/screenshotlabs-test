import React from "react";
import Navigation from "./ui/Header/Navigation";
import LogoTitle from "./ui/Header/LogoTitle";
import ThemeSwitch from "./ui/Header/ThemeSwitch";
import SearchBar from "./SearchBar";
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
      <section className="flex items-center justify-between gap-16 p-5 dark:bg-black">
        <LogoTitle />
        <Navigation arrayLinks={arrayLinks} />
        <SearchBar />
        <ThemeSwitch />
      </section>
    </header>
  );
};

export default Header;
