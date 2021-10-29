import "./header.scss";

// import { InputField } from "../../components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse leftSide" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  to="#"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  className="link-p"
                >
                  Timeline
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#" class="nav-link" href="#" className="link-p">
                  Pear Review
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#" class="nav-link" href="#" className="link-p">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <button class="btn btn-outline-success btncolor" type="submit">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
