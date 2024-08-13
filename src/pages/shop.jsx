import Hero from "../components/hero/hero";
import NewCollections from "../components/newCollection/newCollection";
import NewsLetter from "../components/newsLetter/newsLetter";
import Offers from "../components/offers/offers";
import Popular from "../components/popular/popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
