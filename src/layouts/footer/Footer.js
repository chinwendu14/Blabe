import "./footer.scss";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer pt-5 pb-5">
        {/* <div className="container-fluid pt-5 pb-5"> */}
        {/* <div className="container "> */}
        <div className="container-fluid padding-footer">
          <div className="row">
            <div className="col-md-6 align">
              <p className=" ">
                This platform for minority groups to express their opinions on{" "}
                <br /> employment, workplace experiences and rate employers.
              </p>
              <div className="row socialIcons-footer">
                <p>
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>
                    <FaLinkedinIn />
                  </span>
                </p>
              </div>
              <div className="copy">© Copyright 2021 </div>
            </div>
            <div className="col-md-2 About-footer">
              <h3 className="text-light pb-2">Company</h3>
              <p>
                <Link to="#" className="Link">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="#" className="Link">
                  Contact Us
                </Link>
              </p>
              <p>
                <Link to="#" className="Link">
                  Terms of Use
                </Link>
              </p>
              <p>
                <Link to="#" className="Link">
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="col-md-2 About-footer">
              <h3 className="text-light pb-2">Features</h3>
              <p>
                <Link to="#" className="Link">
                  Timeline
                </Link>
              </p>
              <p>
                <Link to="#" className="Link">
                  Peer Review
                </Link>
              </p>

              <p>
                <Link to="#" className="Link">
                  Create Account
                </Link>
              </p>
              <p>
                <p>
                  <Link to="#" className="Link">
                    Sign In
                  </Link>
                </p>
              </p>
            </div>
            <div className="col-md-2 About-footer">
              <h3 className="text-light pb-2">Contact Us</h3>
              <p>inquiry@thaapp.com</p>
              <p>1-800-200-300</p>

              <p>54 Curragh birin, Castletroy, Limerick, Ireland</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Footer;
