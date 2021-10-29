import Account from "./account/Account";
import Advert from "./advert/Advert";
import Hero from "./hero/Hero";
import Logos from "./logos/Logos";
import NewsLetter from "./newsLetter/NewsLetter";
import Reviews from "./reviews/Reviews";

const Section = () => {
  return (
    <div className="section">
      <Hero />
      <Reviews />
      <NewsLetter />
      <Logos />
      <Advert />
      <Account />
    </div>
  );
};

export default Section;
