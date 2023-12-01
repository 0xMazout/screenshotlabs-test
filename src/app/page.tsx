import Header from "@/components/containers/Header/Header";
import Footer from "@/components/containers/Footer";
import Banner from "@/components/presentationals/Header/Banner";
import banner from "@public/pictures/banner.png";
import Content from "@/components/containers/Content/Content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner src={banner} alt="banner picture" />
        <Content />
      </main>
      <Footer />
    </>
  );
}
