import "./ratingcard.scss";
import { AiFillStar } from "react-icons/ai";
import Vector2 from "../../assests/Vector2.png";
const RatingCard = ({ img, spantext, ptext, ptextc }) => {
  return (
    <div className="ratingCard">
      <div className="ratingCard__boxshadow">
        <div className="ratingCard__divStar">
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span className="ratingCard__white">
            <AiFillStar />
          </span>
          <span className="ratingCard__whiteNum">{spantext}</span>
        </div>
        <p>
          Great place to work with the
          <br /> good work culture and people
          <br /> skills.
        </p>
        <div className="ratingCard__divIcons">
          <p className="ratingCard__paraC">{ptextc}</p>
          <p className="ratingCard__paraCText">
            <img src={Vector2} alt="img" className="ratingCard__iconImg" />
            {ptext}
          </p>
        </div>
      </div>
      <div className="ratingCard__divAnalysis">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="ratingCard__divAnalysisPara">
          <h5>Anonymous</h5>
          <p>Business Analysis</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
