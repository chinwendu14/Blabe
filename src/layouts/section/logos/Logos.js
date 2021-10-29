import "./logos.scss";
import img1 from "../../../assests/img1.png";
import img2 from "../../../assests/img2.png";
import img3 from "../../../assests/img3.png";
import img4 from "../../../assests/img4.png";
import img5 from "../../../assests/img5.png";

import "./logos.scss";
const Logos = () => {
  return (
    <div className="container-fluid">
      <div className=" row logos-flex">
        <img src={img4} alt="img" />
        <img src={img5} alt="img" />
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />

        <img src={img3} alt="img" />
      </div>
    </div>
  );
};

export default Logos;
