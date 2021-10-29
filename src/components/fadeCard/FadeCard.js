import { AiFillStar } from "react-icons/ai";
// import Vector2 from "../../assests/Vector2.png";
import "./fadecard.scss";
const FadeCard = ({ img, spantext, ptext }) => {
  return (
    <div className="fadeCard">
      <div className="fadeCard__boxshadow">
        <div className="fadeCard__divStar">
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
          <span className="fadeCard__white">
            <AiFillStar />
          </span>
          <span className="fadeCard__whiteNum">{spantext}</span>
        </div>
        <p>{ptext}</p>
      </div>
      <div className="fadeCard__divAnalysis">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="fadeCard__divAnalysisPara">
          <h5>Anonymous</h5>
          <p>Business Analysis</p>
        </div>
      </div>
    </div>
  );
};

export default FadeCard;
