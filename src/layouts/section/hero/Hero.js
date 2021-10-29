import "./hero.scss";
import { Link } from "react-router-dom";
import Vector from "../../../assests/Vector.png";
import Vector1 from "../../../assests/Vector1.png";
import card1 from "../../../assests/card1.png";
import card2 from "../../../assests/card2.png";
import hero from "../../../assests/hero.png";
import { FadeCard } from "../../../components";
// import FadeCard from "../../components";
import Eslispe1 from "../../../assests/Ellipse1.png";
import Eslispe2 from "../../../assests/Ellipse2.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [heroImg, setHeroImg] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroImg === 2) {
        return setHeroImg(1);
      }

      return setHeroImg((prev) => prev + 1);
      // return setHeroImg(2);
    }, [4000]);

    return () => clearTimeout(timer);
  }, [heroImg]);
  return (
    <div className=" hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero-business">
            <h2>
              Grow your business <br />
              with real-time reviews
            </h2>
            <p>
              Find out more on what people and saying about your
              <br /> company, with real time reveiw and data.
            </p>
            <div className="formBtn">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search for companies"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="hero_linkDiv">
              <p className="linkDiv">
                Already have an account?<Link className="Link">Sign In</Link>
              </p>
            </div>
            <div className="hero__quote">
              <p>
                <span className="hero__quoteright">
                  <img src={Vector} alt="img" />
                  <img src={Vector} alt="img" />
                </span>
                A life spent making mistakes is not only more
                <br /> honorable, but more useful than a life spent doing
                nothing.
                <span className="hero__quoteleft">
                  <img src={Vector1} alt="img" />
                  <img src={Vector1} alt="img" />
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 hero__heroImg">
            <div className="row ">
              <span className=" hero__heroImgspanNum">
                <img src={card2} alt="img" />
              </span>
              <div className=" hero__heroImgspanMan">
                <img src={hero} alt="img" />
                <div className=" hero__heroImgspanManCard">
                  <div className="hero__heroImgspanManCardCont">
                    <div
                      className={`hero__heroImgspanManCard1 ${
                        heroImg === 1 ? "active" : ""
                      }`}
                    >
                      <FadeCard
                        img={Eslispe1}
                        ptext="Great place to work with the good 
                        work culture and people skills.
"
                      />
                    </div>
                    <div
                      className={`hero__heroImgspanManCard1 ${
                        heroImg === 2 ? "active" : ""
                      }`}
                    >
                      <FadeCard
                        img={Eslispe2}
                        ptext="Find out more on what people and saying about your
                               company, with real time reveiw and data."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <span className=" hero__heroImgspan">
                <img src={card1} alt="img" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
