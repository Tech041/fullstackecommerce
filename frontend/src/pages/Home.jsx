import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <main>
      <SEO content={"Home Page"} title={"Home"} route={"/"} />
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </main>
  );
};

export default Home;
