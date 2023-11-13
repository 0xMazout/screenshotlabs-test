import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/render/Header/Banner";
import banner from "./public/banner.png";

export default function Home() {
  return (
    <>
      <Header />
      <Banner src={banner} alt="banner picture" />
      <main></main>
      <Footer />
    </>
  );
}
