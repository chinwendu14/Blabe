import "./reviews.scss";
import { RatingCard } from "../../../components";
import Elipse1 from "../../../assests/Ellipse1.png";
import Elipse2 from "../../../assests/Ellipse2.png";
import Elipse3 from "../../../assests/Ellipse3.png";
import Elipse4 from "../../../assests/Ellipse4.png";
import Elipse5 from "../../../assests/Ellipse5.png";
import Elipse6 from "../../../assests/Ellipse6.png";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews__headertext text-center pt-6">
        <h3>Featured Reviews</h3>
        <p>
          Here are some from the review been done by some of the employees on
          this platform.
        </p>
      </div>
      <div className="reviews__card">
        <RatingCard
          spantext="4.0"
          ptextc="sexual assault"
          ptext="Google"
          img={Elipse1}
        />
        <RatingCard
          spantext="4.0"
          ptextc="nepotism"
          ptext="Apple"
          img={Elipse2}
        />
        <RatingCard
          spantext="4.0"
          ptextc="racism"
          ptext="Google"
          img={Elipse3}
        />
      </div>
      <div className="reviews__card">
        <RatingCard
          spantext="4.0"
          ptextc="sexual assault"
          ptext="Starbuck"
          img={Elipse4}
        />
        <RatingCard
          spantext="4.0"
          ptextc="nepotism"
          ptext="Facebook"
          img={Elipse5}
        />
        <RatingCard
          spantext="4.0"
          ptextc="racism"
          ptext="Google"
          img={Elipse6}
        />
      </div>
      <div className="reviews__span">
        <div className="reviews__divcol">ww</div>
        <div className="reviews__divborder">ww</div>
        <div className=" reviews__divborder">ww</div>
      </div>
    </div>
  );
};

export default Reviews;
